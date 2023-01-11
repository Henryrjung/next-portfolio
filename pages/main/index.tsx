import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center snap-start">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        {/* welcome message */}
        <div>
          <p className="text-sm tracking-widest uppercase text-sky-600">
            Henry Jung | Welcome To My Portfolio
          </p>
          <h1 className="py-4">
            Hi I'm <span className="text-sky-600">Henry</span>
          </h1>
          <h2 className="py-2">Full-Stack Software Engineer</h2>
          <p className="px-4 py-2 uppercase max-w-[70%] m-auto">
            I'm a full stack software engineer working with the latest libraries
            writing clean and mobile first code. I have a full stack certificate
            fom KU University and have been writing code for 3 Years. Feel free
            to connect with me via social media or my email form. I look forward
            to working with you.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
              <FaLinkedin />
            </div>
            <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
              <FaGithub />
            </div>
            <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
              <FaTwitter />
            </div>
            <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
