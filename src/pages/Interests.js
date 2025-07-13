import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

export default function InterestsPage() {
  return (
    <>
      <h1 className="title">INTERESTS</h1>

      <p>
        In my free time, I find it delightful to write code and read. Writing
        code has been one of my passions since high school. I love the challenge
        of solving complex problems and creating something from scratch. Also
        for me reading fiction is a wonderful way to escape into different
        worlds and explore new ideas.
      </p>

      <p>
        I'm passionate about puzzles, finding joy in their intricate challenges.
        Solving them is my way of unwinding and sharpening my problem-solving
        skills, offering a delightful escape into a world of mystery and
        satisfaction.
      </p>

      <p>
        Other hobby is web design and I spent a large amount of time looking
        at tutorials and designing my projects. It allows me to express my ideas
        visually and create something that can be useful and helpful for me and
        for others. I find it fulfilling and enjoyable!
      </p>

      <Link to="/interests/gallery">
        <Button text="Go to Gallery" />
      </Link>
    </>
  );
}
