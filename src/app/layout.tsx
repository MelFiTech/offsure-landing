import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat",
});

export const metadata: Metadata = {
  title: "Mobile Application Development Services",
  description: "Professional mobile application development services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={redHat.variable}>
      <body className="antialiased font-red-hat">
        {children}
      </body>
    </html>
  );
}
