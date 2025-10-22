import React from "react";

export default function BannerSubtitle({ children, className }: {
    children: React.ReactNode;
    className?: string;
}):  React.ReactNode {

    return (
        <div className="text-[1.15em] font-[400] text-[#e1e9f6] tracking-[0.2px]">
          {children}
        </div>
    );
}