import Link from "next/link";

import { Button } from "@/components/ui/button";
import { requireAdmin } from "@/lib/auth";

export default function CreateSchedulePage() {
  requireAdmin();

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Admin</p>
            <h1 className="text-2xl font-semibold text-slate-900">
              Create Product Schedule
            </h1>
            <p className="text-sm text-slate-500">
              Protected area. Add scheduling UI here.
            </p>
          </div>
          <Link href="/admin">
            <Button variant="outline">Back to Admin</Button>
          </Link>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6">
          <p className="text-slate-700">
            This page is protected with the admin session. Build the scheduling
            form here.
          </p>
        </div>
      </div>
    </main>
  );
}

