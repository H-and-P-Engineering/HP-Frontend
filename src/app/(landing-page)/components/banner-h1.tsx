import React from "react";

export default function BannerH1({ children, className }: {
    children: React.ReactNode;
    className?: string;
}):  React.ReactNode {

    return (
        <h1
          className="text-[2.5rem] font-[600] text-white leading-[1.1] tracking-[0.5px]">
          {children}
        </h1>
    );
}