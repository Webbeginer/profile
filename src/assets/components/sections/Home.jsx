import LayoutSection from "../layouts/layoutSection/LayoutSection"
import homeData from "../data/homeData";
import { Typewriter } from "react-simple-typewriter";
import Lanyard from "../bits/Lanyard/Lanyard";


const HomeSection= ()=>{
    return(
        <>
           <LayoutSection id="home" >
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-screen overflow-x-hidden px-6 gap-10">
                    {/* Kiri: Teks */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left gap-4 -mt-[50px]">
                    <h4 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white font-roboto">
                        Hi, Faizal Tanjoeng 👋
                    </h4>
                    <p className="text-xl lg:text-3xl text-slate-500 dark:text-slate-300">
                        <Typewriter
                        words={homeData.typingTexts}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={70}
                        delaySpeed={1500}
                        />
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 lg:text-xl">
                        {homeData.description}
                    </p>
                    <a
                        className="mt-2 h-12 w-44 border border-slate-800 dark:border-white text-slate-800 dark:text-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:bg-slate-800 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-all duration-300"
                        href={homeData.button.href}
                    >
                        {homeData.button.label}
                    </a>
                    </div>

                    {/* Kanan: Card (kosong, bisa isi ChromaGrid atau gambar) */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                    <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
                    </div>
                </div>
            </LayoutSection>

        </>
    )
}
export default HomeSection;
