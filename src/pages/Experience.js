import classes from "./Experience.module.css";

export default function ExperiencePage() {
  return (
    <>
      <h1 className="title">EXPERIENCE</h1>

      <section>
        <h2>
          Data Analyst at{" "}
          <a
            href="https://www.marketvector.eu/"
            target="_blank"
            rel="noreferrer"
          >
            MarketVector
          </a>
        </h2>
        <div className={classes.container}></div>
        <div>Dec2023 - Present:</div>
        <p>
          I am currently working at a company focused on retail data, where I
          contribute to projects such as price monitoring and Key Account Data
          (KAD) reporting. My work involves extracting, processing, and
          analyzing data to provide insights on market share, trends, and
          distribution. I primarily use Excel and Power BI to build reports
          based on two main data streams: FMCG retail data from stores like
          Kaufland, Mega Image, and Metro and beauty-focused data from retailers
          such as Sephora, Notino, and Douglas. These analyses help enterprise
          clients track performance, competition, and pricing strategies.
        </p>
      </section>

      <section>
        <h2>
          Math teacher at{" "}
          <a
            href="https://www.centruldemeditatii.ro/"
            target="_blank"
            rel="noreferrer"
          >
            Centrul de meditații și dezvoltare personală
          </a>
        </h2>
        <div>2020 - 2023:</div>
        <p>
          I worked part-time at a tutoring center, where I taught math every
          weekend to students in grades 6, 7, 8, and 11. This experience allowed
          me to work closely with pupils, each with their own learning styles
          and needs. I focused on making math accessible and engaging by
          approaching the curriculum with patience and creativity.
        </p>
      </section>

      <section>
        <h2>
          Pedagogical Practice at the{" "}
          <a
            href="https://www.titumaiorescu.ro/"
            target="_blank"
            rel="noreferrer"
          >
            Secondary School "Titu Maiorescu"
          </a>
        </h2>
        <p>
          I completed my pedagogical practice at "Titu Maiorescu" Secondary
          School, where I assisted in math classes for grades 5 through 8.
          During each class, I documented my observations and contributed to
          various activities such as grading, preparing materials, and teaching
          lessons. At the end of the practice, I wrote a case study that
          analyzed a unique teaching situation and how it was effectively
          addressed.
        </p>
      </section>

      <section>
        <h2>
          Internship at{" "}
          <a
            href="https://www.deloittedigital.com/"
            target="_blank"
            rel="noreferrer"
          >
            Deloitte Digital
          </a>
        </h2>
        <div>July - August 2022:</div>
        <p>
          During my internship, I had the opportunity to deepen my understanding
          of key computer science concepts, tools, and techniques. The four-week
          program began with two weeks of theoretical and interactive workshops,
          where I learned about the technologies used within the company. In the
          final two weeks, I collaborated on a team project that served as an
          evaluation of our practical skills. I focused on the front-end
          development, contributing to tasks of varying complexity and standing
          out through my problem-solving skills. The project was built using the
          React framework with JavaScript and CSS for styling.
        </p>
      </section>
    </>
  );
}
