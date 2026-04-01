import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";
import imgGlobalTradeRoutesMap from "../../assets/219842b93cc2d82a67f123acfce7460e4273db16.png";
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Form submitted! (In a real application, this would send your message to the server.)",
    );
  };
  return (
    <div className="bg-[#F6F6F6] min-h-screen font-['Roboto',sans-serif] overflow-x-hidden flex flex-col">
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow max-w-[1400px] mx-auto w-full px-6 pt-12 pb-24">
        {/* HEADER AND FORM SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#C8AD82] rotate-45 flex items-center justify-center rounded-sm shadow-md">
                <div className="w-6 h-6 bg-gradient-to-br from-[#B0833B] to-[#C8AD82] rotate-[-45deg] rounded-sm" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0F1B45] leading-tight">
                Let's build global <br /> Connection together.
              </h1>
            </div>

            <div className="flex flex-col gap-10 mt-6">
              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-[#0F1B45]">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#888888] font-bold text-xs tracking-[1.5px] uppercase mb-1">
                    EMAIL INQUIRY
                  </p>
                  <p className="text-[#000A1E] font-bold text-xl">
                    info@growxports.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-[#0F1B45]">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#888888] font-bold text-xs tracking-[1.5px] uppercase mb-1">
                    PHONE SUPPORT
                  </p>
                  <p className="text-[#000A1E] font-bold text-xl">
                    +91 90611 89999
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-[#0F1B45]">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#888888] font-bold text-xs tracking-[1.5px] uppercase mb-1">
                    HEADQUARTERS
                  </p>
                  <p className="text-[#000A1E] font-bold text-xl leading-relaxed">
                    Grow Xports, Palakkad, Kerala
                    <br />
                    India, 679336
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="mt-16 bg-white rounded-[32px] p-8 shadow-sm max-w-md relative overflow-hidden">
              {/* Left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#C8AD82]"></div>

              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-[#735C00]" size={20} strokeWidth={2} />
                <h3 className="font-bold text-[#0F1B45] text-lg">
                  Business Hours
                </h3>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="text-[#44474E] text-[15px]">Mon - Sat</span>
                <span className="font-medium text-[#0F1B45] text-[15px]">
                  9 AM - 6 PM
                </span>
              </div>

              <div className="flex items-center gap-2 mt-6 text-[#888888] text-sm">
                <Clock size={14} />
                <span>We respond within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-[500px] xl:w-[600px]">
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0px_20px_40px_rgba(0,0,0,0.04)]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-[11px] tracking-[1px] uppercase text-[#0F1B45]">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      className="bg-[#F3F4F5] rounded-[16px] px-5 py-4 text-[15px] outline-none focus:ring-2 focus:ring-[#C8AD82]/50 transition-all placeholder:text-[#A0A0A0]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-[11px] tracking-[1px] uppercase text-[#0F1B45]">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="bg-[#F3F4F5] rounded-[16px] px-5 py-4 text-[15px] outline-none focus:ring-2 focus:ring-[#C8AD82]/50 transition-all placeholder:text-[#A0A0A0]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[11px] tracking-[1px] uppercase text-[#0F1B45]">
                    COUNTRY / REGION
                  </label>
                  <input
                    type="text"
                    placeholder="United States"
                    required
                    className="bg-[#F3F4F5] rounded-[16px] px-5 py-4 text-[15px] outline-none focus:ring-2 focus:ring-[#C8AD82]/50 transition-all placeholder:text-[#A0A0A0]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[11px] tracking-[1px] uppercase text-[#0F1B45]">
                    HOW CAN WE HELP?
                  </label>
                  <textarea
                    placeholder="Describe your inquiry..."
                    required
                    rows={5}
                    className="bg-[#F3F4F5] rounded-[24px] px-5 py-5 text-[15px] outline-none focus:ring-2 focus:ring-[#C8AD82]/50 transition-all placeholder:text-[#A0A0A0] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-[#CCA830] hover:bg-[#B89625] text-[#000A1E] font-bold text-[15px] tracking-[1px] uppercase py-5 rounded-full transition-colors w-full"
                >
                  SEND INQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="w-full relative rounded-[40px] overflow-hidden bg-[#0A3D4D] min-h-[400px] md:min-h-[500px] lg:min-h-[600px] shadow-xl flex items-center justify-center">
          <img
            src={imgGlobalTradeRoutesMap}
            alt="Global Trade Routes Map"
            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[#0A3D4D]/20"></div>

          <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-[24px] p-8 md:p-10 max-w-sm text-center shadow-lg">
            <div className="w-12 h-12 bg-[#CCA830]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#735C00]">
              <Globe size={24} strokeWidth={2} />
            </div>
            <h3 className="font-bold text-[#0F1B45] text-xl mb-3">
              Global Trade Network
            </h3>
            <p className="text-[#44474E] text-[15px] leading-relaxed">
              Seamless logistics from India to 50+ countries.
            </p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
