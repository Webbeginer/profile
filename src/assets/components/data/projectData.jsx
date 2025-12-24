const projectData = {
  title: "Projects",
  subtitle:
    "Explore some of the works I've built from slick frontend.",

  projects: [
    {
      icon: "bx bx-shopping-bag",
      title: "fake store",
      features: [
        " Auth + Database",
        " Firebase",
        " Tailwind",

      ],
      tech: ["Next", "tailwind"],
      demo: "https://kang-geprek.vercel.app/",
      github: "#home"
    },
    {
      icon: "bx bx-bar-chart-alt-2",
      title: "COVID-19 Data Visualization",
     features: [
                "Interactive Dashboard",
                "Case & Spread Analysis",
                "Daily & Regional Trend Visualization",
              ],
      tech: ["Tableau", "Data Analytics"],
      demo: "https://public.tableau.com/app/profile/faizal.tablue/viz/covid-19_17594152074590/Story1?publish=yes", // bisa ganti dengan link demo Tableau kamu
      github: "#"
    }
  ]
};

export default projectData;