import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Margaret Mead Portfolio",
  description: "Level 6 NZMAI portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}