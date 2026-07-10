import { Eye } from "lucide-react";
import { StepData } from "./StepData";

export default function StepSection() {
  return (
    <section
      id="penggunaan"
      className="bg-[#FFFDF8] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#D6B75A]/30
              bg-[#E5C76B]/10
              px-4
              py-2
              text-xs
              font-semibold
              tracking-wide
              text-[#8B6B2E]
              sm:text-sm
            "
          >
            Step BY Step
          </span>

          <h2 data-aos="fade-up"
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-poppins
              font-black

              bg-gradient-to-b
              from-[#E5C76B]
              via-[#C9A227]
              to-[#8B6B2E]

              bg-clip-text
              text-transparent
               
              
            "
          >
            Cara Penggunaan Undangan 
          
          
          </h2>

          <p className="  font-poppins font-black mt-5 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-[#7A6850] leading-7">
            Mudah di bagikan dan bisa request tamu TAK TERBATAS dan tambah isi undangan
          </p>
        </div>

        {/* Card */}

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {StepData.map((step,index) => {
            // const Icon = step.img;

            return (
              <article
  key={step.id}
  data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
  className="
    group
    overflow-hidden
    rounded-3xl
    border
    border-[#D6B75A]/20
    bg-white
    shadow-sm
    transition-all
    duration-300
  
  "
>
  {/* IMAGE */}

  <div className="relative h-56 sm:h-64 bg-[#F8F3E7]">

    <a
  href={step.img}
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-[#8B6B2E]">
  <Eye size={14} />
  <span className="font-poppins italic">Lihat Gambar</span>
</div>
  <img
    src={step.img}
    alt={step.title}
    loading="lazy"
    className="
      h-full
      w-full
      object-contain
      transition-transform
      duration-500
      group-hover:scale-105
    "
  />
  
</a>

    <span
      className="
        absolute
        top-4
        right-4

        flex
        h-10
        w-10
        items-center
        justify-center

        rounded-full
        bg-[#C9A227]

        text-sm
        font-bold
        text-white
      "
    >
      {step.id}
    </span>
  </div>

  {/* CONTENT */}

  <div className="p-6">
    <h3 className="text-xl font-bold  font-poppins italic bg-gradient-to-b
              from-[#E5C76B]
              via-[#C9A227]
              to-[#8B6B2E]

              bg-clip-text
              text-transparent">
      {step.title}
    </h3>

    <p className="mt-3 text-[#7A6850] leading-7 font-semibold font-poppins">
      {step.description}
    </p>
  </div>
</article>
            );
          })}
        </div>
      </div>
    </section>
  );
}