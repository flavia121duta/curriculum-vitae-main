import classes from "./Experience.module.css";
import { useState } from "react";

const experiences = [
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
];

export default function ExperiencePage() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  // calculate whitch items to show
  const startIndex = currentPage * itemsPerPage;
  const selectedExperiences = experiences.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const totalPages = Math.ceil(experiences.length / itemsPerPage);

  const nextPageHandler = () => {
    if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1);
  };

  const prevPageHandler = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  return (
    <>
      <h1 className="title">EXPERIENCE</h1>

      {selectedExperiences.map((exp, index) => (
        <section key={index} className={classes.experienceSection}>
          <h2>
            {exp.role} at{" "}
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

      <div
        className={`pagination ${classes.sliderImage}`}
        style={{ display: "flex" }}
      >
        <button
          onClick={prevPageHandler}
          disabled={currentPage === 0}
          className="chevron"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={nextPageHandler}
          disabled={currentPage === totalPages - 1}
          className="chevron"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
