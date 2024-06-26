
import Image from "next/image";
import Hero from "./components/Hero";
import TechStack from "./components/Stack";
import { AboutSection } from "./components/About";
import { FavoriteProjects } from "./components/HeroProject";
import { Footer } from "./components/Footer";
import Hero_02 from "./components/Hero_02";

export default function Home() {
  return (
    <>
     
     <Hero_02/>
     <TechStack/>
    
     <FavoriteProjects/>
     
     <Footer/>
    </>
    
  );
}
