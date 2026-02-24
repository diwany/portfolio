import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Mohamed Diwany | AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Diwany — Computer Engineering student, AI Engineer, and Full Stack Developer. Explore my projects, skills, and services.",
  keywords: [
    "Diwany",
    "AI Engineer",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "Python",
    "Machine Learning",
    "Veyras",
  ],
  authors: [{ name: "Diwany" }],
  creator: "Diwany",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohameddiwany.com",
    title: "Diwany | AI Engineer & Full Stack Developer",
    description:
      "Portfolio of Diwany — Computer Engineering student, AI Engineer, and Full Stack Developer.",
    siteName: "Diwany",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diwany | AI Engineer & Full Stack Developer",
    description:
      "Portfolio of Diwany — Computer Engineering student, AI Engineer, and Full Stack Developer.",
    creator: "@mohameddiwany",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${inter.variable} ${jetbrains.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
