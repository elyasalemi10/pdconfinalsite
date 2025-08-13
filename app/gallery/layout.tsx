import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore PdCon's portfolio of managed properties and successful projects in Melbourne and south east Melbourne suburbs. See our property management transformations, permit acquisitions, and investment success stories.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 