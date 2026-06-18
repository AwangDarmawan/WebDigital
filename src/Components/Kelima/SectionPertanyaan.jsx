import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import Pertanyaan from "./Pertanyaan";

export default function SectionPertanyaan() {
  const [openIndex, setOpenIndex] =
    useState(0);

 

  return (
    <section
      id="faq"
      className="
        py-20
        px-5
      "
    >
      <div
        className="
          max-w-4xl
          mx-auto
        "
      >
        {/* HEADER */}

        <div className="text-center">
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
                border-[#D6B75A]/30

                text-[#8B6B2E]
                text-sm
                font-semibold
              "
            >
              <HelpCircle size={16} />
              FAQ
            </span>
          </div>

          <h2
            className="
              mt-6

              text-4xl
              sm:text-5xl
              md:text-6xl

             

              bg-gradient-to-b
              from-[#E5C76B]
              via-[#C9A227]
              to-[#8B6B2E]

              bg-clip-text
              text-transparent
              font-poppins
              font-black
            "
          >
            Pertanyaan Umum
          </h2>

          <p
            className="
              mt-4

              text-sm
              sm:text-base

              text-[#7A6850]
                font-poppins
                font-black
              max-w-2xl
              mx-auto
            "
          >
            Temukan jawaban dari
            pertanyaan yang paling sering
            diajukan oleh pelanggan.
          </p>
        </div>

        {/* FAQ LIST */}

        <div className="mt-12 space-y-4">
          {Pertanyaan.map(
            (faq, index) => (
              <div
                key={index}
                className="
                  overflow-hidden

                  rounded-2xl

                  bg-white

                  border
                  border-[#D6B75A]/20
                    font-space
                    font-black
                  shadow-sm
                "
              >
                <button
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index
                        ? null
                        : index
                    )
                  }
                  className="
                    w-full

                    flex
                    items-center
                    justify-between

                    text-left

                    p-5
                    md:p-6
                  "
                >
                  <span
                    className="
                      text-sm
                      sm:text-base
                      md:text-lg

                      font-semibold

                      text-[#5B5347]
                    "
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`
                      w-5 h-5
                      text-[#C9A227]
                      transition-transform
                      duration-300
                      ${
                        openIndex ===
                        index
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ${
                      openIndex ===
                      index
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        px-5
                        pb-5
                        md:px-6
                        md:pb-6

                        text-sm
                        md:text-base

                        leading-relaxed

                        text-[#7A6850]
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}