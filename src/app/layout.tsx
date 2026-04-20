import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andong & Becak App",
  description: "Aplikasi Transportasi Tradisional Modern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-gray-100 text-gray-900 min-h-[100dvh] flex justify-center`}>
        {/* Mobile Container - Acts like a phone screen on desktop */}
        <div className="w-full max-w-md bg-white min-h-[100dvh] shadow-2xl relative flex flex-col">
          {/* Main scrollable area */}
          <main className="flex-1 flex flex-col w-full h-full overflow-x-hidden">
            {children}
          </main>
          {/* Bottom Nav is fixed at the bottom of the screen but constrained by max-w-md */}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
