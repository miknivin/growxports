import svgPaths from "./svg-jvs2x6f6s4";
import imgShippingContainers from "../assets/3d2789b0537557fdc12ea29cd674f0b50370a168.png";
import imgWhatsAppImage20260310At1236512 from "../assets/46ae23e357fe5ac4ff16276938f863b902442fbc.png";
import imgBackground from "../assets/d89a73197d78d66df4de541799db9c1b34c63c5a.png";
function Overlay() {
  return (
    <div
      className="absolute bg-[rgba(204,168,48,0.2)] content-stretch flex items-start left-[50px] px-[16px] py-[4px] rounded-[9999px] top-[218px]"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[12px] tracking-[2.4px] uppercase w-[159.89px]">
        <p className="leading-[16px]">Global Inventory</p>
      </div>
    </div>
  );
}
function Group19() {
  return (
    <div className="absolute contents left-[50px] top-[218px]">
      <Overlay />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] left-[50px] not-italic text-[#000a1e] text-[0px] top-[290px] tracking-[-4.8px] w-[650px]">
        <p className="font-['Roboto:Medium',sans-serif] font-medium text-[75px]">
          <span
            className="leading-[96px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >{`Our Xports `}</span>
          <span
            className="leading-[96px] text-[#735c00]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Products
          </span>
        </p>
      </div>
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[32px] left-[50px] text-[#0f1b45] text-[20px] top-[370px] w-[768px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="mb-0">
          We supply a wide range of high-quality products from India to global
        </p>
        <p>markets, ensuring excellence in every shipment.</p>
      </div>
    </div>
  );
}
function ShippingContainers() {
  return (
    <div
      className="absolute inset-[137px_48px_1968px_57px] overflow-clip rounded-[25px]"
      data-name="Shipping containers"
    >
      <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none rounded-[25px]">
        <img
          alt=""
          className="absolute h-[186.05%] left-0 max-w-none top-[-43.02%] w-full"
          src={imgShippingContainers}
        />
      </div>
      <Group19 />
    </div>
  );
}
function Group17() {
  return (
    <div className="absolute contents inset-[137px_48px_1968px_57px]">
      <ShippingContainers />
    </div>
  );
}
function Group18() {
  return (
    <div className="absolute contents inset-[137px_48px_1968px_57px]">
      <Group17 />
    </div>
  );
}
function Group10() {
  return (
    <div className="absolute contents h-[57.264px] left-[90px] top-[832px] w-[58.005px]">
      <div
        className="absolute flex h-[28.891px] items-center justify-center left-[98.34px] top-[853.34px] w-[24.375px]"
        style={{
          "--transform-inner-width": "1200",
          "--transform-inner-height": "0",
        }}
      >
        <div className="flex-none rotate-[19.85deg] scale-y-87 skew-x-30">
          <div className="bg-[#c8ad82] size-[21.824px]" />
        </div>
      </div>
      <div
        className="absolute flex h-[28.834px] items-center justify-center left-[115.3px] top-[839.03px] w-[24.346px]"
        style={{
          "--transform-inner-width": "1200",
          "--transform-inner-height": "0",
        }}
      >
        <div className="flex-none rotate-[19.85deg] scale-y-87 skew-x-30">
          <div
            className="h-[21.774px] w-[21.802px]"
            style={{
              backgroundImage:
                "linear-gradient(181.976deg, rgba(200, 173, 130, 0.8) 1.7817%, rgba(186, 139, 63, 0.8) 105.56%)",
            }}
          />
        </div>
      </div>
      <div
        className="absolute flex h-[21.482px] items-center justify-center left-[102.42px] top-[860.44px] w-[37.208px]"
        style={{
          "--transform-inner-width": "1200",
          "--transform-inner-height": "0",
        }}
      >
        <div className="-skew-x-30 flex-none rotate-[19.85deg] scale-y-87">
          <div className="bg-gradient-to-b from-[rgba(176,131,59,0.8)] size-[21.824px] to-[rgba(200,173,130,0.8)]" />
        </div>
      </div>
      <div
        className="absolute flex h-[35.555px] items-center justify-center left-[98.63px] top-[839.02px] w-[20.528px]"
        style={{
          "--transform-inner-width": "1200",
          "--transform-inner-height": "0",
        }}
      >
        <div className="flex-none rotate-[79.85deg] scale-y-87 skew-x-30">
          <div className="bg-gradient-to-r from-[#c8ad82] size-[21.824px] to-[#ba8b3f]" />
        </div>
      </div>
    </div>
  );
}
function Group11() {
  return (
    <div className="absolute contents left-[90px] top-[832px]">
      <p
        className="absolute font-['Roboto:Medium',sans-serif] font-medium h-[29px] leading-[normal] left-[calc(10%+1.9px)] text-[#0f1b45] text-[25px] top-[845.63px] w-[291px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Our Export Categories
      </p>
      <Group10 />
    </div>
  );
}
function Group15() {
  return (
    <div className="absolute contents left-[90px] top-[832px]">
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[30px] left-[calc(50%-603px)] text-[#0f1b45] text-[20px] top-[913px] w-[1249px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        We export a diverse range of high-quality products from India to
        international markets. Our strong sourcing network and quality control
        ensure that every product meets global standards and customer
        expectations.
      </p>
      <Group11 />
    </div>
  );
}
function Group3() {
  return (
    <div className="absolute contents left-[100px] top-[54px]">
      <div
        className="absolute h-[51.8px] left-[100px] top-[54px] w-[161px]"
        data-name="WhatsApp Image 2026-03-10 at 12.36.51 2"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[570.27%] left-[-113.09%] max-w-none top-[-235.14%] w-[326.18%]"
            src={imgWhatsAppImage20260310At1236512}
          />
        </div>
      </div>
    </div>
  );
}
function Group5() {
  return (
    <div className="absolute contents left-[calc(40%+40.2px)] top-[49px]">
      <div className="absolute border border-[rgba(84,84,84,0.25)] border-solid h-[57px] left-[calc(40%+40.2px)] rounded-[25px] top-[49px] w-[706px]" />
      <div className="absolute bg-[#0f1b45] h-[48px] left-[calc(60%-28.2px)] rounded-[30px] shadow-[102px_0px_28px_0px_rgba(0,0,0,0),65px_0px_26px_0px_rgba(0,0,0,0.01),37px_0px_22px_0px_rgba(0,0,0,0.05),16px_0px_16px_0px_rgba(0,0,0,0.09),4px_0px_9px_0px_rgba(0,0,0,0.1)] top-[53px] w-[129px]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[calc(40%+185.2px)] not-italic text-[20px] text-[rgba(0,0,0,0.5)] top-[62.34px] whitespace-nowrap">
        About
      </p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[calc(60%-9.2px)] not-italic text-[20px] text-[rgba(0,0,0,0.5)] top-[61.72px] whitespace-nowrap">
        Products
      </p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[calc(60%+127.8px)] not-italic text-[20px] text-[rgba(0,0,0,0.5)] top-[62.34px] whitespace-nowrap">
        Certifications
      </p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[calc(80%+19.4px)] not-italic text-[20px] text-[rgba(0,0,0,0.5)] top-[61.72px] whitespace-nowrap">
        Contact
      </p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[calc(40%+78.2px)] not-italic text-[20px] text-[rgba(0,0,0,0.5)] top-[62.34px] whitespace-nowrap">
        Home
      </p>
    </div>
  );
}
function Group6() {
  return (
    <div className="absolute contents left-[calc(40%+40.2px)] top-[49px]">
      <Group5 />
    </div>
  );
}
function Group4() {
  return (
    <div className="absolute contents left-[calc(40%+40.2px)] top-[49px]">
      <Group6 />
    </div>
  );
}
function Group7() {
  return (
    <div className="absolute contents left-[calc(40%-1.8px)] top-[2245px]">
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[50px] left-[calc(50%-153px)] text-[20px] text-[rgba(255,255,255,0.75)] top-[2295px] w-[242px] whitespace-pre-wrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Home
        <br aria-hidden="true" />
        {` About`}
        <br aria-hidden="true" />
        {` Products`}
        <br aria-hidden="true" />
        {` Export Process`}
        <br aria-hidden="true" />
        {` Contact`}
      </p>
      <p
        className="absolute font-['Roboto:Medium',sans-serif] font-medium h-[25px] leading-[25px] left-[calc(40%-1.8px)] text-[#c8ad82] text-[30px] top-[2245px] w-[269px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Quick Links
      </p>
    </div>
  );
}
function Group9() {
  return (
    <div className="absolute contents left-[calc(60%-10.2px)] top-[2245px]">
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[50px] left-[calc(70%-161.4px)] text-[20px] text-[rgba(255,255,255,0.75)] top-[2295px] w-[242px] whitespace-pre-wrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Agricultural Products
        <br aria-hidden="true" />
        {` Processed Foods`}
        <br aria-hidden="true" />
        {` Textiles & Garments`}
        <br aria-hidden="true" />
        {` Engineering Goods`}
        <br aria-hidden="true" />
        {` Handicrafts`}
        <br aria-hidden="true" />
        {` Leather Products`}
      </p>
      <p
        className="absolute font-['Roboto:Medium',sans-serif] font-medium h-[25px] leading-[25px] left-[calc(60%-10.2px)] text-[#c8ad82] text-[30px] top-[2245px] w-[269px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Our Services
      </p>
    </div>
  );
}
function Group8() {
  return (
    <div className="absolute contents left-[calc(80%-18.6px)] top-[2245px]">
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45px] left-[calc(90%-169.8px)] text-[20px] text-[rgba(255,255,255,0.75)] top-[2295px] w-[222px] whitespace-pre-wrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Info@growxports.in
        <br aria-hidden="true" />
        {` +91 XXXXX XXXXX`}
        <br aria-hidden="true" />
        {` India`}
      </p>
      <p
        className="absolute font-['Roboto:Medium',sans-serif] font-medium h-[25px] leading-[25px] left-[calc(80%-18.6px)] text-[#c8ad82] text-[30px] top-[2245px] w-[255px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Contact Info
      </p>
    </div>
  );
}
function Group12() {
  return (
    <div className="absolute contents left-[188px] top-[2384px]">
      <div
        className="absolute h-[70px] left-[188px] top-[2384px] w-[220px]"
        data-name="WhatsApp Image 2026-03-10 at 12.36.51 2"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[570.27%] left-[-113.09%] max-w-none top-[-235.14%] w-[326.18%]"
            src={imgWhatsAppImage20260310At1236512}
          />
        </div>
      </div>
    </div>
  );
}
function Group() {
  return (
    <div
      className="absolute inset-[91.6%_8.95%_7.83%_89.81%]"
      data-name="Group"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18.8749 15.5788"
      >
        <g id="Group">
          <path
            d={svgPaths.p1a851940}
            fill="var(--fill-0, #0F1B45)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}
function LogoTwitter() {
  return (
    <div
      className="absolute contents inset-[91.6%_8.95%_7.83%_89.81%]"
      data-name="logo-twitter 2"
    >
      <Group />
    </div>
  );
}
function Component() {
  return (
    <div
      className="absolute contents inset-[90.97%_8.08%_7.26%_88.8%]"
      data-name="1"
    >
      <div className="absolute inset-[90.97%_8.08%_7.26%_88.8%]" data-name="BG">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 47.2973 48.2941"
        >
          <path
            d={svgPaths.p1d37b900}
            fill="var(--fill-0, #C8AD82)"
            id="BG"
            stroke="var(--stroke-0, #0F1B45)"
          />
        </svg>
      </div>
      <LogoTwitter />
    </div>
  );
}
function Group1() {
  return (
    <div
      className="absolute inset-[91.39%_18.45%_7.75%_80.04%]"
      data-name="Group"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22.8858 23.3692"
      >
        <g id="Group">
          <path
            d={svgPaths.p1c494500}
            fill="var(--fill-0, #0F1B45)"
            id="Vector"
            stroke="var(--stroke-0, #0F1B45)"
          />
          <path
            d={svgPaths.p18f8d000}
            fill="var(--fill-0, #0F1B45)"
            id="Vector_2"
            stroke="var(--stroke-0, #0F1B45)"
          />
          <path
            d={svgPaths.p86b6500}
            fill="var(--fill-0, #0F1B45)"
            id="Vector_3"
            stroke="var(--stroke-0, #0F1B45)"
          />
        </g>
      </svg>
    </div>
  );
}
function LogoInstagram() {
  return (
    <div
      className="absolute contents inset-[91.39%_18.45%_7.75%_80.04%]"
      data-name="logo-instagram 1"
    >
      <Group1 />
    </div>
  );
}
function Component2() {
  return (
    <div
      className="absolute contents inset-[90.94%_17.64%_7.29%_79.23%]"
      data-name="3"
    >
      <div
        className="absolute inset-[90.94%_17.64%_7.29%_79.23%]"
        data-name="BG"
      >
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 47.2973 48.2941"
        >
          <path
            d={svgPaths.p1d37b900}
            fill="var(--fill-0, #C8AD82)"
            id="BG"
            stroke="var(--stroke-0, #0F1B45)"
          />
        </svg>
      </div>
      <LogoInstagram />
    </div>
  );
}
function Group2() {
  return (
    <div
      className="absolute inset-[91.45%_14.07%_7.78%_85.23%]"
      data-name="Group"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.68 20.9992"
      >
        <g id="Group">
          <path
            d={svgPaths.p3a4cf900}
            fill="var(--fill-0, #0F1B45)"
            id="Vector"
            stroke="var(--stroke-0, #0F1B45)"
          />
        </g>
      </svg>
    </div>
  );
}
function LogoFbSimple() {
  return (
    <div
      className="absolute contents inset-[91.45%_14.07%_7.78%_85.23%]"
      data-name="logo-fb-simple 2"
    >
      <Group2 />
    </div>
  );
}
function Component1() {
  return (
    <div
      className="absolute contents inset-[90.94%_12.86%_7.29%_84.01%]"
      data-name="2"
    >
      <div
        className="absolute inset-[90.94%_12.86%_7.29%_84.01%]"
        data-name="BG"
      >
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 47.2973 48.2941"
        >
          <path
            d={svgPaths.p1d37b900}
            fill="var(--fill-0, #C8AD82)"
            id="BG"
            stroke="var(--stroke-0, #0F1B45)"
          />
        </svg>
      </div>
      <LogoFbSimple />
    </div>
  );
}
function Group13() {
  return (
    <div className="absolute contents inset-[90.94%_8.08%_7.26%_79.23%]">
      <Component />
      <Component2 />
      <Component1 />
    </div>
  );
}
function Group14() {
  return (
    <div className="absolute contents left-[188px] top-[2384px]">
      <Group12 />
      <Group13 />
    </div>
  );
}
function Group16() {
  return (
    <div className="absolute bottom-0 contents left-[2px]">
      <div className="-translate-x-1/2 absolute bg-[#002147] h-[611px] left-[calc(50%+5px)] top-[2114px] w-[1518px]" />
      <Group7 />
      <Group9 />
      <Group8 />
      <Group14 />
      <p
        className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%-172px)] text-[#c8ad82] text-[20px] top-[2680px] w-[361px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        © 2026 Grow Xports. All rights reserved.
      </p>
    </div>
  );
}
function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[48px] text-center text-white w-[854.61px]">
        <p className="leading-[48px]">Looking for a reliable export partner?</p>
      </div>
    </div>
  );
}
function Container1() {
  return (
    <div
      className="content-stretch flex flex-col items-center max-w-[672px] pb-[16px] relative shrink-0 w-[672px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#d1d5dc] text-[20px] text-center w-[609.9px]">
        <p className="mb-0">{`Let's discuss how we can bring premium Indian products to your`}</p>
        <p>specific market with efficiency and care.</p>
      </div>
    </div>
  );
}
function Button() {
  return (
    <div
      className="bg-[#c8ad82] content-stretch flex items-center justify-center px-[48px] py-[20px] relative rounded-[9999px] shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#000a1e] text-[18px] text-center w-[96.53px]">
        <p className="leading-[28px]">Contact Us</p>
      </div>
    </div>
  );
}
function Container() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading />
      <Container1 />
      <Button />
    </div>
  );
}
function BackgroundShadow() {
  return (
    <div
      className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 overflow-clip p-[80px] rounded-[48px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[1627px] w-[1216px]"
      data-name="Background+Shadow"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(0, 10, 30) 0%, rgb(0, 33, 71) 100%)",
      }}
    >
      <Container />
    </div>
  );
}
function Background() {
  return (
    <div
      className="aspect-[4/3] relative shrink-0 w-full"
      data-name="Background"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={imgBackground}
      />
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}
function Heading1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#000a1e] text-[24px] w-full">
        <p className="leading-[32px]">Agricultural Products</p>
      </div>
    </div>
  );
}
function Container3() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[#44474e] text-[16px] w-full">
        <p className="mb-0">Grains, spices, and fresh produce</p>
        <p>sourced directly from premium farms.</p>
      </div>
    </div>
  );
}
function Container4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Container">
          <path d={svgPaths.p304eaa0} fill="var(--fill-0, #735C00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}
