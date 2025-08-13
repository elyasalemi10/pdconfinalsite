import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what our satisfied property owners say about PdCon's professional management services in Melbourne and south east Melbourne suburbs. Real reviews from residential and commercial property clients.",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 