import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about PdCon's property management services, permit acquisition process, investment opportunities, and more. Get answers to common property management questions in Melbourne and south east Melbourne suburbs.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 