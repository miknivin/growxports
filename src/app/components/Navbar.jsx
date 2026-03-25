import React from "react";
import { Link, useLocation } from "react-router";
import { X } from "lucide-react";
import imgLogo from "../../assets/logo.png";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isProducts = location.pathname === "/products";
  const isCertifications = location.pathname === "/certifications";
  const isContact = location.pathname === "/contact";

  const mobileNavLinks = [
    { to: "/", label: "Home", active: isHome },
    { to: "/about", label: "About", active: isAbout },
    { to: "/products", label: "Products", active: isProducts },
    {
      to: "/certifications",
      label: "Certifications",
      active: isCertifications,
    },
    { to: "/contact", label: "Contact", active: isContact },
  ];

  return (
    <nav className="max-w-[1400px] mx-auto min-w-full  px-3 md:px-8 py-6 flex items-center justify-between relative z-50">
      <div className="w-40 md:w-48">
        <Link to="/">
          <img
            src={imgLogo}
            alt="Grow Xports"
            className="w-full h-auto object-contain"
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-2 bg-white border border-gray-200 p-2 rounded-[30px] shadow-sm">
        <Link
          to="/"
          className={`font-semibold px-6 py-2 rounded-[20px] transition-colors ${isHome ? "bg-[#0F1B45] text-white shadow-md px-8 py-2.5" : "text-gray-500 hover:text-gray-800"}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`font-semibold px-6 py-2 rounded-[20px] transition-colors ${isAbout ? "bg-[#0F1B45] text-white shadow-md px-8 py-2.5" : "text-gray-500 hover:text-gray-800"}`}
        >
          About
        </Link>
        <Link
          to="/products"
          className={`font-semibold px-6 py-2 rounded-[20px] transition-colors ${isProducts ? "bg-[#0F1B45] text-white shadow-md px-8 py-2.5" : "text-gray-500 hover:text-gray-800"}`}
        >
          Products
        </Link>
        <Link
          to="/certifications"
          className={`font-semibold px-6 py-2 rounded-[20px] transition-colors ${isCertifications ? "bg-[#0F1B45] text-white shadow-md px-8 py-2.5" : "text-gray-500 hover:text-gray-800"}`}
        >
          Certifications
        </Link>
        <Link
          to="/contact"
          className={`font-semibold px-6 py-2 rounded-[20px] transition-colors ${isContact ? "bg-[#0F1B45] text-white shadow-md px-8 py-2.5" : "text-gray-500 hover:text-gray-800"}`}
        >
          Contact
        </Link>
      </div>

      {/* Mobile Nav Toggle */}
      <Sheet>
        <SheetTrigger asChild>
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-[#0F1B45]"
            aria-label="Open navigation menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[85vw] max-w-[360px] bg-white px-0">
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <Link to="/" className="w-32">
              <img
                src={imgLogo}
                alt="Grow Xports"
                className="w-full h-auto object-contain"
              />
            </Link>
            <X className="opacity-0 pointer-events-none" size={20} />
          </div>

          <div className="flex flex-col gap-2 p-6">
            {mobileNavLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                  link.active
                    ? "bg-[#0F1B45] text-white shadow-md"
                    : "text-[#0F1B45] hover:bg-[#F3F4F5]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
