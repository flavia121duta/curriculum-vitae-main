import classes from "./Education.module.css";

const education = [
  {
    period: "2023-25",
    degree:
      "Master in Software Engineering at the University of Bucharest, Faculty of Mathematics and Computer Science",
  },
  {
    period: "2020-23",
    degree:
      "Diploma in Mathematics at the University of Bucharest, Faculty of Mathematics and Computer Science",
  },
  {
    period: "2016-20",
    degree:
      'High School National College "Dimitrie Cantemir" from Oneşti, Bacău',
  },
];

const certifications = [
  {
    period: "Sept 2025",
    certification: "Fundamentals of Digital Marketing Google",
  },
  {
    period: "Apr 2023",
    certification:
      'Pedagogical Practice at the Secondary School "Titu Maiorescu", Bucharest',
  },
  {
    period: "Aug 2022",
    certification: "Internship at Deloitte Digital, Bucharest",
  },
  {
    period: "July 2020",
    certification:
      "Certification in Informatics for data modelling the database of an airport",
  },
  {
    period: "July 2020",
    certification:
      "Certification in English for a project about Applied Mathematics",
  },
  {
    period: "Nov 2019",
    certification: "Cisco Certification",
  },
  {
    period: "Oct 2018",
    certification: "ICDL/ECDL (European Computer Driving Licence)",
  },
];

export default function EducationPage() {
  return (
    <>
      <h1 className="title">EDUCATION</h1>

      <section>
        <h2>DEGREES</h2>
        {education.map((item, index) => (
          <div key={index} className={classes.container}>
            <div>{item.period}:</div>
            <div>{item.degree}</div>
          </div>
        ))}
      </section>

      <hr />

      <section>
        <h2>CERTIFICATIONS & TRAININGS</h2>
        {certifications.map((item, index) => (
          <div key={index} className={classes.container}>
            <div>{item.period}:</div>
            <div>{item.certification}</div>
          </div>
        ))}
      </section>
    </>
  );
}
