import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Complete property management solutions including property oversight, permit acquisition, and investment opportunities. Professional services for all your property needs in Melbourne and south east Melbourne suburbs.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 