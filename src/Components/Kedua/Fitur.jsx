

import AboutImage from "../../assets/Img/poto3.png";

// import CardProjek from "./CardProjek";
import KeyFeatures from "./KeyFeature";
// import { TypeAnimation } from "react-type-animation";


export default function Fitur() {
   
  return (
    <section
      id="detail"
      className="
      min-h-screen
      flex
      items-center
      py-20
      relative
      "
    >
      <div
        className="
        container
        mx-auto
        px-5
        lg:px-10
        "
      >
        {/* TITLE */}
        <div className="text-center mb-10 sm:mb-6">
          <h2 data-aos="fade-up-left"
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
            drop-shadow-[0_0_50px_rgba(139,92,246,0.8)]
           font-poppins
            "
          >
            {/* from-[#6366f1]
             via-[#6226d3]
             to-[#b806ff] */}
            Detail Fitur
          </h2>

         <p data-aos="fade-down-right"
  className="
  mt-3
  flex
  flex-wrap
  items-center
  justify-center
  gap-2

  text-sm
  sm:text-base
  font-black
  text-[#7A6850]
    font-poppins
  "
>



     Fitur Lengkap Untuk Membuat Momen Spesial Anda Lebih Berkesan
 

 </p>
        </div>

        {/* CONTENT */}
        <div
          className="
            mt-8

  grid
  grid-cols-1
  sm:grid-cols-1
  lg:grid-cols-2
  xl:grid-cols-2

  gap-4
  md:gap-5
          items-center
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
            order-2
            lg:order-1
            "
          >
            <span
            data-aos="fade-down-right"
              className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              
              rounded-full
              border
              border-yellow-500/30
              bg-yellow-500/10
              text-[#55471e]
              text-sm
             hover:scale-110
                 shadow-[0_0_45px_rgba(229,199,107,0.50)]
                 drop-shadow-[0_0_60px_rgba(229,199,107,0.65)]
                 font-space
              "
            >
              ✨ Fitur 4da Digital
            </span>
    
<KeyFeatures/>

          

            {/* BUTTON */}
            
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
            flex
            justify-center
            order-1
            lg:order-2
            "
          >
            <div data-aos="fade-zoom-in-right" className="relative">
              <div
                className="
                absolute
                inset-0
               
                blur-3xl
                rounded-full
             
                "
              />

              <img
                src={AboutImage}
                alt="Awang Darmawan"
                className="
                relative
                block
                mx-auto
                w-[75%]
               sm:w-[65%]
               md:w-[55%]
               lg:w-[70%]
              
               
                object-contain
                   drop-shadow-[0_0_45px_rgba(229,199,107,0.50)]
                transition-all
                duration-300
                hover:scale-105
                "
              />
            </div>
          </div>
        </div>

        {/* CARD SECTION */}
        {/* <div className="mt-20">
          <CardProjek  setActiveTab={setActiveTab} />
        </div> */}
      </div>
    </section>
  );
}