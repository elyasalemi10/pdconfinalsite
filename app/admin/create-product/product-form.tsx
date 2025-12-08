"use client";

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
  const [areaCounters, setAreaCounters] = useState<Record<string, number>>({});
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [manufacturerDescription, setManufacturerDescription] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitState, setSubmitState] = useState<"idle" | "saving" | "saved">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const codeExample = useMemo(() => {
    const prefix = area ? AREA_PREFIX[area as Exclude<Area, "">] : "X";
    return `${prefix}${String(1).padStart(3, "0")}`;
  }, [area]);

  const handleAreaChange = (value: Area) => {
    setArea(value);
    if (!value) {
      setCode("");
      return;
    }

    const prefix = AREA_PREFIX[value];
    const currentCount = areaCounters[prefix] ?? 0;
    const nextCount = currentCount + 1;
    setCode(`${prefix}${String(nextCount).padStart(3, "0")}`);
  };

  const handleImageChange = (file: File | null) => {
    setImageFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!description.trim()) {
      setError("Description is required.");
      return;
    }

    if (!imageFile) {
      setError("Image is required.");
      return;
    }

    if (!area) {
      setError("Area is required to generate a code.");
      return;
    }

    if (!code) {
      setError("Code is not generated. Pick an area again.");
      return;
    }

    setSubmitState("saving");

    // Placeholder: replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 600));

    setSubmitState("saved");

    const prefix = AREA_PREFIX[area];
    setAreaCounters((prev) => ({
      ...prev,
      [prefix]: (prev[prefix] ?? 0) + 1,
    }));

    // Reset form after "save"
    setDescription("");
    setManufacturerDescription("");
    setProductDetails("");
    setPrice("");
    setImageFile(null);
    setImagePreview(null);
    setCode("");
    setArea("");

    setTimeout(() => setSubmitState("idle"), 1200);
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
              onChange={(e) => handleAreaChange(e.target.value as Area)}
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
              Code
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-slate-50"
              value={code}
              readOnly
              placeholder="Select an area to generate (e.g., B001)"
            />
            <p className="text-xs text-slate-500">
              Code auto-fills when you choose an area. In this mock, counts reset
              on refresh; connect to your DB to persist increments.
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
                <div className="relative w-full aspect-video">
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
                required
              />
            </div>
            <p className="text-xs text-slate-500">
              Images are required. Replace the placeholder upload handler with
              your API/storage flow.
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {error}
        </div>
      )}

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={submitState === "saving"}>
          {submitState === "saving"
            ? "Saving..."
            : submitState === "saved"
              ? "Saved"
              : "Save Product"}
        </Button>
        <p className="text-xs text-slate-500">
          Description and Image are mandatory. Code auto-fills from area.
        </p>
      </div>
    </form>
  );
}

