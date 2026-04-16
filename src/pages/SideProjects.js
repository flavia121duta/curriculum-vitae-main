import { useState } from "react";
import Button from "../components/UI/Button";
import classes from "./Experience.module.css";
import ProjectCard from "../components/UI/ProjectCard";

import {
  beautySalonImages,
  ecommerceMobilePhonesImages,
  findCafeImages,
  hospitalNetworkImages,
  marketingAgencyImages,
  shoeRevolutionImages,
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
      labels: ["UI/UX Design", "Prototype", "e-Commerce", "Phones"],
    },
    {
      title: "Optime Medical",
      images: hospitalNetworkImages,
      labels: [
        "UI/UX Design",
        "React",
        "TypeScript",
        "Spring Boot",
        "Java",
        "MongoDB",
      ],
    },
    {
      title: "Find Cafe",
      images: findCafeImages,
      labels: ["UI/UX Design", "Prototype", "Coffee", "Map", "Bucharest"],
    },
    {
      title: "Shoe Revolution",
      images: shoeRevolutionImages,
      labels: ["UI/UX Design", "Prototype", "e-Commerce", "Shoes"],
    },
    {
      title: "Marketing Agency",
      images: marketingAgencyImages,
      labels: ["UI/UX Design", "Marketing", "Agency", "Data Analysis"],
    },
    {
      title: "Beauty Salon",
      images: beautySalonImages,
      labels: ["UI/UX Design", "Beauty", "Brutalist Style", "Salon"],
    },
  ],
  "data-analysis": [
    {
      title: "Eurovision",
      images: eurovision,
      labels: ["Power BI", "Visualization"],
    },
    {
      title: "Mystery Shopper",
      images: misteryShopper,
      labels: ["Power BI", "Visualization"],
    },
    {
      title: "UK Employment Rate",
      images: ukEmploymentRate,
      labels: ["Tableau", "Dashboard"],
    },
    {
      title: "Burden of Disease",
      images: burdenOfDisease,
      labels: ["Tableau", "Visualization"],
    },
    {
      title: "HR Dashboard",
      images: hrDashboard,
      labels: ["Tableau", "Dashboard"],
    },
    {
      title: "Superstore Sales",
      images: superstoreSales,
      labels: ["Tableau", "Sales"],
    },
    {
      title: "Hollywood Films",
      images: hollywoodProfitableFilms,
      labels: ["Tableau", "Analysis"],
    },
    { title: "Earthquakes", images: earthQuakes, labels: ["Tableau", "Map"] },
    {
      title: "Netflix",
      images: netflixMoviesAndShows,
      labels: ["Tableau", "TV Shows"],
    },
  ],
};

export default function SideProjectsPage() {
  const [category, setCategory] = useState("ui-ux");

  const selectedProjects = PROJECTS_DATA[category];

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className={classes.pageContainer}>
      <h1 className="title">SIDE PROJECTS</h1>
      <p className={classes.description}>
        Here are some of the projects I've been working on, from user-centered
        app prototypes to hands-on development work. Each one reflects a unique
        challenge and a creative solution, whether it's refining the user
        experience, exploring design systems, or building interactive
        interfaces. Dive in to see the tools I used and the thought process
        behind each project.
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

      <div className={classes.projectsGrid}>
        {selectedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
