import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LUXETIME - Premium Watches",
  description: "Discover our exclusive collection of luxury timepieces from the world's most renowned brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
