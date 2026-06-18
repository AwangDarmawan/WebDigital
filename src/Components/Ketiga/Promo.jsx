import { Sparkles, Clock3 } from "lucide-react";
import TimerPromo from "./TimerPromo";
import {
  
  DISCOUNT,
} from "../Kempat/Thema";


export default function Promo() {
  const promoEndDate = new Date(
    "2026-07-31T23:59:59"
    // 31 Juli 2026
  );

  return (
    <section id="promo" className="py-10 px-5">
      <div
        className="
        max-w-6xl
        mx-auto

        rounded-[32px]

        bg-white/80
        backdrop-blur-xl

        border
        border-[#D6B75A]/30

        shadow-[0_0_50px_rgba(229,199,107,0.15)]

        overflow-hidden
        relative
      "
      >
        <div
          className="
          absolute
          -top-24
          right-0

          w-72
          h-72

          rounded-full

          bg-[#E5C76B]/20
          blur-[100px]
        "
        />

        <div className="relative z-10 p-6 sm:p-10 md:p-14">
          {/* Badge */}
          <div className="flex justify-center">
            <span
              className="
              inline-flex
              items-center
              gap-2

              px-4
              py-2

              rounded-full

              bg-[#E5C76B]/10
              border
              border-[#D6B75A]/40

              text-[#8B6B2E]

              text-xs
              sm:text-sm

              font-semibold
                 animate-pulse
            "
            >
              <Sparkles size={16} />
              Promo Terbatas
            </span>
          </div>

          {/* Title */}
          <h2
          data-aos="fade-down-right"
            className="
            mt-6

            text-center

            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl

            font-black

            bg-gradient-to-b
            from-[#E5C76B]
            via-[#C9A227]
            to-[#8B6B2E]

            bg-clip-text
            text-transparent
            drop-shadow-[0_0_50px_rgba(139,92,246,0.8)]
           font-poppins
          "
          >
            Diskon -{DISCOUNT}%
          </h2>

          <p
          data-aos="fade-up-right"
            className="
            mt-4

            text-center

            text-[#7A6850]
    font-poppins
    font-black

            text-sm
            sm:text-base
            md:text-lg

            max-w-2xl
            mx-auto
          "
          >
            Dapatkan promo spesial pembuatan
            undangan digital premium dengan
            desain elegan dan fitur lengkap.
          </p>

          {/* Timer Component */}
          <TimerPromo
            targetDate={promoEndDate}
          />

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() =>
    window.open(
      "https://wa.me/6283125307355?text=Halo%20saya%20ingin%20memesan%20undangan%20digital",
      "_blank"
    )
  }

              className="
              px-8
              py-4

              rounded-xl

              bg-gradient-to-r
              from-[#8B6B2E]
              via-[#C9A227]
              to-[#8B6B2E]

              text-white
              font-semibold

              shadow-[0_0_40px_rgba(229,199,107,0.4)]

              hover:scale-105

              transition-all
              duration-300
              font-space
              
            "
            >
              Pesan Sekarang
            </button>
          </div>

          <div
            className="
            mt-4

            flex
            justify-center
            items-center
            gap-2

            text-[#8B6B2E]

            text-sm
          "
          >
            <Clock3 size={16} />
            Promo berakhir 31 Juli 2026
          </div>
        </div>
      </div>
    </section>
  );
}