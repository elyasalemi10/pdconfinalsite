import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback",
  description: "Share your experience with PdCon. Your feedback helps us continue providing exceptional property management services to our clients in Melbourne and south east Melbourne suburbs.",
};

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 