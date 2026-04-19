import classes from "./Education.module.css";

export default function EducationPage() {
  return (
    <>
      <h1 className="title">EDUCATION</h1>

      <section>
        <h2>DEGREES</h2>
        <div className={classes.container}>
          <div>2023 - 2025:</div>
          <div>
            Master in Software Engineering at the University of Bucharest,{" "}
            <br />
            <a
              href="https://fmi.unibuc.ro/"
              target="_blank"
              rel="noreferrer"
              class="link"
              style={{
                color: "var(--primary-color-purple)",
                textDecoration: "none",
              }}
            >
              Faculty of Mathematics and Computer Science
            </a>{" "}
          </div>

          <div>2020 - 2023:</div>
          <div>
            Diploma in Mathematics at the University of Bucharest, <br />
            <a
              href="https://fmi.unibuc.ro/"
              target="_blank"
              rel="noreferrer"
              class="link"
              style={{ color: "var(--primary-color-purple)" }}
            >
              Faculty of Mathematics and Computer Science
            </a>{" "}
          </div>

          <div>2016 - 2020:</div>
          <div>
            High School{" "}
            <a
              href="https://dcantemir.ro/"
              target="_blank"
              rel="noreferrer"
              class="link"
              style={{ color: "var(--primary-color-purple)" }}
            >
              National College "Dimitrie Cantemir"
            </a>{" "}
            from Oneşti, Bacău
          </div>
        </div>
      </section>

      <section>
        <h2>CERTIFICATIONS & TRAININGS</h2>
        <div className={classes.container}>
          <div>Sept 2025:</div>
          <div>Fundamentals of Digital Marketing Google</div>

          <div>Apr 2023:</div>
          <div>
            Pedagogical Practice at the Secondary School "Titu Maiorescu",
            Bucharest
          </div>

          <div>Aug 2022:</div>
          <div>Internship at Deloitte Digital, Bucharest</div>

          <div>July 2020:</div>
          <div>
            Certification in Informatics for data modelling the database of an
            airport
          </div>

          <div>July 2020:</div>
          <div>
            Certification in English for a project about Applied Mathematics
          </div>

          <div>Nov 2019:</div>
          <div>Cisco Certification</div>

          <div>Oct 2018:</div>
          <div>ICDL/ECDL (European Computer Driving Licence)</div>
        </div>
      </section>
    </>
  );
}
