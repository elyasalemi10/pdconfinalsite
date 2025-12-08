"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

type Area = "Kitchen" | "Bedroom" | "Living Room" | "Patio" | "";

type DraftProduct = {
  id: string;
  area: Area;
  code: string;
  description: string;
  manufacturerDescription: string;
  productDetails: string;
  areaDescription: string;
  price: string;
  imageFile: File;
  imagePreview: string | null;
};

const AREA_PREFIX: Record<Exclude<Area, "">, string> = {
  Kitchen: "A",
  Bedroom: "B",
  "Living Room": "C",
  Patio: "D",
};

const AREA_OPTIONS: Area[] = ["Kitchen", "Bedroom", "Living Room", "Patio"];

export default function CreateProductForm() {
  const [area, setArea] = useState<Area>("");
  const [areaDescription, setAreaDescription] = useState("");
  const [areaCounters, setAreaCounters] = useState<Record<string, number>>({});
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [manufacturerDescription, setManufacturerDescription] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<DraftProduct[]>([]);
  const [saveStatuses, setSaveStatuses] = useState<
    { id: string; status: "success" | "error"; message: string; code?: string }[]
  >([]);
  const [savingAll, setSavingAll] = useState(false);
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

  const resetForm = () => {
    setArea("");
    setAreaDescription("");
    setCode("");
    setDescription("");
    setManufacturerDescription("");
    setProductDetails("");
    setPrice("");
    setImageFile(null);
    setImagePreview(null);
  };

  const buildDraftFromForm = (): DraftProduct | null => {
    if (!description.trim()) {
      setError("Description is required.");
      return null;
    }
    if (!imageFile) {
      setError("Image is required.");
      return null;
    }
    if (!area) {
      setError("Area is required to generate a code.");
      return null;
    }
    if (!code) {
      setError("Code is not generated. Pick an area again.");
      return null;
    }

    setError(null);
    return {
      id: crypto.randomUUID(),
      area,
      code,
      description: description.trim(),
      manufacturerDescription: manufacturerDescription.trim(),
      productDetails: productDetails.trim(),
      areaDescription: areaDescription.trim(),
      price: price.trim(),
      imageFile,
      imagePreview,
    };
  };

  const handleAddDraft = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const draft = buildDraftFromForm();
    if (!draft) return;

    const prefix = AREA_PREFIX[draft.area];
    setAreaCounters((prev) => ({
      ...prev,
      [prefix]: (prev[prefix] ?? 0) + 1,
    }));
    setDrafts((prev) => [...prev, draft]);
    resetForm();
  };

  const handleSaveAll = async () => {
    const currentHasData =
      area || description || manufacturerDescription || productDetails || price;

    let items = drafts;
    if (currentHasData) {
      const extra = buildDraftFromForm();
      if (!extra) return;
      items = [...drafts, extra];
    }

    if (items.length === 0) {
      setError("Add at least one product before saving.");
      return;
    }

    setSavingAll(true);
    setSaveStatuses([]);
    setError(null);

    const results: { id: string; status: "success" | "error"; message: string; code?: string }[] = [];

    for (const item of items) {
      const form = new FormData();
      form.append("area", item.area);
      form.append("description", item.description);
      form.append("manufacturerDescription", item.manufacturerDescription);
      form.append("productDetails", item.productDetails);
      form.append("areaDescription", item.areaDescription);
      form.append("price", item.price);
      form.append("image", item.imageFile);

      try {
        const res = await fetch("/api/admin/products", {
          method: "POST",
          body: form,
        });
        const data = await res.json();
        if (!res.ok) {
          results.push({
            id: item.id,
            status: "error",
            message: data?.error || "Failed to save product.",
          });
          continue;
        }
        results.push({
          id: item.id,
          status: "success",
          message: "Saved",
          code: data.product?.code,
        });
      } catch (err) {
        results.push({
          id: item.id,
          status: "error",
          message: "Network error while saving.",
        });
      }
    }

    setSaveStatuses(results);
    setSavingAll(false);
    setDrafts([]);
    resetForm();
  };

  const removeDraft = (id: string) => {
    setDrafts((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <form
      onSubmit={handleAddDraft}
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
              Code auto-fills when you choose an area. Final code comes from the
              database and may increment further if others save simultaneously.
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
              Area Description
            </label>
            <input
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              value={areaDescription}
              onChange={(e) => setAreaDescription(e.target.value)}
              placeholder="Optional note about the area"
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
                required={!imageFile}
              />
            </div>
            <p className="text-xs text-slate-500">
              Description and Image are mandatory. Images upload to R2 when you
              click “Add to system”.
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {error}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" variant="outline">
          Add another product
        </Button>
        <Button
          type="button"
          onClick={handleSaveAll}
          disabled={savingAll}
        >
          {savingAll ? "Saving..." : "Add to system"}
        </Button>
        <p className="text-xs text-slate-500">
          Add multiple products, then push them all to the system.
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">
            Draft products ({drafts.length})
          </h3>
        </div>
        {drafts.length === 0 && (
          <p className="text-sm text-slate-500">No drafts yet.</p>
        )}
        {drafts.map((draft) => (
          <div
            key={draft.id}
            className="bg-white border border-slate-200 rounded-md p-3 flex flex-col md:flex-row gap-3"
          >
            <div className="flex-1 min-w-0 space-y-1">
              <p className="text-sm font-semibold text-slate-900">
                {draft.code} — {draft.description}
              </p>
              <p className="text-xs text-slate-500">
                {draft.area} · {draft.manufacturerDescription || "No mfr desc"}
              </p>
              <p className="text-xs text-slate-500">
                {draft.productDetails || "No product details"}
              </p>
              {draft.areaDescription && (
                <p className="text-xs text-slate-500">
                  Area description: {draft.areaDescription}
                </p>
              )}
              {draft.price && (
                <p className="text-xs text-slate-500">Price: {draft.price}</p>
              )}
            </div>
            {draft.imagePreview && (
              <div className="relative h-20 w-32 flex-shrink-0">
                <Image
                  src={draft.imagePreview}
                  alt={draft.description}
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}
            <div className="flex items-center gap-2 md:flex-col md:items-end">
              <Button
                size="sm"
                variant="destructive"
                onClick={() => removeDraft(draft.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      {saveStatuses.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-2">
          <div className="text-sm font-semibold text-slate-900">
            Save results
          </div>
          {saveStatuses.map((s) => (
            <div
              key={s.id}
              className="text-sm"
            >
              <span
                className={
                  s.status === "success" ? "text-green-600" : "text-red-600"
                }
              >
                {s.status === "success" ? "Saved" : "Error"}:
              </span>{" "}
              {s.message}
              {s.code ? ` (server code: ${s.code})` : ""}
            </div>
          ))}
        </div>
      )}
    </form>
  );
}

