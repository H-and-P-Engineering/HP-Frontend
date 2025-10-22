import Link from "next/link";
// import { Facebook, Youtube, Instagram, Linkedin } from "@/components/social-icons";

export default function Footer() {
    // const socialLinks = [
    //     { name: 'YouTube', href: '/', icon: Youtube, alt: 'YouTube icon' },
    //     { name: 'Instagram', href: '/', icon: Instagram, alt: 'Instagram icon' },
    //     { name: 'LinkedIn', href: '/', icon: Linkedin, alt: 'LinkedIn icon' },
    //     { name: 'Facebook', href: '/', icon: Facebook, alt: 'Facebook icon' },
    // ];

    return (
        <footer className="w-full bg-[#fafafa] text-[#222] font-inter pt-10 pb-8m px-10  border-t border-[#ececec]">
            <div className="mx-auto flex flex-col md:flex-row flex-wrap gap-8 md:gap-12 justify-between items-start">

              {/* Brand */}
              <div className="flex flex-col gap-5 flex-[1_1_220px] md:flex-[1_1_220px]">
                <div className="flex items-center gap-2">
                  <img src="img/logan.png" alt="Housing & Properties Logo" className="w-[45px] h-auto" />
                  <span className="font-raleway font-bold text-[1.07em] leading-snug">HOUSING<br/>& PROPERTIES</span>
                </div>
                <div className="text-[#222] font-inter text-[0.95em] leading-[1.6] max-w-[340px] mt-5">
                  Your trusted hub for finding apartments,<br />
                  lands, and home essentials —<br />
                  connecting clients with verified agents<br />
                  and vendors for a safe, simple, and<br />
                  rewarding experience
                </div>
                <div className="flex gap-4 mt-2">
                  <a href="#"><img src="img/instagram.jpg" alt="Instagram" className="w-8 h-8 transition-opacity hover:opacity-70" /></a>
                  <a href="#"><img src="img/face.png" alt="Facebook" className="w-8 h-8 transition-opacity hover:opacity-70" /></a>
                  <a href="#"><img src="img/tik.jpg" alt="TikTok" className="w-8 h-8 transition-opacity hover:opacity-70" /></a>
                  <a href="#"><img src="img/xx.jpg" alt="X" className="w-8 h-8 transition-opacity hover:opacity-70" /></a>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-8 md:gap-12 flex-[3_1_600px] justify-between w-full md:w-auto">
                <div className="flex flex-col gap-6 min-w-[150px]">
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">Home</a>
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">Listings</a>
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">Marketplace</a>
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">How It Works</a>
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">About Us</a>
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">Contact Us</a>
                </div>
                <div className="flex flex-col gap-6 min-w-[150px]">
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">Sign Up</a>
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">Become an Agent</a>
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">Vendor Registration</a>
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">Client Dashboard</a>
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">Agent Dashboard</a>
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">FAQs</a>
                </div>
                <div className="flex flex-col gap-6 min-w-[150px]">
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">Guides</a>
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">Pricing & Cashback Policy</a>
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">Terms & Conditions</a>
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">Privacy Policy</a>
                  <a href="#" className="font-raleway text-[1.15em] transition-colors hover:text-[#3571a6] hover:underline">Support Center</a>
                </div>
              </div>

            </div>
        </footer>
    )
}

{/* Social links */}
            {/* <ul className="grid grid-cols-4 h-18 px-4 mt-10 md:mt-6 mb-2 border rounded-lg text-body2">
                {socialLinks.map((link) => (
                    <li  key={link.name} className="flex items-center justify-center lg:justify-start">
                        <Link href={link.href} className="flex gap-2 items-center">
                            <span className="inline-flex items-center justify-center w-[32px] h-[32px]">
                                <link.icon fill="#DAFEE0" />
                            </span>
                            <span className="hidden md:inline">{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul> */}
