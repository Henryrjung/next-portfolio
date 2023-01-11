import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center w-full p-2 py-16 md:h-screen snap-start"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="tracking-widest uppercase text-sky-600">
            Henry Jung | He/Him
          </p>
          <h2 className="py-4 uppercase border-b border-black">About Me</h2>
          <p className="py-2 uppercase">
            I'm a full stack software engineer working with the latest libraries
            writing clean and mobile first code. I have a full stack certificate
            fom KU University and have been writing code for 3 Years. Feel free
            to connect with me via social media or my email form. I look forward
            to working with you.
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl rounded-xl shadow-gray-400 hover:scale-105">
          <Image
            src="/../public/assets/about.png"
            alt="/"
            width="400"
            height="200"
            className="bg-gray-300 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
