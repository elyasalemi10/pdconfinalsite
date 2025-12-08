import Link from "next/link";

import { Button } from "@/components/ui/button";
import { requireAdmin } from "@/lib/auth";
import CreateProductForm from "./product-form";

export default async function CreateProductPage() {
  await requireAdmin();

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Admin</p>
            <h1 className="text-2xl font-semibold text-slate-900">
              Create Product
            </h1>
            <p className="text-sm text-slate-500">
              Add product details, generate the code, and upload the main image.
            </p>
          </div>
          <Link href="/admin">
            <Button variant="outline">Back to Admin</Button>
          </Link>
        </div>

        <CreateProductForm />
      </div>
    </main>
  );
}

