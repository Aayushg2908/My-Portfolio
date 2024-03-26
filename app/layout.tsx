import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Stars from "@/components/Stars";
import BlackHole from "@/components/BlackHole";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Aayush Portfolio",
  description:
    "I am a Full Stack Web Developer with experience in Devops and AI/ML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[#030014] overflow-y-auto overflow-x-hidden`}
      >
        <Stars />
        <Navbar />
        <BlackHole />
        <main className="h-full w-full">
          <div className="flex flex-col">{children}</div>
        </main>
      </body>
    </html>
  );
}
