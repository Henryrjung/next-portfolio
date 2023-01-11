import Image from "next/image";
import Link from "next/link";
import Placeholder from "../../public/assets/placeholder2.jpg";
import ProjectCard from "../../components/ProjectCard";

const Works = () => {
  return (
    <div id="works" className="w-full p-10">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="py-2 text-2xl tracking-widest text-center uppercase text-sky-600">
          projects
        </p>
        <div className="grid gap-8 py-4 md:grid-cols-2">
          <ProjectCard
            title="project"
            background={Placeholder}
            url="/"
            type="React JS"
          />
          <ProjectCard
            title="project"
            background={Placeholder}
            url="/"
            type="React JS"
          />
          <ProjectCard
            title="project"
            background={Placeholder}
            url="/"
            type="React JS"
          />
          <ProjectCard
            title="project"
            background={Placeholder}
            url="/"
            type="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
