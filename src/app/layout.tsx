import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Diwany · AI & Software Engineer",
  description:
    "Mohamed Diwany is an AI and software engineer who builds AI products and ships them. Founder of Veyra, building a WhatsApp assistant handling 50,000+ messages a day.",
  keywords: [
    "Mohamed Diwany",
    "Diwany",
    "AI Engineer",
    "Software Engineer",
    "Full Stack Developer",
    "Veyra",
    "Next.js",
    "TypeScript",
    "Python",
    "OpenAI",
    "Machine Learning",
  ],
  authors: [{ name: "Mohamed Diwany" }],
  creator: "Mohamed Diwany",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://diwany.me",
    title: "Mohamed Diwany · AI & Software Engineer",
    description:
      "AI and software engineer who builds AI products and ships them. Founder of Veyra.",
    siteName: "Mohamed Diwany",
    images: [
      {
        url: "https://diwany.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Diwany · AI & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Diwany · AI & Software Engineer",
    description:
      "AI and software engineer who builds AI products and ships them. Founder of Veyra.",
    creator: "@diwany",
    images: ["https://diwany.me/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrains.variable} ${instrument.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
