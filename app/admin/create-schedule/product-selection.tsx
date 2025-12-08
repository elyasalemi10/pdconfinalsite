"use client";

import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import PizZip from "pizzip";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  code: string;
  name: string;
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

function formatDate(dateString: string): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export default function ProductSelection() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selection, setSelection] = useState<SelectionRow[]>([]);
  const [address, setAddress] = useState("");
  const [date, setDate] = useState(() =>
    new Date().toISOString().slice(0, 10)
  );
  const [error, setError] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);

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
        code: row.code,
        image: row.imageUrl,
        description: row.description,
        "manufacturer-description": row.manufacturerDescription ?? "",
        "product-details": row.productDetails ?? "",
        "area-description": row.areaDescriptionOverride || row.area,
        quantity: row.quantity,
        price:
          row.priceOverride.trim() !== ""
            ? row.priceOverride
            : row.price ?? "",
        notes: row.notes,
      })),
    [selection]
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
          areaDescriptionOverride: product.area,
        },
      ];
    });
  }

  function removeRow(id: string) {
    setSelection((prev) => prev.filter((row) => row.id !== id));
  }

  function updateRow(id: string, updates: Partial<SelectionRow>) {
    setSelection((prev) =>
      prev.map((row) => (row.id === id ? { ...row, ...updates } : row))
    );
  }

  function validateBeforeSave(): boolean {
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
        !row.areaDescriptionOverride ||
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

  async function handleGenerate() {
    if (!validateBeforeSave()) return;

    setGenerating(true);
    setError(null);

    try {
      // Fetch the template
      const templateResponse = await fetch("/product-selection.docx");
      const templateBlob = await templateResponse.arrayBuffer();

      const zip = new PizZip(templateBlob);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      // Set the template data
      doc.setData({
        address,
        date: formatDate(date),
        items: placeholderRows,
      });

      // Render the document
      doc.render();

      // Generate the output
      const output = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });

      // Download the file
      const fileName = `Product-Selection-${address.replace(/\s+/g, "-")}-${date}.docx`;
      saveAs(output, fileName);

      setGenerating(false);
    } catch (err) {
      console.error("Error generating document:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to generate document. Please check the template format.";
      
      // Check if it's a duplicate tag error
      if (errorMessage.includes("Duplicate") || errorMessage.includes("duplicate")) {
        setError(
          "Template error: Word has split placeholders. Please delete and retype {{address}} and {{date}} carefully in the template file without any formatting (no bold, italic, etc). Make sure each placeholder is typed as one continuous string."
        );
      } else {
        setError(`Failed to generate document: ${errorMessage}`);
      }
      setGenerating(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header Inputs */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Document Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-slate-700">
              Address<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter property address"
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
            <p className="text-xs text-slate-500">
              Will be formatted as: {formatDate(date)}
            </p>
          </div>
        </div>
      </div>

      {/* Product Search */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Add Products</h3>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">
            Search Products
          </label>
          <input
            type="text"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by code, name, description, manufacturer..."
          />
        </div>

        {loading && (
          <p className="text-sm text-slate-500">Searching products...</p>
        )}

        {!loading && query && results.length === 0 && (
          <p className="text-sm text-slate-500">No products found.</p>
        )}

        {results.length > 0 && (
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {results.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-3 p-3 border border-slate-200 rounded-md hover:bg-slate-50"
              >
                <div className="relative h-12 w-16 flex-shrink-0 bg-slate-100 rounded overflow-hidden">
                  {product.imageUrl && (
                    <img
                      src={product.imageUrl}
                      alt={product.description}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900">
                    {product.code} — {product.name}
                  </p>
                  <p className="text-xs text-slate-500 truncate">
                    {product.description}
                  </p>
                </div>
                <Button
                  size="sm"
                  onClick={() => addProduct(product)}
                  disabled={selection.some((s) => s.id === product.id)}
                >
                  {selection.some((s) => s.id === product.id)
                    ? "Added"
                    : "Add"}
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Selected Products Table */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left text-xs uppercase text-slate-500">
              <th className="p-3">Code</th>
              <th className="p-3">Name</th>
              <th className="p-3">Description</th>
              <th className="p-3">Area Desc</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Price</th>
              <th className="p-3">Notes</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {selection.map((row) => (
              <tr key={row.id} className="border-t border-slate-100">
                <td className="p-3 font-semibold">{row.code}</td>
                <td className="p-3">{row.name}</td>
                <td className="p-3">
                  <div className="max-w-xs truncate">{row.description}</div>
                </td>
                <td className="p-3">
                  <input
                    type="text"
                    className="w-full rounded border border-slate-300 px-2 py-1 text-sm"
                    value={row.areaDescriptionOverride}
                    onChange={(e) =>
                      updateRow(row.id, {
                        areaDescriptionOverride: e.target.value,
                      })
                    }
                    placeholder={row.area}
                    required
                  />
                </td>
                <td className="p-3">
                  <input
                    type="number"
                    min="1"
                    className="w-20 rounded border border-slate-300 px-2 py-1 text-sm"
                    value={row.quantity}
                    onChange={(e) =>
                      updateRow(row.id, {
                        quantity: Number(e.target.value) || 1,
                      })
                    }
                    required
                  />
                </td>
                <td className="p-3">
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    className="w-24 rounded border border-slate-300 px-2 py-1 text-sm"
                    value={row.priceOverride}
                    onChange={(e) =>
                      updateRow(row.id, { priceOverride: e.target.value })
                    }
                    placeholder={row.price?.toString() ?? ""}
                    required
                  />
                </td>
                <td className="p-3">
                  <input
                    type="text"
                    className="w-full rounded border border-slate-300 px-2 py-1 text-sm"
                    value={row.notes}
                    onChange={(e) =>
                      updateRow(row.id, { notes: e.target.value })
                    }
                    placeholder="Optional notes"
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
                  colSpan={8}
                  className="p-4 text-sm text-slate-500 text-center"
                >
                  No products added yet. Search and add products above.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {error}
        </div>
      )}

      {/* Generate Button */}
      <div className="flex justify-center">
        <Button
          onClick={handleGenerate}
          disabled={generating || selection.length === 0}
          className="px-12 py-6 text-lg font-bold"
          style={{
            background: "linear-gradient(to right, #eab308, #d97706)",
            color: "white",
          }}
        >
          {generating ? "Generating Document..." : "Generate"}
        </Button>
      </div>
    </div>
  );
}
