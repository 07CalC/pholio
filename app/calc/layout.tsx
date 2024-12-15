import { Metadata } from "next";



export const metadata: Metadata = {
    title: "CalC",
    description: "Hi, this is CalC",
}



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={`bg-[#1f1e1e] `}
        >
          {children}
          
        </body>
      </html>
    );
  }
  

