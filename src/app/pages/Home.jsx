import React from "react";
import { SocialIcon } from "../components/SocialIcon";
import { SectionTitle } from "../components/SectionTitle";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WorldReachMap } from "../components/WorldReachMap";
import spicesImage from "../../assets/spices.webp";
// Assets
import imgEllipse1 from "../../assets/imgEllipse1.png";
import imgEllipse2 from "../../assets/imgEllipse2.png";
import imgRice from "../../assets/rice.webp";
import bannerVideo from "../../assets/video/banner.mp4";
import svgPaths from "../../imports/svg-pj4gezvnd5";
import honeyImage from "../../assets/honey.webp";
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
export default function Home() {
  return (
    <div className="bg-[#F6F6F6] min-h-screen font-['Roboto',sans-serif] overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-4 md:px-8 mb-20">
        <div className="relative w-full rounded-[30px] overflow-hidden max-w-[1400px] mx-auto min-h-[600px] md:min-h-[700px] flex items-center shadow-xl">
          <video
            src={bannerVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative z-10 px-4  pt-5 md:pt-0 md:px-20 max-w-5xl">
            <h1 className="text-3xl md:text-6xl lg:text-6xl font-medium text-white mb-6 leading-[1.1]">
              PREMIUM INDIAN EXPORTS
              <br />
              FOR WORLDWIDE MARKETS
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl leading-relaxed font-light">
              Grow Xports brings high-quality Indian rice, spices, and honey to
              international markets with a strong current focus on Dubai. Under
              our brand Soil & Soul, we are committed to delivering purity,
              consistency, and value at the right price.
            </p>
            <div className="flex flex-wrap gap-4 items-center mb-16">
              <button className="bg-[#0F1B45] text-white px-10 py-4 rounded-[30px] font-medium text-xl hover:bg-opacity-90 transition-colors shadow-lg">
                Explore Products
              </button>
              <button className="bg-[#C8AD82] text-white px-10 py-4 rounded-[30px] font-medium text-xl hover:bg-opacity-90 transition-colors shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
          {/* <div className="hidden md:flex gap-4 absolute bottom-10 right-6">
            <SocialIcon type="twitter" variant="light" />
            <SocialIcon type="instagram" variant="light" />
            <SocialIcon type="facebook" variant="light" />
          </div> */}
        </div>
      </section>

      {/* WHY CHOOSE GROW XPORTS */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24">
        <SectionTitle title="Why Choose Grow Xports" />
        <p className="text-lg md:text-xl text-[#0F1B45] font-light max-w-5xl mb-16 leading-relaxed">
          Grow Xports is an Indian export company focused exclusively on
          agricultural products for overseas markets. We currently export rice,
          spices, and honey, with a clear goal to build a trusted international
          distribution presence and expand into global markets.
          <br />
          <br />
          Our approach is simple: source quality products, maintain reliable
          standards, and supply them at affordable prices without compromising
          integrity. Every shipment is planned with care so buyers receive
          products they can trust.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
          <FeatureItem
            title="Quality-First Sourcing"
            desc="We select our products with strict attention to quality, consistency, freshness, and market suitability."
          />
          <FeatureItem
            title="Affordable Pricing"
            desc="Our mission is to make premium Indian products available at fair and practical prices."
          />
          <FeatureItem
            title="Focused Product Range"
            desc="By specializing only in rice, spices, and honey, we give full attention to the categories we know best."
          />
          <FeatureItem
            title="Global Market Vision"
            desc="We are building toward a strong international presence, starting with Dubai and expanding worldwide."
          />
          <FeatureItem
            title="Trusted Brand Promise"
            desc="We manage the complete export process including documentation, packaging, and shipping to ensure smooth and timely delivery."
          />
          <FeatureItem
            title="Long-Term Partnerships"
            desc="We prioritize clear communication, transparency, and long-term partnerships with our customers around the world."
          />
        </div>
      </section>

      {/* PRODUCTS WE EXPORT */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24">
        <SectionTitle title="Products We Export" />
        <p className="text-lg md:text-xl text-[#0F1B45] max-w-4xl mb-12">
          Grow Xports supplies carefully selected agricultural products under
          the Soil & Soul brand. We focus on products that reflect India's
          natural richness, export potential, and everyday market demand.
        </p>

        <div className="relative w-full flex justify-center">
          {/* Card Background */}
          <div className="w-full max-w-[1200px] relative">
            {/* Giant watermark */}
            {/* <div className="absolute top-8 left-[35%] text-[#C8AD82] text-7xl md:text-[100px] font-semibold opacity-30 z-0 select-none">
              02
            </div> */}

            <div className="relative z-10 bg-white rounded-[30px] p-4 md:p-8 flex flex-col md:flex-row items-center gap-10 shadow-sm border border-gray-100">
              <div className="w-full md:w-1/2">
                <img
                  src={imgRice}
                  alt="Rice and Grains"
                  className="w-full rounded-[20px] object-cover h-[300px] md:h-[400px]"
                />
              </div>
              <div className="w-full md:w-1/2 md:pr-10 py-6">
                <h3 className="text-3xl font-medium text-[#0F1B45] mb-6">
                  Rice
                </h3>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
                  We offer a premium selection of Indian rice varieties, sourced
                  from trusted farms and carefully processed to meet
                  international quality standards. Our rice is selected for its
                  consistency, taste, and export readiness, making it ideal for
                  distributors, wholesalers, and buyers across global markets
                </p>
                {/* <button className="bg-[#C8AD82] text-white px-8 py-3 rounded-[30px] font-medium text-lg hover:bg-opacity-90 transition-transform hover:scale-105 inline-block">
                  View more
                </button> */}
              </div>
            </div>
            <div className="relative z-10 bg-white rounded-[30px] p-4 md:p-8 flex flex-col md:flex-row items-center gap-10 shadow-sm border border-gray-100">
              <div className="w-full md:w-1/2">
                <img
                  src={spicesImage}
                  alt="Rice and Grains"
                  className="w-full rounded-[20px] object-cover h-[300px] md:h-[400px]"
                />
              </div>
              <div className="w-full md:w-1/2 md:pr-10 py-6">
                <h3 className="text-3xl font-medium text-[#0F1B45] mb-6">
                  Indian Spices
                </h3>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
                  Our spice range is built around purity, natural aroma, and
                  authentic Indian character. We currently focus on premium
                  Cardamom and Black Pepper, both selected for their richness
                  and freshness, and supplied to meet the expectations of
                  international buyers.
                </p>
                {/* <button className="bg-[#C8AD82] text-white px-8 py-3 rounded-[30px] font-medium text-lg hover:bg-opacity-90 transition-transform hover:scale-105 inline-block">
                  View more
                </button> */}
              </div>
            </div>
            <div className="relative z-10 bg-white rounded-[30px] p-4 md:p-8 flex flex-col md:flex-row items-center gap-10 shadow-sm border border-gray-100">
              <div className="w-full md:w-1/2">
                <img
                  src={honeyImage}
                  alt="Rice and Grains"
                  className="w-full rounded-[20px] object-cover h-[300px] md:h-[400px]"
                />
              </div>
              <div className="w-full md:w-1/2 md:pr-10 py-6">
                <h3 className="text-3xl font-medium text-[#0F1B45] mb-6">
                  Honey
                </h3>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
                  We export high-quality, natural Indian honey. Pure,
                  unprocessed, and sourced from verified apiaries. Rich in taste
                  and free from artificial additives, our honey reflects the
                  same uncompromising quality standard that defines every Soil &
                  Soul product.
                </p>
                {/* <button className="bg-[#C8AD82] text-white px-8 py-3 rounded-[30px] font-medium text-lg hover:bg-opacity-90 transition-transform hover:scale-105 inline-block">
                  View more
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
              To deliver the best quality Indian products at the best affordable
              price, while building a business rooted in fairness and trust.
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
              To build a strong distribution network and grow into a trusted
              export brand serving markets worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 mb-24 w-full">
        <div className="mb-12">
          <SectionTitle title="World-Class Standards (Certifications)" />
          <p className="text-[#0F1B45] text-lg leading-relaxed max-w-5xl font-light mt-4">
            Grow Xports follows strict international standards to guarantee
            product quality, food safety, and export compliance. We believe in
            transparency as the cornerstone of our global trade operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-[40px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#F3F4F5] flex items-center justify-center mb-6 text-[#0F1B45]">
              <Utensils size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#0F1B45] text-xl mb-4">
              FSSAI Certified
            </h3>
            <p className="text-[#44474E] text-[15px] leading-relaxed mb-8 flex-grow font-light">
              Full compliance with the Food Safety and Standards Authority of
              India to ensure all our agricultural exports meet essential
              national safety norms.
            </p>
            {/* <button className="font-bold text-[#735C00] text-xs tracking-[1.5px] uppercase mt-auto">
              VIEW CERTIFICATE
            </button> */}
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[40px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#F3F4F5] flex items-center justify-center mb-6 text-[#0F1B45]">
              <CheckCircle2 size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#0F1B45] text-xl mb-4">
              ISO 9001:2015
            </h3>
            <p className="text-[#44474E] text-[15px] leading-relaxed mb-8 flex-grow font-light">
              International standard for quality management systems, ensuring
              the consistent delivery of high-quality goods across all our
              operations.
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
              ISO 22000:2018
            </h3>
            <p className="text-[#44474E] text-[15px] leading-relaxed mb-8 flex-grow font-light">
              A comprehensive global standard specifically designed to guarantee
              food safety in processing, packaging, and international export.
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
              HACCP Certified
            </h3>
            <p className="text-[#44474E] text-[15px] leading-relaxed mb-8 flex-grow font-light">
              Hazard Analysis Critical Control Point certification to identify,
              evaluate, and prevent food safety hazards throughout our supply
              chain.
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
              HALAL Certified
            </h3>
            <p className="text-[#44474E] text-[15px] leading-relaxed mb-8 flex-grow font-light">
              Guarantees that our products and processing methods are strictly
              compliant with Islamic dietary laws, ensuring suitability for our
              GCC markets.
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
              GMP Compliance
            </h3>
            <p className="text-[#44474E] text-[15px] leading-relaxed mb-8 flex-grow font-light">
              Adherence to Good Manufacturing Practices, ensuring strict
              hygiene, proper production methods, and consistent product quality
              control.
            </p>
            {/* <button className="font-bold text-[#735C00] text-xs tracking-[1.5px] uppercase mt-auto">
              VIEW CERTIFICATE
            </button> */}
          </div>
        </div>
      </section>
      {/* EXPORT PROCESS */}
      <section className="bg-[#0F1B45] py-24 px-6 text-white mb-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-[50px] h-[50px] flex items-center justify-center">
              <div className="w-8 h-8 rotate-45 border-4 border-[#C8AD82]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium">
              Our Export Process
            </h2>
          </div>
          <p className="text-lg text-white/80 font-light max-w-3xl mb-24 leading-relaxed">
            We follow a structured export process to ensure product quality,
            compliance, and timely delivery to international markets.
          </p>

          <div className="relative mt-12 lg:h-[350px] flex flex-col lg:block gap-6">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#C8AD82] hidden lg:block -translate-y-1/2"></div>

            {/* Process Steps */}
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 relative z-10 lg:h-full">
              <ProcessStep
                title="Global Sourcing"
                desc="We source premium agricultural products from verified farms and processing partners."
                position="bottom"
              />
              <ProcessStep
                title="Quality Inspection"
                desc="Our products pass strict quality checks to meet international standards."
                position="top"
              />
              <ProcessStep
                title="Packaging & Documentation"
                desc="We use secure packaging and handle all necessary export documentation."
                position="bottom"
              />
              <ProcessStep
                title="International Shipping"
                desc="We coordinate logistics and shipping to ensure safe and timely delivery to your port."
                position="top"
              />
              <ProcessStep
                title="Global Delivery"
                desc="We ensure safe handling and delivery through our partners, offering worldwide."
                position="bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32 relative">
        <SectionTitle title="Our Global Reach" />
        <p className="text-lg md:text-xl text-[#0F1B45] font-light max-w-4xl mb-16 leading-relaxed text-center mx-auto">
          Grow Xports is bridging the gap between Indian farms and worldwide
          markets, delivering premium agricultural products across the globe.
        </p>

        <WorldReachMap />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#0F1B45]">
          <div>
            <div className="text-5xl md:text-[70px] font-medium mb-4">2019</div>
            <div className="text-xl">Year Established</div>
          </div>
          <div>
            <div className="text-5xl md:text-[70px] font-medium mb-4">3</div>
            <div className="text-xl">Core Categories</div>
          </div>
          <div>
            <div className="text-5xl md:text-[70px] font-medium mb-4">100%</div>
            <div className="text-xl">Quality Focus</div>
          </div>
          <div>
            <div className="text-5xl md:text-[70px] font-medium mb-4">1</div>
            <div className="text-xl">Global Hub (Dubai)</div>
          </div>
        </div>
      </section>

      {/* WHAT OUR CLIENTS SAY */}
      <section className="max-w-[1400px] mx-auto px-6 mb-32">
        <SectionTitle title="What Our Clients Say" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <TestimonialCard 
            review="The quality of rice and spices we receive from Grow Xports is exceptional. Their consistency and commitment to delivery timelines make them a highly reliable partner." 
            name="Wholesale Distributor, UAE" 
          />
          <TestimonialCard 
            review="Working with Grow Xports has been a seamless experience. They handle all documentation perfectly, and their premium products always meet our stringent market standards." 
            name="Retail Chain Owner, Saudi Arabia" 
          />
          <TestimonialCard 
            review="We highly appreciate the transparency and professionalism of the Grow Xports team. Their natural honey and spices have received great feedback from our retail customers." 
            name="Import Partner, Oman" 
          />
          <TestimonialCard 
            review="A trustworthy export partner that never compromises on quality. From sourcing to packaging and final delivery, their entire process is incredibly well managed." 
            name="Food Service Provider, Qatar" 
          />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

// Subcomponents

function FeatureItem({ title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-[3px] bg-[#C8AD82] h-[50px] shrink-0 mt-1"></div>
      <div>
        <h3 className="text-2xl md:text-[30px] font-medium text-[#0F1B45] mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-[#0F1B45] font-light text-[15px] leading-[25px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

function ProcessStep({ title, desc, position }) {
  const isTop = position === "top";

  return (
    <div className="lg:w-1/5 flex flex-col items-center relative group lg:h-full justify-center">
      {/* Connector Line Vertical */}
      <div
        className={`hidden lg:block absolute w-[1px] bg-[#C8AD82] h-12 left-1/2 -translate-x-1/2 ${isTop ? "bottom-1/2" : "top-1/2"}`}
      ></div>

      {/* Point on the horizontal line */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#C8AD82] rounded-full z-20"></div>

      {/* Content Box */}
      <div
        className={`bg-[#142359] border border-white/5 rounded-xl p-5 shadow-lg lg:absolute left-1/2 lg:-translate-x-1/2 w-full lg:w-[220px] transition-transform group-hover:-translate-y-1 ${isTop ? "lg:bottom-[calc(50%+48px)]" : "lg:top-[calc(50%+48px)]"}`}
      >
        <h4 className="text-lg font-medium text-[#C8AD82] mb-3">{title}</h4>
        <p className="text-sm text-white/70 font-light leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function TestimonialCard({ review, name }) {
  return (
    <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
      <div>
        <div className="flex justify-start items-start mb-6">
          <div className="w-8 h-8 opacity-50">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={svgPaths.p1048ba80}
                stroke="#C8AD82"
                strokeWidth="2.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={svgPaths.p2a7d500}
                stroke="#C8AD82"
                strokeWidth="2.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <p className="text-gray-600 italic font-light leading-relaxed mb-8 text-lg">
          "{review}"
        </p>
      </div>
      <div className="pt-6 border-t border-gray-100">
        <p className="font-medium text-[#0F1B45]">{name}</p>
      </div>
    </div>
  );
}
