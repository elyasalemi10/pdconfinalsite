import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about PdCon's expertise in professional property management in Melbourne and south east Melbourne suburbs. Our team brings years of experience in property oversight, permit acquisition, and investment opportunities.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 