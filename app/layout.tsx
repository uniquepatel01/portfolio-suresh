import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu, Pacifico, Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100","300", "400", "500", "700"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Uniquepatel01",
  description: "Modern Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} ${pacifico.variable} ${poppins.variable} antialiased`}>
        <div className="w-4/5 mx-auto pt-28">
          <Navbar />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}