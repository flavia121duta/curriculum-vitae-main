import classes from "./Experience.module.css";
import { useContext } from "react";
import { LanguageContext } from "../components/hooks/context/LanguageContext";

const content = {
  en: [
    {
      role: "Data Analyst",
      workplace: "MarketVector",
      link: "https://www.marketvector.eu/",
      time: "December 2023 - Present",
      description:
        "I am currently working at a company focused on retail data, where I contribute to projects such as price monitoring and Key Account Data (KAD) reporting. My work involves extracting, processing, and analyzing data to provide insights on market share, trends, and distribution. I primarily use Excel and Power BI to build reports based on two main data streams: FMCG retail data from stores like Kaufland, Mega Image, and Metro and beauty-focused data from retailers such as Sephora, Notino, and Douglas. These analyses help enterprise clients track performance, competition, and pricing strategies.",
    },
    {
      role: "Math teacher",
      workplace: "Centrul de meditații și dezvoltare personală",
      link: "https://www.centruldemeditatii.ro/",
      time: "September 2023 - November 2023",
      description:
        "I worked part-time at a tutoring center, where I taught math every weekend to students in grades 6, 7, 8, and 11. This experience allowed me to work closely with pupils, each with their own learning styles and needs. I focused on making math accessible and engaging by approaching the curriculum with patience and creativity.",
    },
    {
      role: "Pedagogical Practice",
      workplace: 'Secondary School "Titu Maiorescu"',
      link: "https://www.titumaiorescu.ro/",
      time: "November 2022 - May 2023",
      description:
        'I completed my pedagogical practice at "Titu Maiorescu" Secondary School, where I assisted in math classes for grades 5 through 8. During each class, I documented my observations and contributed to various activities such as grading, preparing materials, and teaching lessons. At the end of the practice, I wrote a case study that analyzed a unique teaching situation and how it was effectively addressed.',
    },
    {
      role: "Internship",
      workplace: "Deloitte Digital",
      link: "https://www.deloittedigital.com/",
      time: "July - August 2022",
      description:
        "During my internship, I had the opportunity to deepen my understanding of key computer science concepts, tools, and techniques. The four-week program began with two weeks of theoretical and interactive workshops, where I learned about the technologies used within the company. In the final two weeks, I collaborated on a team project that served as an evaluation of our practical skills. I focused on the front-end development, contributing to tasks of varying complexity and standing out through my problem-solving skills. The project was built using the React framework with JavaScript and CSS for styling.",
    },
  ],
  ro: [
    {
      role: "Analist de date",
      workplace: "MarketVector",
      link: "https://www.marketvector.eu/",
      time: "Decembrie 2023 - Prezent",
      description:
        "În prezent lucrez într-o companie specializată în date de retail, unde contribui la proiecte de monitorizare a prețurilor și raportare Key Account Data (KAD). Activitatea mea presupune extragerea, procesarea și analiza datelor pentru a oferi perspective clare asupra cotei de piață, a tendințelor și a distribuției. Folosesc în principal Excel și Power BI pentru a genera rapoarte bazate pe două fluxuri principale: date de retail FMCG (provenite de la parteneri precum Kaufland, Mega Image și Metro) și date din sectorul beauty (de la retaileri precum Sephora, Notino și Douglas). Aceste analize sprijină clienții de tip enterprise în monitorizarea performanței, a competiției și trasarea strategiilor.",
    },
    {
      role: "Profesor meditator de matematică",
      workplace: "Centrul de meditații și dezvoltare personală",
      link: "https://www.centruldemeditatii.ro/",
      time: "Septembrie 2023 - Noiembrie 2023",
      description:
        "Am lucrat part-time în cadrul unui centru educațional, unde lucram în timpul weekend-ului și dădeam meditații la matematică elevilor din clasele VI, VII, VIII și XI. Această experiență mi-a oferit ocazia de a lucra îndeaproape cu elevii, adaptându-mă stilului și nevoilor de învățare ale fiecăruia. Obiectivul meu a fost să fac matematica mai accesibilă și mai atractivă, abordând programa școlară cu multă răbdare și creativitate.",
    },
    {
      role: "Practică pedagogică",
      workplace: 'Școala Gimnazială "Titu Maiorescu"',
      link: "https://www.titumaiorescu.ro/",
      time: "Noiembrie 2022 - Mai 2023",
      description:
        "Mi-am desfășurat practica pedagogică la Școala Gimnazială „Titu Maiorescu”, unde am asistat la orele de matematică pentru clasele V-VIII. Pe parcursul fiecărei ore, am documentat activitatea de la clasă și am contribuit la diverse activități, precum corectarea lucrărilor, pregătirea materialelor didactice și susținerea propriu-zisă a lecțiilor. La finalul stagiului, am elaborat un studiu de caz în care am analizat o situație didactică specifică și modul eficient în care aceasta a fost gestionată.",
    },
    {
      role: "Internship",
      workplace: "Deloitte Digital",
      link: "https://www.deloittedigital.com/",
      time: "Iulie - August 2022",
      description:
        "În timpul internship-ului am avut oportunitatea de a-mi aprofunda cunoștințele despre concepte, instrumente și tehnici fundamentale din domeniul informaticii. Programul de patru săptămâni a debutat cu două săptămâni de workshop-uri teoretice și interactive, axate pe tehnologiile utilizate în cadrul companiei. În a doua jumătate am colaborat la un proiect de echipă ce a servit drept evaluare a competențelor noastre practice. M-am concentrat pe partea de front-end, contribuind la sarcini cu grade diferite de complexitate și remarcându-mă prin abilitățile de problem-solving. Proiectul a fost dezvoltat folosind framework-ul React, alături de JavaScript și CSS pentru stilizare.",
    },
  ],
};

export default function ExperiencePage() {
  const { language } = useContext(LanguageContext);
  const activeContent = content[language];

  return (
    <>
      <h1 className="title">
        {language === "en" ? "EXPERIENCE" : "EXPERIENȚĂ"}
      </h1>

      {activeContent.map((exp, index) => (
        <section key={index} className={classes.experienceSection}>
          <h2>
            {exp.role} {language === "en" ? "at" : "la"}{" "}
            <a
              href={exp.link}
              target="_blank"
              rel="noreferrer"
              className={classes.workplaceLink}
            >
              {exp.workplace}
            </a>
          </h2>
          <div className={classes.time}>{exp.time}:</div>
          <p>{exp.description}</p>
        </section>
      ))}
    </>
  );
}
