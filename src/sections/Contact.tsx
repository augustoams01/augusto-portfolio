"use client";
import ArrouUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import BgImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-sky-400 to-violet-300 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 bg-cover -z-10"  style={{
            backgroundImage: `url(${BgImage.src})`
          }}></div> 
          <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Vamos criar algo incrível juntos!</h2>
              <p className="text-sm mt-2 md:text-base">Preparado para dar vida ao seu novo projeto? vamos conversar e conectar nossas ideias para alcançar suas metas.</p>
            </div>
            <div>
            <button  className="text-white bg-gray-900 inline-flex items-center h-12 rounded-xl gap-2 w-max border border-gray-900">
              <a href="mailto:augustoams01@gmail.com" className="flex items-center gap-2  h-full px-6">
               <span className="font-semibold">
                Fale Comigo</span><ArrouUpRightIcon className="size-4"/>
              </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
