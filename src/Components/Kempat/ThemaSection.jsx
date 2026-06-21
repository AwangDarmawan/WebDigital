import { useState } from "react";

import {
  Thema,
  DISCOUNT,
} from "./Thema";

import ThemeFilter from "./ThemaFilter";

import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";

export default function ThemaSection() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState("all");

  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);

  const filteredThemes =
    activeCategory === "all"
      ? Thema
      : Thema.filter(
          (item) =>
            item.category === activeCategory
        );
        const displayedThemes = showAll
  ? filteredThemes
  : filteredThemes.slice(0, 4);

  return (
    <section
      id="tema"
      className="
      py-10
    "
    >
      <div
        className="
        container
        mx-auto
        px-5
      "
      >
        {/* TITLE */}

        <div className="text-center">
          <h2
           data-aos="zoom-in"
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl

            font-black

            bg-gradient-to-b
            from-[#E5C76B]
            via-[#C9A227]
            to-[#8B6B2E]

            bg-clip-text
            text-transparent

            font-poppins
          "
          >
            Pilihan Tema
          </h2>

          <p
           data-aos="fade-up-right"
            className="
            mt-3

            text-[#7A6850]

            text-sm
            sm:text-base
            font-poppins
            font-black
          "
          >
            Pilih tema terbaik untuk
            momen spesial Anda
          </p>
        </div>

        {/* FILTER */}

        <ThemeFilter
          activeCategory={
            activeCategory
          }
          setActiveCategory={
            setActiveCategory
          }
        />
        <div className="mt-4 text-center">
  <h2
    className="
      text-sm
      md:text-base
      text-[#7A6850]
      font-space
      font-black
    "
  >
    
    <span className="mx-1 font-bold text-[#C9A227]">
      {filteredThemes.length}
    </span>
    Template
  </h2>
</div>

        {/* GRID */}

        <div
          className="
          mt-12
  
    grid

    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4

    gap-3
    sm:gap-4
    lg:gap-6
    
        "
        >
          
      
          {displayedThemes.map((theme) => {
            const saving =
              (theme.price *
                DISCOUNT) /
              100;

            const promoPrice =
              theme.price - saving;

            return (
              
              <div
                key={theme.id}
                className="
                rounded-3xl

                overflow-hidden

                bg-white

                border
                border-[#D6B75A]/20

                shadow-[0_10px_40px_rgba(201,162,39,0.15)]

            

                transition-all
                duration-300
                font-space
              "
              >
                
                {/* IMAGE */}
                <div
  className="
    w-[70%]
    sm:w-[60%]
    md:w-[50%]
    lg:w-[80%]
    xl:w-[90%]

    aspect-[4/5]
    mx-auto
    overflow-hidden
  
  "
>

                <img
                  src={theme.image}
                  alt={theme.title}
                  className="
                  w-full

                 h-full
                  object-cover
                "
                />
                
                </div>
               

                {/* CONTENT */}

                <div className="p-2 sm:p-3 md:p-5">
                    <span
                    className="
                      inline-block

    mt-2

  
    py-1

    rounded-full

   
    text-red-600

    text-[9px]
    sm:text-xs

    font-bold
                  "
                  >
                    {theme.mode}
                  </span>
               
                  <h3
                    className="
                     text-xs
    sm:text-sm
    md:text-lg

    font-bold
    text-[#5B5347]

    line-clamp-1

                  "
                  >
                    {theme.title}
                  </h3>

                 
                 

                  {/* DISKON */}

                  <span
                    className="
                      inline-block

    mt-2

    px-2
    py-1

    rounded-full

    bg-red-100
    text-red-600

    text-[10px]
    sm:text-xs

    font-bold
                  "
                  >
                    -{DISCOUNT}%
                  </span>

                  {/* HARGA ASLI */}

                  <p
                    className="
                    mt-2

    text-[10px]
    sm:text-xs
    md:text-sm

    text-gray-400

    line-through
                  "
                  >
                    {formatRupiah(
                      theme.price
                    )}
                  </p>

                  {/* HARGA PROMO */}

                  <h4
                    className="
                    text-sm
    sm:text-lg
    md:text-2xl

    font-black

    text-[#C9A227]
                  "
                  >
                    {formatRupiah(
                      promoPrice
                    )}
                  </h4>

                  {/* BUTTON */}

                  <button
                      onClick={() => window.open(theme.demo, "_blank")}
                    target="_blank"
                    rel="noreferrer"
                    className="
                     mt-3

    w-full

    py-2
    md:py-3

    rounded-lg
    md:rounded-xl

    bg-gradient-to-r
    from-[#E5C76B]
    via-[#C9A227]
    to-[#8B6B2E]

    text-white

    text-[11px]
    sm:text-xs
    md:text-base

    font-semibold

    flex
    items-center
    justify-center
    gap-1
    md:gap-2

    transition-all
    hover:scale-105
                  "
                  >
                    <FaPaperPlane />

                    Lihat Demo
                  </button>
                     
                     <button
  onClick={() =>
    window.open(
      `https://wa.me/6283125307355?text=${encodeURIComponent(
        `Halo, saya ingin bertanya mengenai tema undangan ${theme.demo}`
      )}`,
      "_blank"
    )
  }
  className="
    mt-3
    w-full
    py-2
    md:py-3
    rounded-lg
    md:rounded-xl
    bg-gradient-to-r
    from-[#25D366]
    via-[#20BD5A]
    to-[#128C7E]
    text-white
    text-[11px]
    sm:text-xs
    md:text-base
    font-semibold
    flex
    items-center
    justify-center
    gap-1
    md:gap-2
    transition-all
    hover:scale-105
  "
>
  <FaWhatsapp />
  Pesan
</button>
                </div>
              </div>
              
            );
          })}
        </div>
            {filteredThemes.length > 4 && (
  <div className="flex justify-center mt-10">
    <button
      onClick={() =>
        setShowAll(!showAll)
      }
      className="
        px-6 py-3
        rounded-xl
        bg-gradient-to-r
        from-[#E5C76B]
        via-[#C9A227]
        to-[#8B6B2E]
        text-white
        font-semibold
      "
    >
      {showAll
        ? "Tampilkan Lebih Sedikit"
        : "Lihat Semua Tema"}
    </button>
  </div>
)}
      </div>
    </section>
  );
}