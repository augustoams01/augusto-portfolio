import StarIcon from "@/assets/icons/star.svg"
import { Fragment } from "react";

const words = [
  "Assecível",
  "Seguro",
  "Alta Perfomance",
  "Interativo",
  "Escalavel",
  "Responsivo",
  "Manutenivel",
  "Otimização de Busca",
  "Usável",
  "Confiante"
]

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip" >
  
        <div className="bg-gradient-to-r -mb-10 to-violet-400  from-sky-400 opacity-40  rotate-6 -mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"          >
            <div className="flex flex-none gap-4 py-3 pr-4 animate-move-right [animation-duration:30s]" >
              {...new Array(2).fill(0).map((_, idx2)=> (
                <Fragment key={idx2}>

                {words.map((word) =>(
                  <div key={word} className="inline-flex items-center gap-4">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12"/>
                  </div>
                ))}
               </Fragment>
              ))}

            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r to-violet-400 from-sky-400  -rotate-3 -mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"          >
            <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]" >
              {...new Array(2).fill(0).map((_, idx)=> (
                <Fragment key={idx}>

                {words.map((word) =>(
                  <div key={word} className="inline-flex items-center gap-4">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12"/>
                  </div>
                ))}
               </Fragment>
              ))}

            </div>
          </div>
        </div>

    </div>
  );
};
