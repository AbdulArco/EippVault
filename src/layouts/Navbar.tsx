"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { menus } from "../constant/NavLinks";
import ContactUs from "../components/sections/contact/Contact";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header
      onMouseLeave={() => setActiveMenu(null)}
      className="flex justify-between items-center px-8 py-3 bg-white  shadow-md sticky top-0 z-50"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="EIPP Vault Logo" width={80} height={80} />
      </Link>

      <nav className="hidden md:flex space-x-8 text-sm font-medium relative">
        {menus.map((menu) => (
          <div
            key={menu.name}
            className="relative group"
            onMouseEnter={() => setActiveMenu(menu.name)}
          >
            <Link
              href={menu.href}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {menu.name}
            </Link>
            {menu.submenu && activeMenu === menu.name && (
              <div className="absolute left-0 mt-3 w-[280px] bg-gray-200 shadow-lg rounded-md py-2 border border-gray-100 before:content-[''] before:absolute before:-top-2 before:left-6 before:w-3 before:h-3 before:bg-gray-200 before:border-t before:border-l before:border-gray-200 before:rotate-45">
                {menu.submenu.map((sub) => (
                  <Link
                    onClick={() => setActiveMenu(null)}
                    key={sub.name}
                    href={sub.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary text-sm font-light"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <button  onClick={() => document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" })} className="bg-eipp-secondary text-sm px-4 py-1.5 rounded-md text-white font-medium transition-colors hover:bg-eipp-primary ">
          Request a demo
        </button>
      </div>
    </header>
  );
}
