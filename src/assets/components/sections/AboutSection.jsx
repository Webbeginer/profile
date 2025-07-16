import LayoutSection from "../layouts/layoutSection/LayoutSection"
import aboutData from "../data/aboutData";

export default function AboutSection(){
    return (
        <>
            <LayoutSection id="about">
                    <div data-aos="fade-up" className="text-center space-y-4" >
                        <h4 className="text-3xl lg:text-4xl font-bold uppercase text-slate-800 dark:text-white">
                        {aboutData.title}
                        </h4>
                        <p className="text-base lg:text-2xl text-slate-500 dark:text-slate-300 px-6">
                        {aboutData.subtitle}
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col lg:flex-row gap-10 px-6">
                        {/* Kiri: Who Am I */}
                        <div className="lg:w-1/2 space-y-4">
                        <h5 data-aos="fade-left" className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-white">
                            Who am I
                        </h5>
                        <p data-aos="fade-left" className="text-base lg:text-xl text-slate-700 dark:text-slate-300">
                            {aboutData.aboutNarrative.whoAmI.text}
                        </p>
                        </div>

                        {/* Kanan: Sosial Media */}
                        <div className="lg:w-1/2 space-y-4">
                        <h5 data-aos="fade-right" className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-white">
                            My Social Media
                        </h5>
                        <p data-aos="fade-right" className="text-base lg:text-xl text-slate-700 dark:text-slate-300">
                            {aboutData.aboutNarrative.medSos.text}
                        </p>

                        <div data-aos= "fade-right" className="flex gap-4 flex-wrap">
                            {aboutData.aboutNarrative.medSos.icons.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 lg:w-14 lg:h-14 text-xl lg:text-3xl bg-gray-800 dark:bg-slate-600 text-white rounded-full flex items-center justify-center shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:opacity-90"
                            >
                                <i className={item.icon}></i>
                            </a>
                            ))}
                        </div>
                        </div>
                    </div>

                    {/* Biodata */}
                    <div data-aos="fade-up" className="mt-10 px-6">
                        <h5 className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-white mb-4">
                        Personal Info:
                        </h5>
                        <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                        {aboutData.biodata.map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                            <div className="h-12 w-12 lg:h-16 lg:w-16 flex justify-center items-center rounded-full border shadow text-2xl text-slate-800 dark:text-white bg-white dark:bg-slate-800">
                                <i className={item.icon}></i>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 lg:text-xl">
                                <span className="font-semibold">{item.label}:</span> {item.value}
                            </p>
                            </div>
                        ))}
                        </div>
                    </div>
            </LayoutSection>
   
        </>
    )
};
