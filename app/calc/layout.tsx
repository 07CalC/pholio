import { Metadata } from "next";

import { Yuji_Mai } from "next/font/google";
import { Exo_2 } from "next/font/google";

export const metadata: Metadata = {
    title: "CalC",
    description: "Hi, this is CalC",
}

const YujiMai = Yuji_Mai({
    weight: "400",
    subsets: ["latin"],
})

const Exo2 = Exo_2({
    weight: "400",
    subsets: ["latin"],
})

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={`bg-[#1f1e1e] ${Exo2.style}`}
        >
          {children}
        </body>
      </html>
    );
  }
  

