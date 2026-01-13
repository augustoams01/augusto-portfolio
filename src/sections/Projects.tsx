import darkSaasLandingPage from "@/assets/images/annaport.jpg";
import lightSaasLandingPage from "@/assets/images/cafelanding.png";
import aiStartupLandingPage from "@/assets/images/premioprot.jpg";

import Image from "next/image";
import ArrouUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrouwUpRight from "@/assets/icons/arrow-up-right.svg"
import { Card } from "@/components/Card";
import BackgroundImage from "@/assets/images/grain.jpg"
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Anna TI solutions",
    year: "2024",
    title: "Portfólios Modernos",
    results: [
      { title: "Aumento no alcance profissional de 40%" },
      { title: "Responsividae" },
      { title: "Aumento no tráfego mobile" },
    ],
    image: darkSaasLandingPage,
  },
  {
    company: "Natus Café",
    year: "2023",
    title: "Landing Pages Comerciais",
    results: [
      { title: "Aumento em conversão de clientes" },
      { title: "Aumento no trafégo virtual" },
      { title: "UX & UI feito em conjunto com cliente" },
    ],
    image: lightSaasLandingPage,
  },
  {
    company: "página de eventos COREN",
    year: "2025",
    title: "Landing Pages de Eventos",
    results: [
      { title: "aumento no número de inscrissões do evento" },
      { title: "maior tráfego virtual de usuários" },
      { title: "UX e UI feita com acompanhamento do usuário" },
    ],
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader eyebrow="Resultados reais" title="Projetos em destaque" description="Veja como eu transformei conceitos em experiências digitais inesqueciveis"/>
        
        <div className="flex flex-col md:mt-20  gap-20 mt-10">
          {portfolioProjects.map((project, projectIndex) => (
            
            <Card className="px-8 pt-8  md:pt-12 pb-0 md:px-10 lg:pt-16 lg:px-20 sticky"
            style={{
              top: `calc(64px + ${projectIndex * 40}px)`
            }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-sky-300 to-violet-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
              
                
                  <h3 className="font-serif md:mt-5 text-2xl mt-2 md:text-4xl">{project.title}</h3> 
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result)=>(
                      <li key={result.title} className="flex gap-2 md:text-base items-center text-sm text-white/50"> 
                      <CheckCircleIcon className="size-5 md:size-6"/>
                      <span>{result.title}</span>
                      </li>
                    ))}

                                <button  className="text-gray-900 bg-white inline-flex items-center h-12 rounded-xl gap-2 w-max border border-gray-900">
              <a href="mailto:augustoams01@gmail.com" className="flex items-center gap-2  h-full px-6">
               <span className="font-semibold">
                Fale Comigo</span><ArrouUpRightIcon className="size-4"/>
              </a>
              </button>
                  </ul>

                </div>
                <div className="relative">
                    <Image src={project.image} alt={project.title} className="mt-8 -mb-4
                    md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-tl-[28px]"/>
                </div>

              </div>
            </Card>
            
          ))}
        </div>
      </div>
    </section>
  ) 
;
};
