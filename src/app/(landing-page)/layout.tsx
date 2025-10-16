import React from "react";
// import Header from "@/components/header";
// import Footer from "@/components/footer";


export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
        </>
    )
}