function Button1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center pt-[20px] relative shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#735c00] text-[14px] text-center tracking-[1.4px] uppercase w-[90.05px]">
        <p className="leading-[20px]">View More</p>
      </div>
      <Container4 />
    </div>
  );
}
function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[40px] relative w-full">
        <Heading1 />
        <Container3 />
        <Button1 />
      </div>
    </div>
  );
}
function AgriculturalProducts() {
  return (
    <div
      className="absolute bg-[#f3f4f5] content-stretch flex flex-col items-start left-[137px] overflow-clip right-[calc(60%+94.47px)] rounded-[48px] shadow-[0px_20px_6px_0px_rgba(0,0,0,0),0px_13px_5px_0px_rgba(0,0,0,0.01),0px_7px_4px_0px_rgba(0,0,0,0.05),0px_3px_3px_0px_rgba(0,0,0,0.09),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[1048px]"
      data-name="Agricultural Products"
    >
      <Background />
      <Container2 />
    </div>
  );
}
export default function Products() {
  return (
    <div className="bg-[#f6f6f6] relative size-full" data-name="Products">
      <div className="absolute backdrop-blur-[150px] bg-[rgba(176,131,59,0.25)] h-[504px] left-[calc(40%+20.2px)] opacity-75 rounded-[30px] top-[1048px] w-[373px]" />
      <Group18 />
      <Group15 />
      <Group3 />
      <Group4 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[calc(60%-9.2px)] not-italic text-[20px] text-white top-[61.72px] whitespace-nowrap">
        Products
      </p>
      <Group16 />
      <BackgroundShadow />
      <AgriculturalProducts />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-62px)] text-[#0f1b45] text-[35px] top-[1300px] w-[236px]">
        <p className="leading-[32px]">Coming Soon</p>
      </div>
    </div>
  );
}
