import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anukul Tyagi Portfolio",
  description: "Portfolio of Anukul Tyagi",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-white `}>
        <Navbar />


        {children}


      </body>
    </html>
  );
}
