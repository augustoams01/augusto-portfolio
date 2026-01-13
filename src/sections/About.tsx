"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import BookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg"
import MapImage from "@/assets/images/map.png";
import SmilingMemoji from "@/assets/images/catmemojiprofile.png";
import { TechIcon } from "@/components/TechIcon";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxitems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: 'Instrumentos',
    emoji: '🎸',
    left: "15%",
    top: "5%",
  },
  {
    title: 'Jogos',
    emoji: '🎮',
    left: "50%",
    top: "18%",
  },
  {
    title: 'Musica',
    emoji:'🎶',
    left: "5%",
    top: "35%",
  },
  {
    title: 'Leitura',
    emoji: '📚',
    left: "24%",
    top: "60%",
  },
  {
    title: 'Fotografia',
    emoji: '📷',
    left: "45%",
    top: "45%",
  }
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">

      <div className="container">
        <SectionHeader eyebrow="Sobre Mim" title="Um pouco do meu mundo" description="Veja mais sobre quem eu sou, o que eu faço e o que me inspira"/>
        <div className="mt-20 flex flex-col gap-6">
          <div className="grid grid-col-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="Leituras" description="veja como os livros moldam minhas ações"/>
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="Livro"/>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader title="Ferramentas" description="explore as tecnologias e ferramentas que eu uso para criar experiências digitais"/>
              <ToolBoxItems items={toolBoxItems} className="-mt-2" itemsWrapperClassName="animate-move-right [animation-duration:30s]"/>
              <ToolBoxItems itemsWrapperClassName="-translate-x-1/2 animate-move-left [animation-duration:30s]" items={toolBoxItems} />
            </Card>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              
              <CardHeader title="Além das Techs"  description="conheça meus hobbies e interesses além do mundo tecnológico" className="px-6 py-6"/>
                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map(hobby => (
                    <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-sky-400 to-violet-400 rounded-full py-1.5 absolute" style={{
                      left: hobby.left,
                      top:hobby.top,
                    }} drag dragConstraints={constraintRef}>
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={MapImage} alt="Imagem mapa" className="w-full h-full object-cover object-left-top"/>
              <div className="absolute size-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-400 to-violet-300 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full">

              </div>
                <div className="flex items-center justify-center mt-3">
                <Image src={SmilingMemoji} alt="Icone" className="size-16"/>
                </div>

              </div>

            </Card>
          </div>


        </div>
      </div>
    </div>
  );
};
