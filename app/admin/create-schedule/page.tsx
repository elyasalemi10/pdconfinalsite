import Link from "next/link";

import { Button } from "@/components/ui/button";
import { requireAdmin } from "@/lib/auth";
import ProductSelection from "./product-selection";

export default async function CreateSchedulePage() {
  await requireAdmin();

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Admin</p>
            <h1 className="text-2xl font-semibold text-slate-900">
              Create Product Selection
            </h1>
            <p className="text-sm text-slate-500">
              Search products, edit price/notes, set area description and
              quantity, then prepare your schedule data.
            </p>
          </div>
          <Link href="/admin">
            <Button variant="outline">Back to Admin</Button>
          </Link>
        </div>

        <ProductSelection />
      </div>
    </main>
  );
}

