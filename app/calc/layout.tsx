import { Metadata } from "next";

const favicon: string = "https://res.cloudinary.com/dkhymc3li/image/upload/v1735142062/96346957_qdxckt.png"


export const metadata: Metadata = {
  title: "CalC",
  description: "Hi, this is calc",
  icons: {
    icon: favicon,
  },
};


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={`bg-[#1b1b1b] bg-[linear-gradient(to_right,#505050_1px,transparent_1px),linear-gradient(to_bottom,#505050_1px,transparent_1px)] bg-[size:60px_60px]`}
        >
          {children}
          
        </body>
      </html>
    );
  }
  

