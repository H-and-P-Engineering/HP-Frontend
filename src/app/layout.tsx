import type { Metadata } from "next";
import localFont from "next/font/local";
// import inter as inline themes. custom property defined in globalcss
import { Inter } from "next/font/google";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// configure imported font and assign the font to a custom css variable for tailwind integration
const Raleway = localFont({
  src: "../../public/fonts/variable/raleway-VF.ttf",
  variable: "--font-raleway",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Housing&Properties",
  description: "Housing and Properties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Raleway.variable} ${inter.variable} antialiased flex flex-col relative min-h-screen max-w-screen overflow-x-hidden bg-black!`}
      >
        {children}
      </body>
    </html>
  );
}
