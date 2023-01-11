import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen snap-start">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="py-2 text-3xl tracking-widest text-center uppercase text-sky-600">
          contact
        </p>
        <p className="py-2 tracking-widest text-center uppercase">
          Henry Jung | Full-Stack Software Engineer
        </p>
        <p className="py-2 tracking-widest text-center uppercase text-1xl">
          &apos; available for freelance or full time positions. &apos;
          available mon-fri 9-5pm
        </p>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <p className="py-2 tracking-widest uppercase">
                  Henry Jung | Full-Stack Software Engineer
                </p>
                <p className="tracking-widest uppercase text-1xl">
                  I'm available for freelance or full time positions. I'm
                  available mon-fri 9-5pm
                </p>
              </div>
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
          </div> */}
          <div className="w-full h-auto col-span-3 bg-gray-300 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    className="p-3 border-2 border-gray-300 rounded-lg"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-white">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
