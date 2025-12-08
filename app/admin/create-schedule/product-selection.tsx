"use client";

import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  code: string;
  area: string;
  description: string;
  manufacturerDescription: string | null;
  productDetails: string | null;
  price: number | null;
  imageUrl: string;
};

type SelectionRow = Product & {
  quantity: number;
  notes: string;
  priceOverride: string;
  areaDescriptionOverride: string;
};

export default function ProductSelection() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selection, setSelection] = useState<SelectionRow[]>([]);
  const [address, setAddress] = useState("");
  const [date, setDate] = useState(() =>
    new Date().toISOString().slice(0, 10)
  );
  const [defaultAreaDescription, setDefaultAreaDescription] = useState("");
  const [globalNotes, setGlobalNotes] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handle = setTimeout(() => {
      void fetchResults(query);
    }, 250);
    return () => clearTimeout(handle);
  }, [query]);

  async function fetchResults(q: string) {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/products?q=${encodeURIComponent(q)}`);
      const data = (await res.json()) as { products: Product[] };
      setResults(data.products ?? []);
    } catch {
      // ignore fetch errors in UI
    } finally {
      setLoading(false);
    }
  }

  const placeholderRows = useMemo(
    () =>
      selection.map((row) => ({
        address,
        date,
        code: row.code,
        image: row.imageUrl,
        description: row.description,
        "manufacturer-description": row.manufacturerDescription ?? "",
        "product-details": row.productDetails ?? "",
        "area-description":
          row.areaDescriptionOverride ||
          defaultAreaDescription ||
          row.area,
        quantity: row.quantity,
        price:
          row.priceOverride.trim() !== ""
            ? row.priceOverride
            : row.price ?? "",
        notes: row.notes || globalNotes,
      })),
    [selection, address, date, defaultAreaDescription, globalNotes]
  );

  function addProduct(product: Product) {
    setSelection((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      return [
        ...prev,
        {
          ...product,
          quantity: 1,
          notes: "",
          priceOverride: product.price?.toString() ?? "",
          areaDescriptionOverride:
            defaultAreaDescription ?? product.area,
        },
      ];
    });
  }

  function updateRow(id: string, updates: Partial<SelectionRow>) {
    setSelection((prev) =>
      prev.map((row) => (row.id === id ? { ...row, ...updates } : row))
    );
  }

  function removeRow(id: string) {
    setSelection((prev) => prev.filter((row) => row.id !== id));
  }

  function validateBeforeSave() {
    if (!address.trim()) {
      setError("Address is required.");
      return false;
    }
    if (selection.length === 0) {
      setError("Add at least one product to the selection.");
      return false;
    }
    const missing = selection.find(
      (row) =>
        !row.quantity ||
        !(
          row.areaDescriptionOverride ||
          row.areaDescription ||
          defaultAreaDescription
        ) ||
        (row.priceOverride.trim() === "" && row.price === null)
    );
    if (missing) {
      setError(
        "Quantity, area description, and price are required for each row."
      );
      return false;
    }
    setError(null);
    return true;
  }

  function handleSave() {
    if (!validateBeforeSave()) return;
    // Placeholder for a future export/save action.
    alert(
      "Selection is ready. Use these placeholders to merge into the DOCX template."
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">
            Address<span className="text-red-600">*</span>
          </label>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter project address"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">
            Date
          </label>
          <input
            type="date"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">
            Default Area Description
          </label>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            value={defaultAreaDescription}
            onChange={(e) => setDefaultAreaDescription(e.target.value)}
            placeholder="e.g. Bedroom built-ins"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">
            Global Notes (optional)
          </label>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            value={globalNotes}
            onChange={(e) => setGlobalNotes(e.target.value)}
            placeholder="Any notes applied if row notes are empty"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700">
          Search Products
        </label>
        <input
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          placeholder="Search by code, description, manufacturer description, area"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm divide-y">
          {loading && (
            <div className="p-3 text-sm text-slate-500">Searching…</div>
          )}
          {!loading && results.length === 0 && (
            <div className="p-3 text-sm text-slate-500">No results yet.</div>
          )}
          {results.map((product) => (
            <div
              key={product.id}
              className="p-3 flex items-center justify-between gap-4"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900">
                  {product.code} — {product.description}
                </p>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {product.manufacturerDescription || "No manufacturer desc"}
                </p>
              </div>
              <div className="relative h-16 w-20 max-w-[120px] flex-shrink-0">
                {product.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.imageUrl}
                    alt={product.description}
                    className="h-full w-full object-cover rounded border border-slate-200"
                    style={{ maxWidth: "120px" }}
                  />
                )}
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => addProduct(product)}
                disabled={selection.some((p) => p.id === product.id)}
              >
                {selection.some((p) => p.id === product.id)
                  ? "Added"
                  : "Add"}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">
            Selection ({selection.length})
          </h3>
          <Button variant="outline" size="sm" onClick={handleSave}>
            Validate / Ready for template
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left text-xs uppercase text-slate-500">
                <th className="p-3">Code</th>
                <th className="p-3">Description</th>
                <th className="p-3">Manufacturer Description</th>
                <th className="p-3">Product Details</th>
                <th className="p-3">Area Description*</th>
                <th className="p-3 w-20">Qty*</th>
                <th className="p-3 w-24">Price*</th>
                <th className="p-3">Notes*</th>
                <th className="p-3 w-16"></th>
              </tr>
            </thead>
            <tbody>
              {selection.map((row) => (
                <tr key={row.id} className="border-t border-slate-100">
                  <td className="p-3 font-semibold">{row.code}</td>
                  <td className="p-3">{row.description}</td>
                  <td className="p-3">
                    {row.manufacturerDescription || "—"}
                  </td>
                  <td className="p-3">{row.productDetails || "—"}</td>
                  <td className="p-3">
                    <input
                      className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                      value={row.areaDescriptionOverride}
                      onChange={(e) =>
                        updateRow(row.id, {
                          areaDescriptionOverride: e.target.value,
                        })
                      }
                      placeholder={
                        defaultAreaDescription ||
                        row.areaDescription ||
                        row.area
                      }
                      required
                    />
                  </td>
                  <td className="p-3">
                    <input
                      type="number"
                      min={1}
                      className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                      value={row.quantity}
                      onChange={(e) =>
                        updateRow(row.id, {
                          quantity: Number(e.target.value) || 0,
                        })
                      }
                      required
                    />
                  </td>
                  <td className="p-3">
                    <input
                      type="number"
                      step="0.01"
                      min={0}
                      className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                      value={row.priceOverride}
                      onChange={(e) =>
                        updateRow(row.id, { priceOverride: e.target.value })
                      }
                      required
                    />
                  </td>
                  <td className="p-3">
                    <input
                      className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                      value={row.notes}
                      onChange={(e) =>
                        updateRow(row.id, { notes: e.target.value })
                      }
                      placeholder="Notes"
                      required
                    />
                  </td>
                  <td className="p-3">
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => removeRow(row.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
              {selection.length === 0 && (
                <tr>
                  <td
                    colSpan={9}
                    className="p-4 text-sm text-slate-500 text-center"
                  >
                    Add products to build your selection.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 border-t border-red-200">
            {error}
          </div>
        )}
      </div>

      <div className="bg-slate-900 text-white rounded-lg p-4 text-sm space-y-2">
        <div className="font-semibold">Template placeholders</div>
        <p className="text-white/80">
          Available:{" "}
          {[
            "{{address}}",
            "{{date}}",
            "{{code}}",
            "{{image}}",
            "{{description}}",
            "{{manufacturer-description}}",
            "{{product-details}}",
            "{{area-description}}",
            "{{quantity}}",
            "{{price}}",
            "{{notes}}",
          ].join(", ")}
        </p>
        <p className="text-white/80">
          Loop rows in the DOCX using your engine&apos;s syntax (e.g.
          docxtemplater): wrap the table row with a loop block such as
          {" {#items}...{/items}"} and place the placeholders in each cell.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4">
        <div className="text-sm font-semibold text-slate-900 mb-2">
          Current selection data (for debugging)
        </div>
        <pre className="text-xs bg-slate-50 p-3 rounded-md overflow-x-auto">
          {JSON.stringify(placeholderRows, null, 2)}
        </pre>
      </div>
    </div>
  );
}

