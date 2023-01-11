import Image from "next/image";
import SkillCard from "../../components/SkillCard";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 py-20 lg:h-screen snap-start">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="py-4 text-2xl tracking-widest text-center uppercase text-sky-600">
          Skills
        </p>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 ">
          <SkillCard name="html" img="/../public/assets/skills/html.png" />
          <SkillCard name="css" img="/../public/assets/skills/css.png" />
          <SkillCard
            name="javascript"
            img="/../public/assets/skills/javascript.png"
          />
          <SkillCard name="node" img="/../public/assets/skills/node.png" />
          <SkillCard
            name="tailwind"
            img="/../public/assets/skills/tailwind.png"
          />
          <SkillCard name="next.js" img="/../public/assets/skills/nextjs.png" />
          <SkillCard name="react" img="/../public/assets/skills/react.png" />
          <SkillCard name="mongo" img="/../public/assets/skills/mongo.png" />
          <SkillCard name="sass" img="/../public/assets/skills/sass.png" />
          <SkillCard name="aws" img="/../public/assets/skills/aws.png" />
          <SkillCard
            name="material ui"
            img="/../public/assets/skills/materialui.png"
          />
          <SkillCard name="heroku" img="/../public/assets/skills/heroku.png" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
