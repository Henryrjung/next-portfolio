import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, background, type, url }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl group hover:bg-sky-600">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={background}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-widest text-white">{title}</h3>
        <p className="pt-2 pb-4 text-center text-white">{type}</p>
        <Link href={url}>
          <p className="py-3 text-lg font-bold text-center bg-white rounded-lg cursor-pointer text-sky-600">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
