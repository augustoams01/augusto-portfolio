import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import BackgroundImage from '@/assets/images/grain.jpg'
import { Card } from "@/components/Card";
import Image from "next/image";
import { Fragment } from "react";

const testimonials = [
  {
    name: "André Luis",
    position: "Chefe de Setor @ Conselho Regional de Enfermagem",
    text: "Alex foi essencial para transformar nosso site em uma ferramenta poderosa de comunicação. Sua atenção aos detalhes e capacidade de entender nossa identidade visual são excepcionais. Estamos extremamente satisfeitos com o resultado!",
    avatar: memojiAvatar1,
  },
  {
    name: "Anna Luyza",
    position: "Anna TI Solutions",
    text: "Trabalhar com Alex foi um grande prazer. Sua expertise em desenvolvimento frontend deu vida às nossas interfaces de forma impecável. O resultado superou completamente nossas expectativas.",
    avatar: memojiAvatar2,
  },
  {
    name: "Iran",
    position: "Líder de Setor @ Conselho Federal de Enfermagem",
    text: "A habilidade do Alex em criar experiências de usuário fluidas é incomparável. Desde o lançamento do novo design, observamos um aumento significativo no engajamento. Não poderíamos estar mais felizes.",
    avatar: memojiAvatar3,
  },
  {
    name: "Carla Mendes",
    position: "Chefe de finâncias @ Conselho Regional de enfermagem",
    text: "Alex é um verdadeiro mago do frontend. Ele pegou nosso produto, que era complexo, e o transformou em uma interface intuitiva e envolvente. Já estamos recebendo ótimos feedbacks dos nossos clientes.",
    avatar: memojiAvatar4,
  },
];


export const TestimonialsSection = () => {
  return (

    <div className="py-16">
      <div  className="container">
        <SectionHeader eyebrow="Clientes Felizes" title="O que falam sobre mim" description="Não acredite apenas na minha palavra, veja só o que meus clientes falam do meu trabalho "/>
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, idx) => (
                      <Fragment key={idx}>
                      {testimonials.map((testimonial)=>(
                        <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                          <div className="flex gap-4 items-center">
                            <div className="absolute inset-0 -z-10 opacity-35" style={{backgroundImage: `url(${BackgroundImage.src})`}}></div>
                            <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0"> 
                              <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full"/>
                            </div>
                            <div>
                              <div className="font-semibold">{testimonial.name}</div>
                              <div className="text-sm text-white/40">{testimonial.position}</div>
                            </div>
                          </div>
                          <p className="mt-4">{testimonial.text}</p>
                        </Card>
                      ))}
                      </Fragment>
          ))}

          </div>
        </div>
      </div>
    </div>

  );
};
