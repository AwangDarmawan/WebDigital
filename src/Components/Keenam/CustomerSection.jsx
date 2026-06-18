

import { Heart } from "lucide-react";
import { Customer } from "./Customer";

export default function CustomerSection() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5C76B]/10 border border-[#D6B75A]/40 text-[#8B6B2E] text-xs sm:text-sm font-semibold">
              <Heart size={16} />
              Customer Bahagia
            </span>
          </div>

          <h2 
          data-aos ="zoom-in"
          className="
          mt-5 text-4xl sm:text-5xl md:text-6xl 
          font-black  bg-gradient-to-b
              from-[#E5C76B]
              via-[#C9A227]
              to-[#8B6B2E]

              bg-clip-text
              text-transparent
              font-poppins     
              
         ">
            Customer
          </h2>

          <p data-aos="fade-down-left" className="mt-4 max-w-2xl mx-auto text-[#7A6850] text-sm sm:text-base font-poppins font-black">
            Terima kasih kepada seluruh pasangan yang telah mempercayakan momen spesial mereka kepada kami.
          </p>
        </div>

        {/* MARQUEE SCROLL */}
        <div className="overflow-hidden mt-14">
          <div className="flex gap-10 w-max animate-[scroll_25s_linear_infinite]">
            {[...Customer, ...Customer].map((customer, index) => (
              <div
                key={index}
                className="text-center group min-w-[120px]"
              >
                <div className="relative w-20 h-20 mx-auto rounded-full p-[3px] bg-gradient-to-r from-[#E5C76B] via-[#C9A227] to-[#8B6B2E] group-hover:scale-105 transition">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>

                <h3 className="mt-3 font-bold text-[#5B5347] text-sm font-space">
                  {customer.name}
                </h3>

                <p className="text-xs text-[#9A8A75] font-poppins">
                  {customer.type}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}