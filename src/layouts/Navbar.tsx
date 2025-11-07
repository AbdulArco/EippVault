
"use client";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menus = ["Home","About Us","Solutions", "Products",  "Pricing","Contact Us"];

  return (
    <header className="flex justify-between items-center px-8 py-3 bg-[var(--color-bg)] text-[var(--color-text)] shadow-md sticky top-0 z-50">
      <Link href="/" className="flex items-center space-x-2">
  <div className="relative flex items-center justify-center w-16 h-14 md:w-20 md:h-18">
    <Image
      src="/logo.png"
      alt="EIPP Vault Logo"
      fill
      sizes="(max-width: 768px) 64px, (max-width: 1200px) 80px, 100px"
      style={{ objectFit: "contain" }}
      priority
    />
  </div>
  {/* <span className="text-xl font-extrabold text-[var(--color-primary)]">
    EIPP Vault
  </span> */}
</Link>


      {/* Navigation */}
<nav className="hidden md:flex space-x-8 text-m font-bold">
  {menus.map((menu) => (
    <a
      key={menu}
      href={`#${menu.toLowerCase().replace(/\s+/g, '-')}`} // creates anchors like #about-us
      className="text-gray-700 hover:text-[var(--color-primary)] transition-colors"
    >
      {menu}
    </a>
  ))}
</nav>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <button className="hover:text-[var(--color-primary)] transition-colors">
          <Search size={20} />
        </button>
        <button className="bg-[var(--color-button)]  px-4 py-2 rounded-md hover:bg-[var(--color-primary-dark)] hover:text-white font-medium transition-colors">
          Request a demo
        </button>
      </div>
    </header>
  );
}
