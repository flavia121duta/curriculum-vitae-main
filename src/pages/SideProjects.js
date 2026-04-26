import { useState, useContext } from "react";
import { LanguageContext } from "../components/hooks/context/LanguageContext";
import Button from "../components/UI/Button";
import classes from "./SideProjects.module.css";
import ProjectCard from "../components/UI/ProjectCard";
import ModalProject from "./ModalProject";

import {
  beautySalonImages,
  ecommerceMobilePhonesImages,
  findCafeImages,
  hospitalNetworkImages,
  marketingAgencyImages,
  shoeRevolutionImages,
  beautyProductsShop,
  eurovision,
  misteryShopper,
  ukEmploymentRate,
  burdenOfDisease,
  hrDashboard,
  superstoreSales,
  hollywoodProfitableFilms,
  earthQuakes,
  netflixMoviesAndShows,
} from "./experienceImages";

const PROJECTS_DATA = {
  "ui-ux": [
    {
      title: "Phone Verse",
      images: ecommerceMobilePhonesImages,
      labels: ["UI/UX Design", "Figma", "Prototype", "e-Commerce", "User Flow"],
      description: {
        en: "A comprehensive e-commerce platform designed for tech enthusiasts. The project covers the entire user journey, from a dynamic homepage with the latest offers to a streamlined checkout process and personalized user profiles.",
        ro: "O platformă e-commerce completă, creată pentru pasionații de tehnologie. Proiectul acoperă întregul parcurs al utilizatorului: de la un homepage dinamic cu cele mai noi oferte, până la procesul de finalizare a comenzii și profilul personalizat al clientului.",
      },
    },
    {
      title: "Optime Medical",
      images: hospitalNetworkImages,
      labels: [
        "Fullstack",
        "UI/UX Design",
        "React",
        "TypeScript",
        "Spring Boot",
        "2 databases",
      ],
      description: {
        en: "My Master's thesis project: a complex system for a private hospital network. Beyond a friendly interface for patient appointments, it includes advanced features like standard diagnostic reporting and real-time ambulance tracking.",
        ro: "Proiectul meu de disertație: un sistem complex pentru o rețea de spitale private. Pe lângă interfața intuitivă pentru programări, aplicația include funcționalități avansate precum generarea rapoartelor cu diagnostice și urmărirea în timp real a ambulanțelor.",
      },
    },
    {
      title: "Shoe Revolution",
      images: shoeRevolutionImages,
      labels: [
        "UI/UX Design",
        "Visual Storytelling",
        "High-Fidelity Prototype",
        "Fashion",
      ],
      description: {
        en: "A prototype focused on dynamism and visual impact. I explored how a bold hero section and a clean layout can turn a simple purchase into an engaging experience that captures the user's attention through a 'WOW' effect.",
        ro: "Un prototip axat pe dinamism și impact vizual. Am explorat modul în care un hero-section îndrăzneț și un layout aerisit pot transforma o simplă achiziție într-o experiență captivantă, menită să ofere utilizatorului un efect de tip 'WOW'.",
      },
    },
    {
      title: "Beauty Salon",
      images: beautySalonImages,
      labels: [
        "Brutalist Style",
        "UI/UX Design",
        "Typography",
        "Brand Identity",
      ],
      description: {
        en: "A design concept based on the brutalist style, breaking away from traditional beauty industry aesthetics. It is a bold mix of raw structure and elegance, designed to give the brand a strong and memorable visual identity.",
        ro: "Un concept de design bazat pe stilul brutalist, care iese din tiparele estetice clasice ale industriei de beauty. Este un mix curajos între structură și eleganță, menit să ofere brandului o identitate vizuală puternică și memorabilă.",
      },
    },
    {
      title: "Cosmetics Store",
      images: beautyProductsShop,
      labels: [
        "Minimalism",
        "UI/UX Design",
        "Single Page Design",
        "User Centric",
      ],
      description: {
        en: "One of my first UI designs, focused on a minimalist one-page structure for a niche cosmetics shop. The goal was to eliminate friction, allowing customers to find and purchase products in just a few seconds.",
        ro: "Unul dintre primele mele proiecte de UI, axat pe o structură minimalistă de tip 'one-page' pentru un magazin de cosmetice. Scopul a fost eliminarea barierelor vizuale, permițând clientului să găsească ceea ce caută în doar câteva secunde.",
      },
    },
    {
      title: "Marketing Agency",
      images: marketingAgencyImages,
      labels: [
        "Corporate Redesign",
        "UI/UX Design",
        "Data-Driven Design",
        "B2B",
      ],
      description: {
        en: "A website redesign for a market research agency, inspired by my current professional environment. The new design modernizes the user experience with an impactful hero section, a clear service portfolio, and a functional contact area.",
        ro: "Un redesign pentru site-ul unei agenții de cercetare de piață, inspirat de actualul meu mediu profesional. Noul design modernizează experiența utilizatorului prin secțiuni de impact, un portofoliu clar de servicii și o zonă de contact funcțională.",
      },
    },
    {
      title: "Find Cafe",
      images: findCafeImages,
      labels: ["Mobile App", "User Roles", "Geolocation", "B2B/B2C"],
      description: {
        en: "A mobile app with dual interfaces: one for customers seeking the perfect coffee spot in Bucharest with real-time navigation, and another for managers to promote their business and monitor performance statistics.",
        ro: "O aplicație mobilă cu interfețe duble: una pentru clienții care caută cafeneaua perfectă în București cu navigație în timp real, și alta pentru manageri, care își pot promova afacerea și monitoriza statisticile de performanță.",
      },
    },
  ],
  "data-analysis": [
    {
      title: "Eurovision",
      images: eurovision,
      labels: [
        "Power BI",
        "Data Visualization",
        "Historical Analysis",
        "Geopolitics",
      ],
      description: {
        en: "A visual deep dive into decades of Eurovision scores, exploring the intersection of music and geopolitics. The interactive dashboard reveals voting patterns and unexpected connections between participating countries.",
        ro: "O incursiune vizuală în decenii de punctaje Eurovision, explorând intersecția dintre muzică și geopolitică. Dashboard-ul interactiv dezvăluie tipare de vot și conexiuni neașteptate între țările participante.",
      },
    },
    {
      title: "Earthquakes",
      images: earthQuakes,
      labels: ["Tableau", "Geospatial Analysis", "Mapping", "Public Safety"],
      description: {
        en: "Analysis of 40 years of seismic data, highlighting how tectonic plates dictate global earthquake hotspots. It features an interesting look at high-magnitude offshore events that often go unnoticed by the general public.",
        ro: "O analiză a datelor seismice pe o perioadă de 40 de ani, evidențiind modul în care plăcile tectonice dictează punctele fierbinți ale lumii. Include o perspectivă interesantă asupra cutremurelor submarine de mare magnitudine.",
      },
    },
    {
      title: "Mystery Shopper",
      images: misteryShopper,
      labels: [
        "Power BI",
        "Market Research",
        "Pharma Industry",
        "Retail Analytics",
      ],
      description: {
        en: "A detailed report on a Mystery Shopper campaign across 1,000+ pharmacies in Romania. The analysis tracks the recommendation rate of a specific product, providing insights into pharmacist behavior and market share.",
        ro: "Raport detaliat al unei campanii de Mystery Shopper în peste 1.000 de farmacii din România. Analiza urmărește rata de recomandare a unui produs specific, oferind insight-uri despre comportamentul farmaciștilor și cota de piață.",
      },
    },
    {
      title: "UK Employment Rate",
      images: ukEmploymentRate,
      labels: ["Tableau", "Macroeconomics", "Labor Market", "Social Trends"],
      description: {
        en: "A visual analysis of the UK labor market, making complex economic data accessible. The dashboard highlights regional disparities and historical trends, providing a clear perspective on the country's social context.",
        ro: "O analiză vizuală a pieței muncii din UK, care face datele economice complexe ușor de digerat. Dashboard-ul evidențiază disparitățile regionale și evoluția istorică, oferind o perspectivă clară asupra contextului social.",
      },
    },
    {
      title: "Burden of Disease",
      images: burdenOfDisease,
      labels: [
        "Tableau",
        "Global Health",
        "Demographics",
        "Healthcare Analysis",
      ],
      description: {
        en: "An exploration of global mortality rates, highlighting the correlation between economic development and public health. The study focuses on vulnerable demographics, including newborns and seniors, across different regions.",
        ro: "O explorare a ratelor de mortalitate la nivel global, evidențiind corelația dintre dezvoltarea economică și sănătatea publică. Studiul se concentrează pe segmentele vulnerabile, precum nou-născuții și seniorii.",
      },
    },
    {
      title: "HR Dashboard",
      images: hrDashboard,
      labels: [
        "Tableau",
        "People Analytics",
        "Retention Strategy",
        "D&I Analysis",
      ],
      description: {
        en: "A multi-layered HR analysis for a US corporation, focusing on employee retention and diversity. It explores the correlation between education and income, while providing insights for building a more inclusive workplace.",
        ro: "O analiză HR complexă pentru o corporație americană, axată pe retenția angajaților și diversitate. Explorează corelația dintre educație și venituri, oferind totodată insight-uri pentru construirea unui mediu de lucru incluziv.",
      },
    },
    {
      title: "Superstore Sales",
      images: superstoreSales,
      labels: ["Tableau", "Sales Intelligence", "Forecasting", "Profitability"],
      description: {
        en: "A classic sales performance analysis featuring revenue forecasting. The dashboard identifies regional profit leaks and analyzes product categories to understand the underlying causes of negative margins.",
        ro: "O analiză clasică a performanței vânzărilor, incluzând previziuni ale veniturilor. Dashboard-ul identifică pierderile de profit la nivel regional și analizează categoriile de produse pentru a înțelege cauzele marjelor negative.",
      },
    },
    {
      title: "Hollywood Most Profitable Films",
      images: hollywoodProfitableFilms,
      labels: [
        "Tableau",
        "Entertainment Industry",
        "Correlation Study",
        "Trend Analysis",
      ],
      description: {
        en: "A visual summary of movie studio profitability and genre trends. The analysis includes a correlation study between audience reception and critical acclaim, revealing how 'Rotten Tomatoes' scores impact financial success.",
        ro: "Un sumar vizual al profitabilității studiourilor de film și al tendințelor pe genuri. Analiza include un studiu de corelație între recepția publicului și opinia criticilor, relevând impactul notelor asupra succesului financiar.",
      },
    },
    {
      title: "Netflix Deep Dive",
      images: netflixMoviesAndShows,
      labels: ["Tableau", "Content Strategy", "Streaming Data", "Search UX"],
      description: {
        en: "A comparative study of movies vs. TV shows on Netflix. The dashboard highlights content trends, such as average durations and season counts, and features a dynamic search tool for actor-specific filmographies.",
        ro: "Un studiu comparativ între filmele și serialele de pe Netflix. Dashboard-ul evidențiază tendințele de conținut, cum ar fi durata medie și numărul de sezoane, și include o funcție de căutare dinamică pentru actori.",
      },
    },
  ],
};

