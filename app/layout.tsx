import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import {Chakra_Petch ,Space_Grotesk} from "next/font/google"
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "./components/Footer";

const chakra_init= Space_Grotesk({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--var--chakra',
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabber Rahman",
  description: "Full stack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${chakra_init.variable} `}>
        <Navbar/>
        {children}
        <Footer/>
        <Toaster/>
        </body>
    </html>
  );
}
