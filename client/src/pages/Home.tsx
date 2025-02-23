import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Blog from "@/components/sections/Blog";
import Recommendations from "@/components/sections/Recommendations";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Blog />
      <Recommendations />
    </div>
  );
}
