import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vignesh R. | Senior PHP / Laravel Developer",
  description: "Dark premium portfolio for a senior PHP and Laravel developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
