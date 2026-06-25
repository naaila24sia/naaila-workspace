import React from "react";

export default function TrustedBy() {
  const partners = [
    { name: "PDHI", type: "Vet Association" },
    { name: "Royal Canin", type: "Nutrition Partner" },
    { name: "Hill's Pet", type: "Prescription Diet" },
    { name: "Zoetis", type: "Animal Health" },
    { name: "Boehringer Ingelheim", type: "Vaccine Partner" },
    { name: "IDEXX Labs", type: "Diagnostics Partner" },
  ];

  return (
    <section className="py-10 bg-bg-main/60 border-y border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="shrink-0 text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-text-soft">
            Kemitraan & Lisensi Medis
          </p>
          <p className="text-sm font-extrabold text-text-main mt-0.5">
            Didukung oleh Asosiasi Resmi
          </p>
        </div>

        {/* Scrolling Partner Logos */}
        <div className="w-full overflow-hidden relative">
          {/* Fade Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-bg-main/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-bg-main/60 to-transparent z-10 pointer-events-none" />

          {/* Looping Flex container */}
          <div className="flex gap-10 items-center justify-around flex-wrap md:flex-nowrap">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300 cursor-pointer py-2"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary font-heading font-extrabold text-xs shrink-0">
                  {partner.name[0]}
                </div>
                <div className="text-left">
                  <p className="font-heading font-bold text-sm text-text-main leading-tight">
                    {partner.name}
                  </p>
                  <p className="text-[9px] text-text-soft font-semibold uppercase tracking-wider leading-none mt-0.5">
                    {partner.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
