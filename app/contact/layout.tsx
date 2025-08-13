import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get your free property management consultation today. Contact PdCon for professional property oversight, permit acquisition, and investment opportunities in Melbourne and south east Melbourne suburbs.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 