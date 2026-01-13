import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import config from "../../tailwind.config";

export const Header = () => {
  return(

    <div className="flex justify-around items-center fixed top-3 w-full z-40">
      
      {/* <div className="w-[100px] lg:block md:block sm:hidden">
        <h1 className="text-2xl font-semibold font-serif lg:block md:block sm:hidden">Alex.</h1>
      </div> */}
      
      <div className="flex items-center justify-center">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <a href="#" className="nav-item">Inicio</a>
          <a href="#projects" className="nav-item">Projetos</a>
          <a href="#about" className="nav-item">Sobre</a>
          <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contato</a>
        </nav>
      </div>

         
      {/* <nav className="flex gap-3 p-0.5 lg:flex md:flex  sm:hidden">
        <a href="#" className=""><FaGithub size={25}/></a>
        <a href="#" className=""><FaInstagram size={25}/></a>
        <a href="#" className=""><FaLinkedin size={25}/></a>
      </nav> */}
    </div>
      
  )
;
};