const pageDescription = {
  en: "Here are some of the projects I've been working on, from user-centered app prototypes to hands-on development work. Each one reflects a unique challenge and a creative solution, whether it's refining the user experience, exploring design systems, or building interactive interfaces. Dive in to see the tools I used and the thought process behind each project.",
  ro: "Iată câteva dintre proiectele la care am lucrat, de la prototipuri de aplicații centrate pe utilizator până la implementări tehnice propriu-zise. Fiecare dintre acestea reflectă o provocare unică și o soluție creativă, fie că a fost vorba despre optimizarea experienței utilizatorului (UX), explorarea sistemelor de design sau construirea unor interfețe interactive. Răsfoiește câteva dintr ele pentru a descoperi instrumentele pe care le-am folosit și raționamentul din spatele fiecăruia.",
};

export default function SideProjectsPage() {
  const [category, setCategory] = useState("ui-ux");

  const [selectedProject, setSelectedProject] = useState(null);
  const selectedProjects = PROJECTS_DATA[category];

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const { language } = useContext(LanguageContext);

  return (
    <div className={classes.pageContainer}>
      {/* afisarea modalului */}
      {selectedProject && (
        <div
          className={classes.backdrop}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={classes.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={classes.closeBtn}
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <ModalProject project={selectedProject} />
          </div>
        </div>
      )}
      <h1 className="title">
        {language === "en" ? "SIDE PROJECTS" : "PROIECTE PERSONALE"}
      </h1>
      <p className={classes["projects-description"]}>
        {language === "en" ? pageDescription["en"] : pageDescription["ro"]}
      </p>

      <div className={classes.filterButtons}>
        <Button
          type={category === "ui-ux" ? "primary" : "secondary"}
          text="UI/UX Design"
          onClick={() => handleCategoryChange("ui-ux")}
        />
        <Button
          type={category === "data-analysis" ? "primary" : "secondary"}
          text="Data Analysis"
          onClick={() => handleCategoryChange("data-analysis")}
        />
      </div>

      <div className={`${classes["projects-grid"]}`}>
        {selectedProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onSelect={() => setSelectedProject(project)}
          />
        ))}
      </div>
    </div>
  );
}
