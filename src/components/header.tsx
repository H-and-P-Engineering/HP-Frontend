"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
const MenuIcon = () => (
    <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.1667 11.5759H11.5M30.1667 20.9092H8.38891M30.1667 2.24255H2.16669" stroke="black" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        { name: "Home", href: "/#home" },
        { name: "Properties", href: "/#properties" },
        { name: "Home items", href: "/#home-items" },
        { name: "Agents", href: "/#agents" },
        { name: "Contact", href: "/#contact" },
    ]
    // nb: setMenuOpen is for mobile. it is changed to true or false in 2 ways-
    // the toggle MenuIcon (=) can set it to both true or false and the CloseIcon(x) button sets it to false
    const closeMenu = () => {
        setMenuOpen(false);
    }

    // useEffect hook todisable scrolling when mobile menu is open
    useEffect(() => {
        const body = document.body;
        if (menuOpen) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }

        // Cleanup function to reset overflow when the component unmounts
        return () => {
            body.style.overflow = "auto";
        };
    }, [menuOpen]);

  return (
      <>
        <header
        className="absolute z-40 flex flex-nowrap items-center justify-center gap-20 mt-8 px-4 sm:px-10 md:px-15 lg:px-19 w-auto h-auto border-1"
        onClick={menuOpen ? closeMenu : undefined}>
          <div className="flex gap-0.5">
            {/* Brand logo */}
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Housing&Properties logo"
                width={123.94} height={22.01}
                priority={true}
                className="relative xl:left-[-14px]"
              />
            </Link>

            {/* Mobile Menu Toggle Button - Only visible on small screens */}
            <button
              aria-label={ menuOpen ? "close-menu" : "open-menu" }
              className="md:hidden text-black p-1"
              // toggles the menuOpen between true & false and siderbar opens
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* if this button is false(ie the initial value of menuOpen) that means its not visible,
              so the value of the button should be the CloseIcon. Vice versa*/}
              { menuOpen ? <CloseIcon /> : <MenuIcon /> }
            </button>
          </div>
          {/* Desktop Navigation - Only visible on medium large screens */}
          <nav className="hidden md:flex items-center gap-20 text-font-color transition-all duration-300">
            {/* Nav Links */}
            <div className="space-x-5">
              {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white no-underline text-base font-light px-[0.6em] py-[0.3em] hover:text-[#e1e9f6] transition-colors duration-150"
              >
                {link.name}
              </Link>
            ))}
            </div>

            {/* Notification Icon */}
            <button
              className="text-white bg-transparent border-none cursor-pointer text-[1.3em] mr-6 relative"
              aria-label="Notifications"
            >
              &#128276;
            </button>

            {/* signup & login */}
            <div className="flex items-center gap-[1em]">
              <Link href="/signin"
                className="font-medium text-[15px] border border-[#e1e9f6] rounded-[7px] px-[1.4em] py-[0.55em] bg-transparent text-[#eff0f2] hover:bg-[#eff0f2] hover:text-[#193a63] transition-colors duration-150 mr-[0.3em]"
              >
                Login
              </Link>

              <Link href="/Signup"
                className="font-medium text-[15px] border border-[#3571a6] rounded-[7px] px-[1.4em] py-[0.55em] bg-[#efeff1] text-[#193a63] transition-colors duration-150"
              >
                Sign up
              </Link>
            </div>
    
          </nav>
        </header>

        {/* Mobile Menu Overlay - Only visible on small screens. Outside header to prevent backdrop-blur conflicts */}
        {/* the sidebar is conditionally rendered when menuOpen is true */}
        {menuOpen && (
          <nav
            className="md:hidden fixed inset-0 flex justify-center bg-white/80 backdrop-blur-sm pt-30 z-30"
            onClick={closeMenu}
          >
            <div className="flex flex-col h-fit w-50 mx-10 space-y-8 font-regular">
              {/* Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-center text-font-color text-h5 active:bg-primary-50 py-3 bg-inherit"
                >
                  {link.name}
                </Link>
              ))}

              {/* Sign In Button */}
              <Link href="/signup" className="px-5">
                <button className="w-full text-h6">
                  Sign In
                </button>
              </Link>
            </div>
          </nav>
        )}

      </>
  )
}