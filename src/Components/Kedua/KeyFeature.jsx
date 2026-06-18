import { CheckCircle2 } from "lucide-react";

export default function KeyFeatures() {
  const features = [
    "Desain Elegan & Premium",
    "Responsive Semua Device",
    "Hitung Mundur Acara",
    "Galeri Foto & Video",
    "Love Story Timeline",
    "Google Maps Lokasi",
    "Konfirmasi Kehadiran",
    "Musik Latar Otomatis",
    "Intro Tampilan awal",
  ];

  return (
    <div className="w-full mt-5">
      {/* Title */}
      <h2
        className="
        text-center

        text-3xl
        sm:text-4xl
        md:text-5xl

        font-black
        font-poppins

        bg-gradient-to-b
      
              from-[#E5C76B]
via-[#C9A227]
to-[#8B6B2E]
            
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_50px_rgba(139,92,246,0.8)]
           
      "
      >
        Fitur Unggulan 
      </h2>

      {/* <p
        className="
        mt-3
        text-center

        text-[#7A6850]

        text-sm
        sm:text-base
        md:text-lg

        font-medium
        font-poppins
      "
      >
        Fitur unggulan yang membuat undangan digital Anda
        lebih elegan, modern, dan berkesan.
      </p> */}

      {/* Features Grid */}
      <div
        className="
        mt-7

        grid
        grid-cols-1
        sm:grid-cols-2


        gap-4
        md:gap-5
      "
      >
        {features.map((item, index) => (
          <div
            key={index}
            className="
            group
            relative

            overflow-hidden
            
            mx-6
sm:mx-0
            smp:px-2
            p-5
            md:py-5
            md:px-3
            sm:py-4

            rounded-2xl

            bg-white/80
            backdrop-blur-xl

            border
            border-[#D6B75A]/40

            shadow-[0_0_25px_rgba(229,199,107,0.12)]

            hover:border-[#E5C76B]
            hover:shadow-[0_0_50px_rgba(229,199,107,0.30)]

            hover:-translate-y-1

            transition-all
            duration-300
          "
          >
            {/* Top Gradient Border */}
            <div
              className="
              absolute
              top-0
              left-0

              w-full
              h-[3px]

              bg-gradient-to-r
              from-[#8B6B2E]
              via-[#C9A227]
              to-[#E5C76B]
            "
            />

            {/* Gold Glow */}
            <div
              className="
              absolute
              -top-10
              -right-10

              w-24
              h-24

              rounded-full

              bg-[#E5C76B]/20
              blur-2xl
            "
            />

            {/* Content */}
            <div className="relative z-10">
              <p
                className="
                flex
                items-center
                gap-3

                 text-[#7A6850]

                text-sm
                sm:text-base
                md:text-lg

                font-space
              "
              >
                <CheckCircle2
                  size={22}
                  className="
                  text-[#C9A227]
                  flex-shrink-0
                "
                />

                {item}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}