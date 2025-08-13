import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "edge"; // Faster uploads on Vercel edge runtime

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json({ error: "Expected multipart/form-data" }, { status: 400 });
    }

    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Missing 'file' form field" }, { status: 400 });
    }

    // Optional: basic type allowlist (adjust as needed)
    const allowed = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/avif",
      "video/mp4",
      "video/quicktime",
      "video/webm",
    ];
    if (!allowed.includes(file.type)) {
      return NextResponse.json({ error: "Unsupported file type" }, { status: 415 });
    }

    // Use a namespaced key to avoid collisions
    const ext = file.name.split(".").pop()?.toLowerCase() || "bin";
    const key = `uploads/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    // Upload to Vercel Blob with public read access
    const { url } = await put(key, file, {
      access: "public",
      contentType: file.type,
      addRandomSuffix: false,
    });

    return NextResponse.json({ url });
  } catch (err) {
    console.error("Upload error", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}


