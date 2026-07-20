
import Fitur from "../Components/Kedua/Fitur"
import CustomerSection from "../Components/Keenam/CustomerSection"
import SectionPertanyaan from "../Components/Kelima/SectionPertanyaan"
import ThemaSection from "../Components/Kempat/ThemaSection"

import Promo from "../Components/Ketiga/Promo"
import StepSection from "../Components/Ketujuh/StepSection"

import Navbar from "../Components/Navbar"
import Hero from "../Components/Pertama/Hero"
import WhatsAppButton from "../Components/WhatsAppButton"
import { Helmet } from "react-helmet-async";

// GithubAwangDr/Web-Digital-Wedding
function Home() {
     
<Helmet>
  {/* Primary SEO */}
  <title>
    Undangan Digital
  </title>

  <meta
    name="description"
    content="4daDigital jasa pembuatan undangan digital pernikahan modern dengan harga super hemat, mulai dari Rp 50.000 hingga Rp 200.000 saja! Tersedia ratusan pilihan template premium, mulai dari konsep adat nusantara yang sakral hingga gaya modern minimalis. Undangan sangat fleksibel (bisa pakai foto maupun tanpa foto) dan sudah dilengkapi fitur bebas custom nama tamu undangan sepuasnya tanpa batas!"
  />

  <meta
    name="keywords"
    content="undangan digital, undangan digital pernikahan, website undangan, undangan online"
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
    content="https://web-4dadigital.vercel.app/"
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



  return (
    <>
     <div
      className="
      min-h-screen
      bg-white
     
      relative
      overflow-hidden
    "
    >
      <Navbar/>
      <Hero/>
      
      <Fitur/>
      <Promo/>
      <CustomerSection/>
      <ThemaSection/>
      <SectionPertanyaan/>
      <StepSection/>
   
      <WhatsAppButton/>
    
      </div>
    </>
  )
}

export default Home
