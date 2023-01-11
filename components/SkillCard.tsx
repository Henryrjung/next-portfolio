import React from "react";
import Image from "next/image";

const SkillCard = ({ name, img }) => {
  return (
    <div className="p-6 duration-300 ease-in bg-gray-300 shadow-xl rounded-xl hover:scale-105">
      <div className="grid items-center justify-center grid-cols-2 gap-4">
        <div className="m-auto">
          <Image src={img} alt="/" width="64" height="64" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="tracking-widest uppercase">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
