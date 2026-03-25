import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SectionTitle } from "../components/SectionTitle";
import handicraftsImage from "../../assets/handicrafts.webp";
import { Link } from "react-router";
const HERO_BG =
  "https://images.unsplash.com/photo-1735047974891-df59713d8192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBwb3J0JTIwY2FyZ298ZW58MXx8fHwxNzc0MzM0OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const AGRI_IMG =
  "https://images.unsplash.com/photo-1760726744076-625d550c51d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljZXMlMjBncmFpbnMlMjBzYWNrcyUyMG1hcmtldHxlbnwxfHx8fDE3NzQzMzUwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
export default function Products() {
  return (
    <div className="bg-[#F6F6F6] min-h-screen font-['Roboto',sans-serif] overflow-x-hidden flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-4 md:px-8 mb-24 mt-4">
        <div className="relative w-full rounded-[30px] overflow-hidden max-w-[1400px] mx-auto min-h-[400px] md:min-h-[500px] flex items-center shadow-md">
          <img
            src={HERO_BG}
            alt="Shipping containers in a port"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-white/30"></div>

          <div className="relative z-10 px-8 md:px-20 max-w-4xl">
            <div className="bg-[#CCA830]/20 inline-block px-4 py-1.5 rounded-full mb-6">
              <span className="text-[#735C00] font-semibold text-xs tracking-[2.4px] uppercase">
                GLOBAL INVENTORY
              </span>
            </div>
            <h1 className="text-5xl md:text-[75px] font-medium text-[#000A1E] mb-6 leading-[1.1] tracking-[-1.8px]">
              Our Xports <span className="text-[#735C00]">Products</span>
            </h1>
            <p className="text-lg md:text-xl text-[#0F1B45] mb-10 max-w-2xl leading-relaxed">
              We supply a wide range of high-quality products from India to
              global markets, ensuring excellence in every shipment.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="max-w-[1280px] mx-auto px-6 mb-32 w-full">
        <SectionTitle title="Our Export Categories" />
        <p className="text-[#0F1B45] text-lg md:text-xl leading-[30px] max-w-5xl mb-16 font-light">
          We export a diverse range of high-quality products from India to
          international markets. Our strong sourcing network and quality control
          ensure that every product meets global standards and customer
          expectations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#F3F4F5] rounded-[48px] overflow-hidden shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-full aspect-[4/3] relative">
              <img
                src={AGRI_IMG}
                alt="Agricultural Products"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <h3 className="font-bold text-[#000A1E] text-2xl mb-3">
                Agricultural Products
              </h3>
              <p className="text-[#44474E] text-base leading-relaxed mb-6 flex-grow">
                Grains, spices, and fresh produce sourced directly from premium
                farms.
              </p>
              {/* <div className="flex items-center gap-2 mt-auto">
                <span className="font-bold text-[#735C00] text-sm tracking-[1.4px] uppercase">View More</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z" fill="#735C00"/>
                </svg>
              </div> */}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F3F4F5] rounded-[48px] overflow-hidden shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
            <div className="w-full aspect-[4/3] relative">
              <img
                src={handicraftsImage}
                alt="Handicrafts"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <h3 className="font-bold text-[#000A1E] text-2xl mb-3">
                Handicrafts
              </h3>
              <p className="text-[#44474E] text-base leading-relaxed mb-6 flex-grow">
                Authentic handcrafted products made by skilled artisans,
                showcasing traditional Indian craftsmanship and cultural
                heritage.
              </p>
              {/* <div className="flex items-center gap-2 mt-auto">
                <span className="font-bold text-[#735C00] text-sm tracking-[1.4px] uppercase">View More</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z" fill="#735C00"/>
                </svg>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-[1280px] mx-auto px-6 mb-32 w-full">
        <div className="bg-gradient-to-br from-[#000A1E] to-[#002147] rounded-[48px] p-12 md:p-20 text-center flex flex-col items-center shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <h2 className="font-bold text-white text-3xl md:text-[48px] leading-tight mb-6 max-w-3xl">
            Looking for a reliable export partner?
          </h2>
          <p className="text-[#D1D5DC] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Let's discuss how we can bring premium Indian products to your
            specific market with efficiency and care.
          </p>
          <Link
            to="/contact"
            className="bg-[#C8AD82] text-[#000A1E] font-semibold px-12 py-5 rounded-full text-lg hover:bg-opacity-90 transition-transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
