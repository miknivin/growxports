import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SectionTitle } from "../components/SectionTitle";
import { WorldReachMap } from "../components/WorldReachMap";
// Assets
import imgEllipse1 from "../../assets/imgEllipse1.png";
import imgEllipse2 from "../../assets/imgEllipse2.png";
import { Link } from "react-router";
// Unsplash images
const HERO_BG =
  "https://images.unsplash.com/photo-1761538367870-67ced125b850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBjaXR5JTIwc2t5bGluZSUyMHJpdmVyfGVufDF8fHx8MTc3NDMzNDc5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const CRANE_IMG =
  "https://images.unsplash.com/photo-1601311852860-1d8f42381551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGNyYW5lcyUyMGNvbnRhaW5lciUyMHNoaXAlMjBwb3J0fGVufDF8fHx8MTc3NDMzNDgwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PORTRAIT_IMG =
  "https://images.unsplash.com/photo-1768565422698-2faaefa61fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMG1pZGRsZSUyMGVhc3Rlcm58ZW58MXx8fHwxNzc0MzM0ODA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
export default function About() {
  return (
    <div className="bg-[#F6F6F6] min-h-screen font-['Roboto',sans-serif] overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-4 md:px-8 mb-24">
        <div className="relative w-full rounded-[30px] overflow-hidden max-w-[1400px] mx-auto min-h-[500px] md:min-h-[600px] flex items-center shadow-md">
          <img
            src={HERO_BG}
            alt="Shipping port and city skyline"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-white/40"></div>

          <div className="relative z-10 px-8 md:px-20 max-w-4xl">
            <div className="bg-[#CCA830]/20 inline-block px-4 py-1.5 rounded-full mb-6">
              <span className="text-[#735C00] font-semibold text-xs tracking-[2.4px] uppercase">
                OUR HERITAGE
              </span>
            </div>
            <h1 className="text-5xl md:text-[75px] font-medium text-[#002147] mb-6 leading-[1.1] tracking-[-1.8px]">
              <span className="text-[#735C00]">About</span> Grow Xports
            </h1>
            <p className="text-lg md:text-xl text-[#0F1B45] mb-10 max-w-2xl leading-relaxed">
              Connecting Indian products to global markets with reliability and
              quality. We orchestrate the journey of excellence across borders.
            </p>
            <button className="bg-[#C8AD82] text-[#000A1E] font-semibold px-10 py-4 rounded-full text-lg hover:bg-opacity-90 transition-transform hover:scale-105 shadow-md">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-[1280px] mx-auto px-6 mb-32">
        <div className="bg-white rounded-[20px] p-8 md:p-16 shadow-[0_4px_24px_rgba(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src={CRANE_IMG}
              alt="Cargo ship and cranes"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 bg-[#C8AD82] rotate-45 border-2 border-white shadow-sm"></div>
              </div>
              <h2 className="text-2xl md:text-3xl font-medium text-[#0F1B45]">
                Who We Are
              </h2>
            </div>

            <p className="text-[#0F1B45] text-[18px] leading-relaxed mb-6 font-light">
              Grow Xports is a trusted export company based in India, delivering
              high-quality products to international markets with strong
              sourcing and efficient logistics.
            </p>
            <p className="text-[#0F1B45] text-[18px] leading-relaxed mb-10 font-light">
              Founded on the principles of integrity and excellence, we bridge
              the gap between local producers and global demand. Our specialized
              knowledge in Indian trade regulations and global quality standards
              ensures a seamless export experience for all our partners.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#E2E8F0] border-4 border-white z-10"></div>
                <div className="w-12 h-12 rounded-full bg-[#CBD5E1] border-4 border-white z-20"></div>
                <div className="w-12 h-12 rounded-full bg-[#94A3B8] border-4 border-white z-30"></div>
              </div>
              <span className="text-[#002147] text-sm font-semibold tracking-[0.7px]">
                500+ GLOBAL PARTNERS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER PROFILE */}
      <section className="max-w-[1000px] mx-auto px-6 mb-32 flex flex-col items-center text-center">
        <div className="w-[250px] h-[250px] rounded-full overflow-hidden mb-8 shadow-xl border-4 border-white">
          <img
            src={PORTRAIT_IMG}
            alt="Mohammed Shabeeb"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <h3 className="text-3xl font-medium text-[#0F1B45] mb-6">
          Mohammed Shabeeb
        </h3>
        <p className="text-[20px] text-[#0F1B45] font-light leading-relaxed max-w-4xl">
          Mohammed Shabeeb is a dynamic entrepreneur who entered the business
          landscape in 2016 at the young age of 24. With a proven track record
          in heavy industries, including successful businesses and an upcoming
          steel factory launch, he brings strong operational leadership to
          international trade.
          <br />
          <br />
          He founded Grow Xports in 2019 to bridge the gap between Indian
          agriculture and global markets. Starting as a merchant exporter, his
          forward-thinking vision is now driving the company to establish a
          direct, dedicated distribution presence in Dubai to better serve the
          GCC
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#E6E6E6] rounded-[30px] p-10 pt-16 relative">
            <div className="absolute -top-8 left-10 w-16 h-16 rounded-full overflow-hidden shadow-md">
              <img
                src={imgEllipse1}
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-medium text-[#0F1B45] mb-4">
              Our Mission
            </h3>
            <p className="text-xl text-[#0F1B45] font-light leading-relaxed">
              To deliver premium quality products from India to global markets
              with reliability, transparency, and efficient logistics.
            </p>
          </div>
          <div className="bg-[#E6E6E6] rounded-[30px] p-10 pt-16 relative">
            <div className="absolute -top-8 left-10 w-16 h-16 rounded-full overflow-hidden shadow-md">
              <img
                src={imgEllipse2}
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-medium text-[#0F1B45] mb-4">
              Our Vision
            </h3>
            <p className="text-xl text-[#0F1B45] font-light leading-relaxed">
              To become a globally trusted export company known for quality
              products, strong partnerships, and dependable international supply
              chains.
            </p>
          </div>
        </div>
      </section>

      {/* OUR GLOBAL REACH */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32 relative">
        <SectionTitle title="Our Global Reach" />
        <p className="text-lg md:text-xl text-[#0F1B45] font-light max-w-4xl mb-16 leading-relaxed">
          Grow Xports supplies products to international markets across multiple
          regions including the Middle East, Europe, Africa, and Southeast Asia.
          <br />
          Our strong logistics network ensures efficient delivery and reliable
          partnerships with global buyers.
        </p>

        <WorldReachMap className="w-full max-w-[980px] mx-auto mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#0F1B45] mb-24">
          <div>
            <div className="text-5xl md:text-[70px] font-medium mb-4">10+</div>
            <div className="text-xl">Years Experience</div>
          </div>
          <div>
            <div className="text-5xl md:text-[70px] font-medium mb-4">250+</div>
            <div className="text-xl">Products</div>
          </div>
          <div>
            <div className="text-5xl md:text-[70px] font-medium mb-4">
              10000+
            </div>
            <div className="text-xl">Customers</div>
          </div>
          <div>
            <div className="text-5xl md:text-[70px] font-medium mb-4">56+</div>
            <div className="text-xl">Employees</div>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="bg-[#0F1B45] rounded-[30px] p-12 text-center text-white flex flex-col items-center justify-center relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 relative z-10">
            Looking for a reliable export partner?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl relative z-10 font-light">
            Let's discuss how we can bring premium Indian products to your
            specific market with efficiency and care.
          </p>
          <Link
            to="/contact"
            className="bg-[#C8AD82] text-[#000A1E] font-medium px-10 py-3 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105 relative z-10"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
