import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GoGreen Resources Limited | Clean Energy & Recycling in Malawi",
  description: "Powering clean communities in Lilongwe, Malawi through biogas energy and aluminium recycling solutions.",
  keywords: ["GoGreen", "Malawi", "biogas", "recycling", "clean energy", "Lilongwe", "UBC", "aluminium cans"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
