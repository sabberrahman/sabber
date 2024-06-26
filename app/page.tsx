
import Image from "next/image";
import Hero from "./components/Hero";
import TechStack from "./components/Stack";
import { AboutSection } from "./components/About";
import { FavoriteProjects } from "./components/HeroProject";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
     <Hero/>
     <TechStack/>
     <AboutSection/>
     <FavoriteProjects/>
     <Footer/>
    </>
    
  );
}
