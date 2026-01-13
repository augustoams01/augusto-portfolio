import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
  <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>

    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">

      <div className='absolute inset-0 -z-30 opacity-50 bg-cover' style={{backgroundImage: `url(${grainImage.src})`}}></div>

      <div className='hero-circle'></div>
      <div className='hero-circle size-[900px]'></div>
      <div className='hero-circle size-[1080px]'></div>
      <div className='hero-circle size-[1220px]'></div> 

      <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
        <SparkleIcon className="size-8 text-sky-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
        <SparkleIcon className="size-5 text-sky-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='6s'>
        <StarIcon className="size-12 text-sky-300"/>
      </HeroOrbit>

      <HeroOrbit size={580} rotation={230} shouldOrbit orbitDuration='38s' >
        <div className="size-3 rounded-full bg-sky-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={580} rotation={178} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='3s'>
        <SparkleIcon className="size-10 text-sky-300/20"/>
      </HeroOrbit>

      
      <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='42s' shouldSpin spinDuration='6s'> 
        <StarIcon className="size-8 text-sky-300"/>
      </HeroOrbit>

      <HeroOrbit size={710} rotation={143} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='3s'>
        <SparkleIcon className="size-14 text-sky-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={720} rotation={0} shouldOrbit orbitDuration='46s' >
        <div className="size-3 rounded-full bg-sky-300/20"/>
      </HeroOrbit>


      <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='48s'>
        <div className="size-3 rounded-full bg-sky-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='50s' shouldSpin spinDuration='6s'>
        <StarIcon className="size-28 text-sky-300"/>
      </HeroOrbit>

    </div>
    

    <div className="container relative">

      <div className='flex flex-col items-center'>
        <Image src={memojiImage} className='size-[100px] lg:size-[120px] relative top-[10px]' alt='Person behind a leptop'/>
        <div className='bg-gray-950 border border-gray-800 items-center gap-4 px-4 py-1.5 inline-flex rounded-lg'>
          <div className='bg-sky-500 size-2.5 rounded-full relative'>
          <div className='bg-sky-500 absolute inset-0 rounded-full animate-ping-large'>
            
          </div>
          </div>
          
          <div className='text-sm font-medium'>Disponivel para novos projetos</div>
        </div>
      </div>

      <div className='max-w-lg mx-auto lg:max-w-screen-md'>
        <h1 className='font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl'>Projetando sua imaginação de maneira incrivel!</h1>
        <p className='mt-4 text-center text-white/60 md:text-lg'>Sou especializado em transformar designs em aplicações funcionais e de alta perfomance. Vamos conversar sobre seu novo projeto.</p>
      </div>

      <div className='flex flex-col items-center mt-8 gap-4 md:flex-row justify-center'>
        <button className='inline-flex items-center gap-2 border border-white/15  h-12 rounded-xl'>
          <a href="#projects" className='flex items-center gap-2 px-6'>
          <span className='font-semibold'>Explore Meu Trabalho</span>
          <ArrowDown className="size-4"/>
          </a>
        </button>
        <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 rounded-xl'>
          <a href="mailto:augustoams@gmail.com" className='rounded-md h-full px-6 flex items-center gap-2'>
            <span>👋</span>
            <span className='font-semibold'>Vamos Conversar</span>
          </a>
        </button>
      </div>

    </div>

  </div>
  );
};
