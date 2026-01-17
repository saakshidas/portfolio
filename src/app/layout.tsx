import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saakshi Das | Portfolio",
  description: "Software Developer & Data Analyst Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
