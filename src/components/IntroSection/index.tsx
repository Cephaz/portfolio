import MemojiSvg from '../../assets/memoji.svg'
import {
  SiRubyonrails,
  SiNodedotjs,
  SiReact,
  SiLinkedin,
  SiGithub
} from "react-icons/si";

const IntroSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center max-w-screen-lg mx-auto" id="introsection">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <div className="flex flex-col">
          <p className="md:text-7xl text-5xl tracking-tight mb-4">
            👋 JE M'APPELLE<br/>
            <span className="pl-18 text-primary-500 md:pl-28">PIERRE ZHOU</span>
          </p>

          <div className="flex flex-row justify-center items-center gap-6 my-4 md:mb-0">
            <a href="https://drive.google.com/uc?export=download&id=1hMtxFqhJnZtJp2HEASyJVJDBf96zvd61" download>
              <button className="z-10 cursor-pointer font-bold md:w-auto p-4 border border-primary-400 rounded-xl">
                Download CV
              </button>
            </a>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-primary-400 z-20">
              <a href="https://github.com/Cephaz" target="_blank">
                <SiGithub/>
              </a>

              <a href="https://www.linkedin.com/in/p-zhou/" target="_blank">
                <SiLinkedin/>
              </a>
            </div>
          </div>
        </div>

        <img src={MemojiSvg} className="w-[300px] md:w-[450px]" />
      </div>

      <div className="flex flex-row text-5xl px-12 md:px-0 w-full justify-center items-center py-24">
        <p className="text-text-900 mr-3">Technos principaux</p>
        <SiRubyonrails className="text-red-600 mx-2" />
        <SiNodedotjs className="text-green-500 mx-2" />
        <SiReact className="text-blue-500 mx-2" />
      </div>
    </div>
  )
}

export default IntroSection;
