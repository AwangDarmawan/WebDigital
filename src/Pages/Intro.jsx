
import { FaHeart } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";



function Intro() {
  <Helmet>
  {/* Primary SEO */}
  <title>
    Website Undangan Digital | 4daDigital
  </title>

  <meta
    name="description"
    content="4daDigital jasa pembuatan undangan digital pernikahan modern dengan harga super hemat, mulai dari Rp 50.000 hingga Rp 200.000 saja! Tersedia ratusan pilihan template premium, mulai dari konsep adat nusantara yang sakral hingga gaya modern minimalis. Undangan sangat fleksibel (bisa pakai foto maupun tanpa foto) dan sudah dilengkapi fitur bebas custom nama tamu undangan sepuasnya tanpa batas!"
  />
    
  <meta
    name="keywords"
    content="undangan digital, undangan digital pernikahan, website 4digital, undangan online"
  />

  <meta name="author" content="4daDigital" />
  <meta name="robots" content="index, follow, max-image-preview:large" />

  <link
    rel="canonical"
    href="https://web-4dadigital.vercel.app/"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Undangan Digital Pernikahan - 4daDigital"
  />
  <meta
    property="og:description"
    content="Website undangan digital elegan dengan RSVP online, galeri foto, countdown, love story, Google Maps, musik, dan amplop digital."
  />
  <meta
    property="og:url"
    content="https://web-4dadigital.vercel.app/"
  />
  <meta property="og:site_name" content="4daDigital" />
  <meta
    property="og:image"
    content="https://web-4dadigital.vercel.app/4daDigital.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Undangan Digital Pernikahan - 4daDigital"
  />
  <meta
    name="twitter:description"
    content="Jasa pembuatan website undangan digital elegan dan modern."
  />
  <meta
    name="twitter:image"
    content="https://web-4dadigital.vercel.app/cover.jpg"
  />

  {/* Geo */}
  <meta name="geo.region" content="ID-JB" />
  <meta name="geo.placename" content="Cianjur" />
  <meta name="ICBM" content="-6.709502, 107.234312" />
    {/* JSON-LD */}
  <script type="application/ld+json">
    {`
    {
      "@context":"https://schema.org",
      "@type":"LocalBusiness",
      "name":"4daDigital",
      "url":"https://web-4dadigital.vercel.app/",
      "description":"Jasa pembuatan website undangan digital pernikahan.",
      "areaServed":"Indonesia",
      "address":{
        "@type":"PostalAddress",
        "addressLocality":"Cianjur",
        "addressRegion":"Jawa Barat",
        "addressCountry":"ID"
      }
    }
    `}
  </script>
</Helmet>

  

  const navigate = useNavigate();
  const handleOpen = () => {
  localStorage.setItem("playMusic", "true");

  navigate("/home");
};

  return (
    <section
      className="
      
      inset-0
      z-50
      flex
      items-center
      justify-center
      overflow-hidden
      min-h-screen
      relative
      
    "
    >
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] blur-[150px] bg-[#D4B65A]/15
    " />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-fuchsia-600/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="relative text-center px-6">
        {/* Brand */}
        <h1
        data-aos="fade-down-left"
          className="
           font-space
          tracking-wider

  bg-gradient-to-t
  from-[#8B6B2E]
  via-[#C9A227]
  to-[#E5C76B]

  bg-clip-text
  text-transparent

  drop-shadow-[0_0_15px_rgba(201,162,39,0.25)]
          font-bold

          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl

         
        "
        >
          4daDigital
        </h1>

        {/* Divider */}
        <div
          className="
          w-20
          h-[2px]
          bg-gradient-to-r
         
         from-[#8B6B2E]
         via-[#C9A227]
         to-[#E5C76B]
         
          mx-auto
          mt-4
        "
        />

        
            {/* Wedding Icon */}
<div className="mt-10 flex justify-center">
  <div
    className="
    relative

    w-24 h-24
    sm:w-28 sm:h-28
    md:w-32 md:h-32

    rounded-full

    bg-white/70
    backdrop-blur-xl

    border
    border-[#D6B75A]/40

    flex
    items-center
    justify-center
   drop-shadow-[0_0_30px_rgba(201,162,39,0.20)]
    shadow-[0_0_30px_rgba(201,162,39,0.20)]
    
  "
  >
    <GiLovers
    data-aos="zoom-in"
      className="
      text-[#C9A227]
       
      text-4xl
      sm:text-5xl
      md:text-6xl
    "
    />

<motion.div
  className="
    absolute
    -top-2
    -right-2
  "
  animate={{
    scale: [1, 1.3, 1, 1.2, 1],
  }}
  transition={{
    duration: 1.2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <FaHeart
    className="
      text-red-500
      text-xl
      drop-shadow-lg
    "
  />
</motion.div>
</div>
</div>
   

        {/* Text */}
        <h2
          className="
           mt-6
            max-w-2xl
            mx-auto
            font-poppins
           
            sm:text-base
            md:text-lg
            leading-relaxed
           text-lg
            
              
  text-[#C9A227]
 


font-black
  drop-shadow-[0_0_15px_rgba(201,162,39,0.25)]
        "
        >
           Kami menyediakan layanan pembuatan undangan digital
          yang elegan, modern dan mudah dibagikan.
          custom tamu sepuasnya. Jadikan momen
          berharga lebih berkesan <span className="text-[#e4b20f] animate-pulse font-extrabold">diskon 60%</span>. mulai harga 50.000 
          
         
       
        </h2>
        {/* Button */}
<div className="mt-8 flex justify-center">
  <button
   onClick={handleOpen}
    className="
    group

    px-8
    py-3

    rounded-full

    bg-gradient-to-r
    from-[#8B6B2E]
    via-[#C9A227]
    to-[#E5C76B]

    text-white
    font-semibold

    shadow-[0_0_25px_rgba(201,162,39,0.25)]

    hover:scale-105
    transition-all
    duration-300
    font-poppins
  "
  >
    Masuk Ke Website
  </button>
</div>
      </div>
      
    </section>
  );
}

export default Intro;