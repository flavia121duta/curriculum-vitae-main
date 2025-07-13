import classes from "./Experience.module.css";
import ProjectCard from "../components/UI/ProjectCard";
import {
  beautySalonImages,
  ecommerceMobilePhonesImages,
  findCafeImages,
  hospitalNetworkImages,
  marketingAgencyImages,
  shoeRevolutionImages,
} from "./experienceImages";


export default function ExperiencePage() {
  const projects = [
    {
      title: "Phone Verse",
      images: ecommerceMobilePhonesImages,
      labels: ["UI/UX Design", "Prototype", "e-Commerce", "Phones"],
    },
    {
      title: "Optime Medical",
      images: hospitalNetworkImages,
      labels: [
        "UI/UX Design", "Production", "Hospital", "Appointment", "x-Ray", "Map", "Microservices",
        "React", "TypeScript", "Spring Boot", "Java", "MongoDB", "Oracle", "Data Warehouse"
      ],
    },
    {
      title: "Find Cafe",
      images: findCafeImages,
      labels: ["UI/UX Design", "Prototype", "Coffee", "Order", "Map", "Bucharest"],
    },
    {
      title: "Shoe Revolution",
      images: shoeRevolutionImages,
      labels: ["UI/UX Design", "Prototype", "e-Commerce", "Shoes"],
    },
    {
      title: "Marketing Agency",
      images: marketingAgencyImages,
      labels: ["UI/UX Design", "Prototype", "Marketing", "Agency", "Data Analysis"],
    },
    {
      title: "Beauty Salon",
      images: beautySalonImages,
      labels: ["UI/UX Design", "Prototype", "Beauty", "Brutalist Style", "Salon", "Marilyn Monroe"],
    },
  ];


  return (
    <div className={classes["long-content"]}>
      <h1 className="title">EXPERIENCE</h1>
      <p>
        Here are some of the projects I've been working on — from user-centered app prototypes 
        to hands-on development work. Each one reflects a unique challenge and a creative solution, 
        whether it's refining the user experience, exploring design systems, or building interactive 
        interfaces. Dive in to see the tools I used and the thought process behind each project.
      </p>

      {
        projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))
       }
    </div>
  );
}