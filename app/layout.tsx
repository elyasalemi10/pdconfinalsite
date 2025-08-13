import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/header";
import ChatbotButton from "@/components/ui/chatbot-button";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | PdCon', 
    default: 'PdCon - Premium Property Management Solutions',
  },
  description: "Professional property management specialists in Melbourne and south east Melbourne suburbs. Comprehensive property oversight, permit acquisition, and investment opportunities. Maximise your returns with PdCon.",
  keywords: "property management Melbourne, permit acquisition, investment opportunities, rental management, property oversight, real estate management, Melbourne property management",
  icons: {
    icon: [
      { url: '/images/NewPDFavicon.png', sizes: 'any' },
      { url: '/images/NewPDFavicon.png', type: 'image/png' },
    ],
    shortcut: '/images/NewPDFavicon.png',
    apple: '/images/NewPDFavicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} antialiased font-sans`}>
        <Header />
        {children}
        <ChatbotButton />
      </body>
    </html>
  );
}
