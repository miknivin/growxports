import React from "react";
import { Link } from "react-router";
import { SocialIcon } from "./SocialIcon";
import imgLogo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[#002147] text-white pt-20 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="flex items-center">
          <img
            src={imgLogo}
            alt="Grow Xports"
            className="w-48 h-auto object-contain brightness-0 invert opacity-90"
          />
        </div>

        <div>
          <h4 className="text-2xl text-[#C8AD82] font-medium mb-6 font-['Roboto']">
            Quick Links
          </h4>
          <ul className="space-y-4 text-white/75 text-lg font-['Roboto'] font-light">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-white transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl text-[#C8AD82] font-medium mb-6 font-['Roboto']">
            Our Services
          </h4>
          <ul className="space-y-4 text-white/75 text-lg font-['Roboto'] font-light">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Agricultural Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Processed Foods
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Textiles & Garments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Engineering Goods
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Handicrafts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Leather Products
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl text-[#C8AD82] font-medium mb-6 font-['Roboto']">
            Contact Info
          </h4>
          <ul className="space-y-4 text-white/75 text-lg mb-8 font-['Roboto'] font-light">
            <li>info@growxports.com</li>
            <li>+91 XXXXX XXXXX</li>
            <li>India</li>
          </ul>
          <div className="flex gap-4">
            <SocialIcon type="instagram" variant="gold" />
            <SocialIcon type="facebook" variant="gold" />
            <SocialIcon type="twitter" variant="gold" />
          </div>
        </div>
      </div>

      <div className="text-center text-[#C8AD82] border-t border-white/10 pt-8 mt-12 font-['Roboto']">
        © 2026 Grow Xports. All rights reserved.
      </div>
    </footer>
  );
}
