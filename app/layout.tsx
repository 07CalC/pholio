import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pholio",
  description: "Build portfolio in minutes",
  icons: {
    icon: "https://res.cloudinary.com/dkhymc3li/image/upload/v1735216898/t3irkgz3pa3e6iqb7l7y.png",

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1b1b1b] bg-[linear-gradient(to_right,#505050_1px,transparent_1px),linear-gradient(to_bottom,#505050_1px,transparent_1px)] bg-[size:60px_60px]`}
      >
       <NextTopLoader color="#8ef09b" height={5} showSpinner={false} zIndex={10} />
        {children}
       
      </body>
    </html>
  );
}
