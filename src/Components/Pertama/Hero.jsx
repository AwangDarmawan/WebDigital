import HeroImage from "../../assets/Img/Wedding3.png";
import { TypeAnimation } from "react-type-animation";
import {
  // Mail,

  ExternalLink,
} from "lucide-react";

import SocialLinks from "./SocialLink";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      relative
      z-10
      mt-10
      
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

        <div
          className="
          grid
          lg:grid-cols-2
          gap-10
          items-center
           
          "
        >
          <div className="order-2 lg:order-1">

            {/* LEFT */}
            <div>

              <span
                data-aos="fade-right"
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
                ✨ Siap berinovasi
              </span>

              <h1
                data-aos="fade-up-right"
                className="
              mt-3
              xs:py-6
              font-black
              leading-none
              text-5xl
              sm:text-6xl
              md:text-7xl
              xl:text-7xl
           drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]
          
           
         font-poppins

bg-gradient-to-b
from-[#E5C76B]
via-[#C9A227]
to-[#8B6B2E]
bg-clip-text
text-transparent
              "
              >
                4da Digital
              </h1>
              
              <h2 data-aos="fade-up" className=" mt-6">
                <TypeAnimation
                  sequence={[
                    "Digital Invitation & Wedding Website",
                    500,
                    "",
                    500,
                  ]}
                  speed={150}
                  deletionSpeed={50}
                  repeat={Infinity}
                  className="
    mt-6
    text-lg
  text-[#7A6850]
    font-poppins
    border-r-4
border-yellow
font-black
  "
                />
              </h2>

              <p
                data-aos="fade-down-left"
                className="
              mt-5
              max-w-xl
           text-[#7A6850]
              text-base
              sm:text-lg
              font-space
              font-bold
             
              
              "
              >
                Wujudkan momen spesial Anda dengan undangan digital
            yang elegan, modern, berkesan,dan mudah dibagikan.
              </p>


           
 <SocialLinks />
             
                  
                <button
                   onClick={() =>
    document
      .getElementById("tema")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
                  className="
                px-6 py-3
                mt-4
                mb-4
                font-space
                font-black
                rounded-xl
               bg-gradient-to-r
from-[#55471e]
via-[#C9A227]
to-[#8B6B2E]

text-white
                hover:scale-105
                transition
                shadow-[0_0_40px_rgba(139,92,246,0.3)]
                flex
                items-center
                justify-center
                gap-2
                "
                >
                  Projek
                  <ExternalLink size={18} />
                </button>
              {/* </div> */}

           
            </div>
          </div>

          {/* RIGHT */}

          <div
            data-aos="fade-down-left"
            className="
            flex
            justify-center
              order-1
            lg:order-2
            bg-transparent
            pt-7

            "
          >
            <img 
              src={HeroImage}
              alt="4da Digital"
              className="
              mt-5
              max-w-[240px]
    sm:max-w-[300px]
    md:max-w-[380px]
    lg:max-w-[450px]
    xl:max-w-[380px]
    h-auto
    object-contain
            drop-shadow-[0_0_45px_rgba(229,199,107,0.50)]
              
              bg-transparent
               transition-all
    duration-300
    hover:scale-105
              
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}