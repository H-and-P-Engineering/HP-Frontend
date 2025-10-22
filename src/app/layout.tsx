import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// configure imported font and assign the font to a custom css variable for tailwind integration
const Raleway = localFont({
  src: "../../public/fonts/variable/raleway-VF.ttf",
  variable: "--font-raleway",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${Raleway.variable} ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col relative min-h-screen max-w-screen overflow-x-hidden bg-black!`}
      >
        {children}
      </body>
    </html>
  );
}
