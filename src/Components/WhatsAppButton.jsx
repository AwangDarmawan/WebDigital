import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6283125307355?text=Halo%20saya%20ingin%20bertanya%20mengenai%20tema%20undangan."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-[999]

        flex
        items-center
        gap-3

        px-4
        py-2

        rounded-full

        bg-white
        border
        border-green-200

        shadow-[0_10px_30px_rgba(37,211,102,0.25)]

        transition-all
        duration-300

        hover:scale-105
      "
    >
      {/* Text */}
      <span data-aos="fade-down-left"
        className="
          text-sm
          sm:text-base
          font-semibold
          text-gray-700
          whitespace-nowrap
      italic
        "
      >
        Pesan Sekarang
      </span>

      {/* Icon */}
      <div
        className="
          flex
          items-center
          justify-center

          w-10 h-10
          sm:w-12 sm:h-12

          rounded-full

          bg-[#25D366]
          text-white
        "
      >
        <FaWhatsapp className="text-xl sm:text-2xl" />
      </div>
    </a>
  );
}