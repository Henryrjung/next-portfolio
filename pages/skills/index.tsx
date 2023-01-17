import Image from "next/image";
import SkillCard from "../../components/SkillCard";

import htmlPng from "../../public/assets/skills/html.png";
import cssPng from "../../public/assets/skills/css.png";
import javaScriptPng from "../../public/assets/skills/javascript.png";
import reactPng from "../../public/assets/skills/react.png";
import tailwindPng from "../../public/assets/skills/tailwind.png";
import nextPng from "../../public/assets/skills/nextjs.png";
import sassPng from "../../public/assets/skills/sass.png";
import nodePng from "../../public/assets/skills/node.png";
import mongoPng from "../../public/assets/skills/mongo.png";
import awsPng from "../../public/assets/skills/aws.png";

const Skills = () => {
  const images = [
    {
      name: "hmtl",
      img: "/../public/assets/skills/html.png",
    },
    {
      name: "css",
      img: "/../public/assets/skills/css.png",
    },
    {
      name: "javascript",
      img: "/../public/assets/skills/javascript.png",
    },
    {
      name: "react",
      img: "/../public/assets/skills/react.png",
    },
    {
      name: "tailwind",
      img: "/../public/assets/skills/tailwind.png",
    },
    {
      name: "next.js",
      img: "/../public/assets/skills/nextjs.png",
    },
    {
      name: "sass",
      img: "/../public/assets/skills/sass.png",
    },
    {
      name: "node",
      img: "/../public/assets/skills/node.png",
    },
    {
      name: "mongo",
      img: "/../public/assets/skills/mongo.png",
    },
  ];
  return (
    <div id="skills" className="w-full p-2 py-20 lg:h-screen snap-start">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="py-4 text-2xl tracking-widest text-center uppercase text-sky-600">
          Skills
        </p>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 ">
          {/* {images.map((image) => {
            return (
              <SkillCard name={image.name} img={image.img} key={image.name} />
            );
          })} */}
          <SkillCard name="html" img={htmlPng} />
          <SkillCard name="css" img={cssPng} />
          <SkillCard name="javascript" img={javaScriptPng} />
          <SkillCard name="node" img={nodePng} />
          <SkillCard name="tailwind" img={tailwindPng} />
          <SkillCard name="next.js" img={nextPng} />
          <SkillCard name="react" img={reactPng} />
          <SkillCard name="mongo" img={mongoPng} />
          <SkillCard name="sass" img={sassPng} />
          <SkillCard name="aws" img={awsPng} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
