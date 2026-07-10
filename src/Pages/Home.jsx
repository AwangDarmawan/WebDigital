import Fitur from "../Components/Kedua/Fitur"
import CustomerSection from "../Components/Keenam/CustomerSection"
import SectionPertanyaan from "../Components/Kelima/SectionPertanyaan"
import ThemaSection from "../Components/Kempat/ThemaSection"

import Promo from "../Components/Ketiga/Promo"
import StepSection from "../Components/Ketujuh/StepSection"
import MusicSection from "../Components/Music/MusicSection"
import Navbar from "../Components/Navbar"
import Hero from "../Components/Pertama/Hero"
import WhatsAppButton from "../Components/WhatsAppButton"

// GithubAwangDr/Web-Digital-Wedding
function Home() {
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
      <MusicSection/>
      <WhatsAppButton/>
    
      </div>
    </>
  )
}

export default Home
