"use client";

import imageCompression from "browser-image-compression";
import Image from "next/image";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

type Area = "Kitchen" | "Bedroom" | "Living Room" | "Patio" | "";

const AREA_PREFIX: Record<Exclude<Area, "">, string> = {
  Kitchen: "A",
  Bedroom: "B",
  "Living Room": "C",
  Patio: "D",
};

const AREA_OPTIONS: Area[] = ["Kitchen", "Bedroom", "Living Room", "Patio"];

export default function CreateProductForm() {
  const [area, setArea] = useState<Area>("");
  const [description, setDescription] = useState("");
  const [manufacturerDescription, setManufacturerDescription] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const codeExample = useMemo(() => {
    const prefix = area ? AREA_PREFIX[area as Exclude<Area, "">] : "X";
    return `${prefix}${String(1).padStart(3, "0")}`;
  }, [area]);

  const handleImageChange = (file: File | null) => {
    setImageFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    } else {
      setImagePreview(null);
    }
  };

  const resetForm = () => {
    setArea("");
    setDescription("");
    setManufacturerDescription("");
    setProductDetails("");
    setPrice("");
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!description.trim()) {
      setError("Description is required.");
      return;
    }
    if (!imageFile) {
      setError("Image is required.");
      return;
    }
    if (!area) {
      setError("Area is required.");
      return;
    }

    setSaving(true);

    try {
      // Compress image before upload to avoid 413 errors
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(imageFile, options);

      const form = new FormData();
      form.append("area", area);
      form.append("description", description.trim());
      form.append("manufacturerDescription", manufacturerDescription.trim());
      form.append("productDetails", productDetails.trim());
      form.append("price", price.trim());
      form.append("image", compressedFile);

      const res = await fetch("/api/admin/products", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "Failed to create product.");
        setSaving(false);
        return;
      }

      setSuccess(`Product created successfully! Code: ${data.product?.code}`);
      resetForm();
    } catch (err) {
      setError("Network error while saving product.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr,280px] gap-6">
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-slate-700">
              Area<span className="text-red-600">*</span>
            </label>
            <select
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
              value={area}
              onChange={(e) => setArea(e.target.value as Area)}
              required
            >
              <option value="">Select area</option>
              {AREA_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-500">
              Prefix mapping — Kitchen: A, Bedroom: B, Living Room: C, Patio: D
              (example: {codeExample})
            </p>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-slate-700">
              Description<span className="text-red-600">*</span>
            </label>
            <textarea
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-slate-700">
              Manufacturer Description
            </label>
            <textarea
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              rows={2}
              value={manufacturerDescription}
              onChange={(e) => setManufacturerDescription(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-slate-700">
              Product Details
            </label>
            <textarea
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              rows={2}
              value={productDetails}
              onChange={(e) => setProductDetails(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-slate-700">
              Price
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="e.g. 199.99"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-slate-700">
              Image<span className="text-red-600">*</span>
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 flex flex-col items-center justify-center gap-2 bg-slate-50">
              {imagePreview ? (
                <div className="relative w-full max-w-[120px] aspect-[4/3]">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              ) : (
                <p className="text-sm text-slate-500 text-center">
                  Upload the main product image (required)
                </p>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e.target.files?.[0] ?? null)}
                className="w-full text-sm"
                required={!imageFile}
              />
            </div>
            <p className="text-xs text-slate-500">
              Images are compressed automatically and uploaded to R2 storage.
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {error}
        </div>
      )}

      {success && (
        <div className="text-sm text-green-600 bg-green-50 border border-green-200 rounded-md px-3 py-2">
          {success}
        </div>
      )}

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={saving}>
          {saving ? "Creating product..." : "Create product"}
        </Button>
        <p className="text-xs text-slate-500">
          Description and Image are required. Code is auto-generated.
        </p>
      </div>
    </form>
  );
}
