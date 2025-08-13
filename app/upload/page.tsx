"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setUrl("");
    if (!file) return;
    setIsUploading(true);
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/api/upload", {
        method: "POST",
        body,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Upload failed");
      setUrl(data.url);
    } catch (err: unknown) {
      let message = "Upload failed";
      if (err instanceof Error) message = err.message;
      else if (typeof err === "string") message = err;
      setError(message);
    } finally {
      setIsUploading(false);
    }
  };

  const isVideo = (u: string) => /\.(mp4|mov|webm)$/i.test(u);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Upload media to Vercel Blob</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block"
          accept="image/jpeg,image/png,image/webp,image/avif,video/mp4,video/quicktime,video/webm"
        />
        <button
          type="submit"
          disabled={!file || isUploading}
          className="px-4 py-2 bg-slate-900 text-white disabled:opacity-50"
        >
          {isUploading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {error && <p className="text-red-600 mt-4">{error}</p>}
      {url && (
        <div className="mt-6 space-y-3">
          <div className="text-sm break-all">URL: {url}</div>
          {isVideo(url) ? (
            <video src={url} controls className="w-full max-w-xl" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={url} alt="Uploaded" className="w-full max-w-xl" />
          )}
        </div>
      )}
    </div>
  );
}


