"use client";

import Link from "next/link";
import Image from "next/image";
export default function Header() {

  return (
      <>
        <header className="flex w-auto">
          {/* Brand logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Housing&Properties logo"
              width={36.68} height={22.01}
              priority={true}
              className="relative xl:left-[-14px]"
            />
          </Link>
        </header>
      </>
  )
}