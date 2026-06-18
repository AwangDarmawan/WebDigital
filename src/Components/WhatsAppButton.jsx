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
        justify-center

        w-14 h-14
        sm:w-16 sm:h-16

        rounded-full

        bg-[#25D366]
        text-white

        shadow-[0_10px_30px_rgba(37,211,102,0.4)]

        transition-all
        duration-300

        hover:scale-110
      "
    >
      <FaWhatsapp className="text-3xl sm:text-4xl" />
    </a>
  );
}