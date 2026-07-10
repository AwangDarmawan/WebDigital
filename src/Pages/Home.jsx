import { useEffect, useRef, useState } from "react"
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
       const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);
// state swipe all
// const [scrollDirection, setScrollDirection] = useState("down");


useEffect(() => {
  const shouldPlay = localStorage.getItem("playMusic");

  if (shouldPlay === "true") {
    audioRef.current?.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  }
}, []);
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
      <MusicSection isPlaying={isPlaying}/>
      <WhatsAppButton/>
    
      </div>
    </>
  )
}

export default Home
