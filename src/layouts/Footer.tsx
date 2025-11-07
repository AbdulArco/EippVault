import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">EIPP Vault</h3>
          <p className="text-sm mb-2">
            2/13 Muthumariamman Kovil Street
            </p>
          <p className="text-sm mb-2">West Tambaram, Chennai, India.</p>
          <p className="text-sm mb-2">📞 +91 9876543210</p>
          <p className="text-sm">✉️ info@eippvault.com</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-green-200 transition">Home</a></li>
            <li><a href="#about-us" className="hover:text-green-200 transition">About Us</a></li>
            <li><a href="#solutions" className="hover:text-green-200 transition">Solutions</a></li>
            <li><a href="#products" className="hover:text-green-200 transition">Products</a></li>
            <li><a href="#pricing" className="hover:text-green-200 transition">Pricing</a></li>
            <li><a href="#contact-us" className="hover:text-green-200 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-green-200 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-green-200 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-green-200 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-green-200 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-blue-50 mt-10 border-t border-blue-200 pt-4">
        © {new Date().getFullYear()} EIPP Vault. All rights reserved.
      </div>
    </footer>
  );
}
