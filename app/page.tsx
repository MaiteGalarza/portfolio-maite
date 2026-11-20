import Providers from "@/components/ui/Providers";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Animals from "@/components/sections/Animals";
import Equitacion from "@/components/sections/Equitacion";
import Hunda from "@/components/sections/Hunda";
import NextStage from "@/components/sections/NextStage";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <Providers>
      <main>
        <Hero />
        <About />
        <Animals />
        <Equitacion />
        <Hunda />
        <NextStage />
        <Contact />
      </main>
    </Providers>
  );
}
