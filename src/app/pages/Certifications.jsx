import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SectionTitle } from "../components/SectionTitle";
import {
  CheckCircle2,
  Utensils,
  Globe,
  FileText,
  Leaf,
  ShieldCheck,
  Shield,
  Award,
} from "lucide-react";
import { Link } from "react-router";
const HERO_BG =
  "https://images.unsplash.com/photo-1638636241638-aef5120c5153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGRlZ3JlZSUyMGRvY3VtZW50fGVufDF8fHx8MTc3NDMzNTE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
export default function Certifications() {
  return (
    <div className="bg-[#F6F6F6] min-h-screen font-['Roboto',sans-serif] overflow-x-hidden flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-4 md:px-8 mb-24 mt-4">
        <div className="relative w-full rounded-[30px] overflow-hidden max-w-[1400px] mx-auto min-h-[400px] md:min-h-[500px] flex items-center shadow-md">
          <img
            src={HERO_BG}
            alt="Certificate of completion"
            className="absolute inset-0 w-full h-full object-cover opacity-60 object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>

          <div className="relative z-10 px-8 md:px-20 max-w-4xl">
            <div className="bg-[#CCA830]/20 inline-block px-4 py-1.5 rounded-full mb-6">
              <span className="text-[#735C00] font-semibold text-xs tracking-[2.4px] uppercase">
                QUALITY & TRUST
              </span>
            </div>
            <h1 className="text-5xl md:text-[75px] font-medium text-[#000A1E] mb-6 leading-[1.1] tracking-[-1.8px]">
              Our <span className="text-[#735C00]">Certifications</span>
            </h1>
            <p className="text-lg md:text-xl text-[#0F1B45] mb-10 max-w-2xl leading-relaxed font-light">
              Ensuring quality, compliance, and trust in every product we export
              across international borders.
            </p>
          </div>
        </div>
      </section>

      {/* WORLD CLASS STANDARDS */}
      <section className="max-w-[1280px] mx-auto px-6 mb-24 w-full">
        <div className="mb-12">
          <SectionTitle title="World-Class Standards" />
          <p className="text-[#0F1B45] text-lg leading-relaxed max-w-5xl font-light mt-4">
            Grow Xports follows international standards and holds certifications
            that guarantee product quality, safety, and export compliance. We
            believe in transparency as the cornerstone of global trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-[40px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#F3F4F5] flex items-center justify-center mb-6 text-[#0F1B45]">
              <CheckCircle2 size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#0F1B45] text-xl mb-4">
              ISO 9001:2015
            </h3>
            <p className="text-[#44474E] text-[15px] leading-relaxed mb-8 flex-grow font-light">
              International standard for quality management systems ensuring
              consistent delivery of high-quality goods.
            </p>
            {/* <button className="font-bold text-[#735C00] text-xs tracking-[1.5px] uppercase mt-auto">
              VIEW CERTIFICATE
            </button> */}
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[40px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#F3F4F5] flex items-center justify-center mb-6 text-[#0F1B45]">
              <Utensils size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#0F1B45] text-xl mb-4">
              FSSAI Certified
            </h3>
            <p className="text-[#44474E] text-[15px] leading-relaxed mb-8 flex-grow font-light">
              Compliance with the Food Safety and Standards Authority to ensure
              all agricultural exports meet safety norms.
            </p>
            {/* <button className="font-bold text-[#735C00] text-xs tracking-[1.5px] uppercase mt-auto">
              VIEW CERTIFICATE
            </button> */}
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[40px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#F3F4F5] flex items-center justify-center mb-6 text-[#0F1B45]">
              <Globe size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#0F1B45] text-xl mb-4">
              APEDA Member
            </h3>
            <p className="text-[#44474E] text-[15px] leading-relaxed mb-8 flex-grow font-light">
              Official registration with the Agricultural and Processed Food
              Products Export Development Authority.
            </p>
            {/* <button className="font-bold text-[#735C00] text-xs tracking-[1.5px] uppercase mt-auto">
              VIEW CERTIFICATE
            </button> */}
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-[40px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#F3F4F5] flex items-center justify-center mb-6 text-[#0F1B45]">
              <FileText size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#0F1B45] text-xl mb-4">
              IEC Registration
            </h3>
            <p className="text-[#44474E] text-[15px] leading-relaxed mb-8 flex-grow font-light">
              Import Export Code issued by the DGFT, allowing us to legally
              trade on an international scale.
            </p>
            {/* <button className="font-bold text-[#735C00] text-xs tracking-[1.5px] uppercase mt-auto">
              VIEW CERTIFICATE
            </button> */}
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-[40px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#F3F4F5] flex items-center justify-center mb-6 text-[#0F1B45]">
              <Leaf size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#0F1B45] text-xl mb-4">
              Organic Certified
            </h3>
            <p className="text-[#44474E] text-[15px] leading-relaxed mb-8 flex-grow font-light">
              Verification of organic cultivation processes for our specialty
              sustainable product ranges.
            </p>
            {/* <button className="font-bold text-[#735C00] text-xs tracking-[1.5px] uppercase mt-auto">
              VIEW CERTIFICATE
            </button> */}
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-[40px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#F3F4F5] flex items-center justify-center mb-6 text-[#0F1B45]">
              <ShieldCheck size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#0F1B45] text-xl mb-4">
              Quality Assurance
            </h3>
            <p className="text-[#44474E] text-[15px] leading-relaxed mb-8 flex-grow font-light">
              Proprietary internal standards and third-party laboratory
              verification for all outgoing batches.
            </p>
            {/* <button className="font-bold text-[#735C00] text-xs tracking-[1.5px] uppercase mt-auto">
              VIEW CERTIFICATE
            </button> */}
          </div>
        </div>
      </section>

      {/* SECURED TRADE BANNER */}
      <section className="max-w-[1280px] mx-auto px-6 mb-32 w-full">
        <div className="bg-[#001738] rounded-[40px] p-12 md:p-16 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 leading-tight">
              Certified for Global
              <br />
              Standards
            </h2>
            <p className="text-white/80 text-lg leading-relaxed font-light mb-10">
              Our certifications ensure that every product meets international
              quality, safety, and export regulations. We bridge the gap between
              local excellence and global demands through rigorous compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex items-center gap-3">
                <Shield
                  className="text-[#C8AD82]"
                  size={24}
                  strokeWidth={1.5}
                />
                <span className="font-bold text-[15px]">Secured Trade</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-[#C8AD82]" size={24} strokeWidth={1.5} />
                <span className="font-bold text-[15px]">
                  Approved Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY PROMISE */}
      <section className="max-w-[1280px] mx-auto px-6 mb-32 w-full">
        <div className="flex justify-center mb-12">
          <SectionTitle title="Our Certifications & Quality Promise" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-[24px] p-8 shadow-sm flex flex-col">
            <h4 className="font-bold text-[#0F1B45] text-[17px] mb-3">
              Premium Sourcing
            </h4>
            <p className="text-[#44474E] text-[14px] leading-[22px] font-light">
              We source rice, grains, and spices directly from verified Indian
              farms, ensuring authenticity from the very beginning.
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-8 shadow-sm flex flex-col">
            <h4 className="font-bold text-[#0F1B45] text-[17px] mb-3">
              Purity Inspection
            </h4>
            <p className="text-[#44474E] text-[14px] leading-[22px] font-light">
              Every batch undergoes strict quality checks to guarantee our
              products are unadulterated and 100% natural.
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-8 shadow-sm flex flex-col">
            <h4 className="font-bold text-[#0F1B45] text-[17px] mb-3">
              Hygienic Processing
            </h4>
            <p className="text-[#44474E] text-[14px] leading-[22px] font-light">
              Our agricultural products are processed in clean, modern
              facilities to preserve their natural aroma and freshness.
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-8 shadow-sm flex flex-col">
            <h4 className="font-bold text-[#0F1B45] text-[17px] mb-3">
              Global Certifications
            </h4>
            <p className="text-[#44474E] text-[14px] leading-[22px] font-light">
              We strictly adhere to international food safety standards,
              building absolute trust with our GCC partners.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-[1280px] mx-auto px-6 mb-32 w-full">
        <div className="bg-gradient-to-br from-[#000A1E] to-[#001738] rounded-[48px] p-12 md:p-20 text-center flex flex-col items-center shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <h2 className="font-bold text-white text-3xl md:text-[40px] leading-tight mb-6 max-w-3xl">
            Looking for a reliable export partner?
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light">
            Let's discuss how we can bring premium Indian products to your
            specific market with efficiency and care.
          </p>
          <Link
            to="/contact"
            className="bg-[#C8AD82] text-[#000A1E] font-semibold px-12 py-4 rounded-full text-lg hover:bg-opacity-90 transition-transform hover:scale-105"
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
