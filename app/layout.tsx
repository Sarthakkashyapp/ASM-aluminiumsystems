import type { Metadata } from "next";
import { Source_Sans_3 as FontSans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const fontSans = FontSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "ASM : Precision Aluminium frames for Modern Spaces",
  description: "ASM crafts durable, lightweight, and elegant aluminium solutions designed, fabricated, and installed by experts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${inter.variable} font-sans antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header/>
           <main className="flex-1">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
