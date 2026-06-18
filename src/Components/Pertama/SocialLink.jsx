
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  const socials = [
   
    {
      icon: FaWhatsapp,
      link: "https://wa.me/6283125307355?text=Halo%20saya%20ingin%20bertanya%20mengenai%20tema%20undangan.",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/awng_drmwn/",
    },
  ];

  return (
    <div className="flex gap-5 mt-2">
      {socials.map((item, index) => {
        const Icon = item.icon;

        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              h-10
              w-10
              rounded-xl
              border
              border-yellow-800
              bg-white/5
              backdrop-blur
              flex
              items-center
              justify-center
              
              transition
              hover:scale-110
            "
          >
            <Icon size={20} className="text-yellow-800" />
          </a>
        );
      })}
    </div>
  );
}