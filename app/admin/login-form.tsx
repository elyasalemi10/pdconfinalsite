"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

type Props = {
  redirectTo?: string;
};

export default function AdminLoginForm({ redirectTo }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const initialError = useMemo(
    () => searchParams.get("error"),
    [searchParams]
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setError(data.error || "Login failed. Check credentials.");
        return;
      }

      router.push(redirectTo || "/admin");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg border border-slate-200 rounded-lg p-6 space-y-4">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold text-slate-900">Admin Login</h1>
        <p className="text-sm text-slate-500">
          Please enter the admin credentials to continue.
        </p>
        {initialError === "unauthenticated" && (
          <p className="text-sm text-red-600">
            Session expired. Please log in again.
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">
            Username
          </label>
          <input
            type="text"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            type="password"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        {error && (
          <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
            {error}
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </div>
  );
}

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin");
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button variant="outline" onClick={handleLogout} disabled={loading}>
      {loading ? "Logging out..." : "Logout"}
    </Button>
  );
}

