import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/logo.png"
          alt="/"
          width="125"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase duration-300 ease-in hover:border-b hover:border-sky-600">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase duration-300 ease-in hover:border-b hover:border-sky-600">
              <Link href="/about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase duration-300 ease-in hover:border-b hover:border-sky-600">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase duration-300 ease-in hover:border-b hover:border-sky-600">
              <Link href="/works">Works</Link>
            </li>
            <li className="ml-10 text-sm uppercase duration-300 ease-in hover:border-b hover:border-sky-600">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:width-[45%] h-screen bg-slate-200 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Image
                src="/../public/assets/logo.png"
                alt="/"
                width="87"
                height="35"
              />
              <div
                onClick={handleNav}
                className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] md:w-[90$] py-4">
                Henry Jung | Full-Stack Software Engineer
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/" onClick={handleNav}>
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/about" onClick={handleNav}>
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/skills" onClick={handleNav}>
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/works" onClick={handleNav}>
                <li className="py-4 text-sm">Works</li>
              </Link>
              <Link href="/contact" onClick={handleNav}>
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="tracking-widest uppercase">Lets Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  href="https://www.linkedin.com/in/henry-jung-40b46a182/"
                  target="_blank"
                >
                  <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                    <FaLinkedin />
                  </div>
                </Link>
                <Link href="https://github.com/Henryrjung" target="_blank">
                  <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="https://twitter.com/Henrywebdev" target="_blank">
                  <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                    <FaTwitter />
                  </div>
                </Link>
                <Link href="/contact">
                  <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
