import LayoutSection from "../layouts/layoutSection/LayoutSection"
import projectData from "../data/projectData";
const ProjectSection= ()=>{
    return (
        <>
            <LayoutSection id="project">
                    <div className="text-center px-4">
                        <h4 data-aos="fade-up" className="font-bold text-3xl lg:text-4xl uppercase text-slate-800 dark:text-white">
                        {projectData.title}
                        </h4>
                        <p data-aos="fade-up" className="text-slate-500 dark:text-slate-300 text-base mt-2">
                        {projectData.subtitle}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-8 justify-center mt-12 px-4">
                        {projectData.projects.map((item, index) => (
                        <div
                            data-aos="zoom-in"
                            key={index}
                            className="flex flex-col gap-4 w-full max-w-sm bg-white dark:bg-slate-800 rounded-lg shadow-md py-6 px-6 transition-all duration-300"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3">
                            <i className={`${item.icon} text-5xl text-slate-800 dark:text-white`}></i>
                            <span className="text-2xl font-semibold text-slate-800 dark:text-white">
                                {item.title}
                            </span>
                            </div>

                            {/* Features */}
                            <div>
                            <p className="font-bold text-slate-700 dark:text-slate-200 mb-1">Features:</p>
                            <ul className="text-slate-600 dark:text-slate-300 space-y-1 pl-4">
                                {item.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <i className="bx bx-check mt-[2px]"></i>
                                    <span>{feature}</span>
                                </li>
                                ))}
                            </ul>
                            </div>

                            {/* Tools */}
                            <div>
                            <p className="font-bold text-slate-700 dark:text-slate-200 mb-1">Tools:</p>
                            <ul className="text-slate-600 dark:text-slate-300 space-y-1 pl-4">
                                {item.tech.map((tool, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <i className="bx bx-check mt-[2px]"></i>
                                    <span>{tool}</span>
                                </li>
                                ))}
                            </ul>
                            </div>

                            {/* Links */}
                            <div className="flex gap-3 mt-2 flex-wrap">
                            <a
                                href={item.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-12 px-6 rounded-md shadow-md border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white flex items-center justify-center hover:bg-slate-800 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
                            >
                                Demo
                            </a>
                            <a
                                href={item.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-12 px-6 rounded-md shadow-md border bg-slate-800 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center hover:bg-white hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-white transition-all duration-300"
                            >
                                GitHub
                            </a>
                            </div>
                        </div>
                        ))}
                    </div>
</LayoutSection>

        </>
    )
};

export default ProjectSection;