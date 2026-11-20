import Magnifier from "@/components/ui/Magnifier";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Reveal from "@/components/ui/Reveal";

const Copy = () => (
  <div className="px-[8%] py-[9%]">
    <h2 className="font-title text-[clamp(3.5rem,7vw,6rem)] italic leading-none text-[#A8623F]">Sobre mí</h2>
    <p className="font-body mt-10 text-lg leading-[1.9]">
      Soy una persona curiosa y con muchos intereses diferentes. Me encanta cocinar y hacer equitación, y tengo un cariño especial por la historia y todo lo que tiene que ver con el pasado. También me interesa mucho la mitología griega y todo lo relacionado con las civilizaciones antiguas. De hecho, todavía estoy decidiendo si en el futuro quiero estudiar{" "}
      <em className="text-[#A8623F]">Historia o Arqueología</em>, que son dos áreas que me apasionan.
    </p>
    <p className="font-body mt-6 text-lg leading-[1.9]">
      Actualmente voy a ORT Belgrano, donde estudio en la orientación de Tecnología de la Información y la Comunicación (TIC). Me gusta aprender cosas nuevas, descubrir temas que me interesan y explorar distintas áreas, desde la tecnología hasta la historia. Creo que todos estos intereses forman parte de quién soy y de la manera en la que veo el mundo.
    </p>
  </div>
);

export default function About() {
  return (
    <section id="sobre-mi" className="bg-[var(--brown)] px-[5vw] py-28">
      <div className="grid items-start gap-10 lg:grid-cols-[1.55fr_1fr]">
        <Reveal>
          <Magnifier className="bg-paper shadow-[0_30px_80px_rgba(0,0,0,.45)]">
            <Copy />
          </Magnifier>
        </Reveal>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-5">
            <PhotoSlot src="/sobremi/sobremi1.png" alt="Templo egipcio en un museo" ratio="25/35" />
            <PhotoSlot src="/sobremi/sobremi3.png" alt="Collage de intereses" ratio="25/39" delay={0.2} />
          </div>
          <div className="flex flex-col gap-5 pt-0 lg:pt-0">
            <PhotoSlot src="/sobremi/sobremi2.png" alt="Fachada griega en un museo" ratio="25/28" delay={0.1} />
            <PhotoSlot src="/sobremi/sobremi4.png" alt="Sala de teatro" ratio="25/46" delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  );
}
