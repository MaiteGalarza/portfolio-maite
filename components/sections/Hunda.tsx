"use client";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Reveal from "@/components/ui/Reveal";
import Float from "@/components/ui/Float";

export default function Hunda() {
  return (
    <section id="hunda" className="font-hunda relative overflow-hidden bg-hunda pb-28 text-[#F4EEE2]">
      {/* transición suave desde el beige de la pista */}
      <div className="h-56" style={{ background: "linear-gradient(180deg,#C2A880,rgba(194,168,128,0))" }} />

      <div className="grid items-center gap-14 px-[5vw] lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <Reveal><h2 className="text-[clamp(4.5rem,10vw,8rem)] font-semibold leading-none tracking-tighter">hunda.</h2></Reveal>
          <Reveal delay={0.15}>
            <h3 className="mt-6 text-3xl font-medium leading-tight">Diseño y programación<br />de <span className="text-[#35D993]">la web</span></h3>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-lg text-[17px] font-light leading-8 opacity-90">
              Formo parte de Hunda, un proyecto que busca conectar refugios de animales con personas que cuentan con impresoras 3D para crear prótesis para perros que las necesitan. Dentro del proyecto, participo principalmente en el desarrollo frontend de la página web, trabajando en el diseño y la programación de sus distintas secciones y funcionalidades. Es una experiencia que me permite aplicar los conocimientos que aprendo en ORT y, al mismo tiempo, formar parte de una iniciativa que combina dos cosas que me interesan mucho: la tecnología y el bienestar animal.
            </p>
          </Reveal>
        </div>

        <div className="relative flex flex-col gap-10">
          {/* 📷 CAPTURAS → public/images/hunda-landing.png y hunda-dashboard.png */}
          <Float amp={12} duration={7}><PhotoSlot src="/images/hunda-landing.png" alt="Landing de hunda" ratio="39/25" /></Float>
          <Float amp={10} duration={8} delay={1.2} className="w-[78%] self-end"><PhotoSlot src="/images/hunda-dashboard.png" alt="Dashboard de hunda" ratio="30/17" delay={0.2} /></Float>
        </div>
      </div>
    </section>
  );
}
