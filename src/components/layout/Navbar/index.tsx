"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// REACT ICONS IMPORT
import { IoHome } from "react-icons/io5";
import { FaUser, FaFolder } from "react-icons/fa";
import { MdPermContactCalendar, MdMessage } from "react-icons/md";

import "@/styles/globals.css";
import SocialIcons from "../../Icons/SocialIcons";

import Logo from "@/assets/icons/logo-black.png";
import Image from "next/image";

// import {Variants, motion} from "framer-motion"

//Auxiliar NavBar Function
const CustomLinks = ({ href, name }: { href: string; name: string }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center">
      <Link
        href={href}
        className={`transition-default px-2 ${
          pathname === href ? "text-[#25216c]" : ""
        }`}
      >
        {name}
      </Link>
      <span
        className={`h-[2px] bg-[#25216c] rounded-full transition-default ${
          pathname === href ? "w-full" : ""
        }`}
      ></span>
    </div>
  );
};

const Navbar = () => {
  //Hooks
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Auxiliar functions
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header className="w-full h-auto py-4 px-2 sticky top-0 z-10">
      <section className="container flexbox-row justify-between">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={30} height={0} />
        </Link>

        <nav>
          <ul className="max-md:hidden flexbox-row gap-2 text-md">
            <li>
              <CustomLinks href="/" name="Home" />
            </li>
            <li>
              <CustomLinks href="/about" name="About" />
            </li>
            <li>
              <CustomLinks href="/projects" name="Projects" />
            </li>
            <li>
              <CustomLinks href="/contact" name="Contact" />
            </li>
          </ul>
        </nav>

        <span className="max-md:hidden md:block">
          <SocialIcons />
        </span>

        <button
          className="flexbox-col p-1 gap-[4px] md:hidden"
          onClick={handleOpen}
        >
          <div
            className={`${
              isOpen ? "rotate-[135deg] translate-y-2" : ""
            } h-[4px] w-[25px] bg-black rounded-md transition-all`}
          ></div>
          <div
            className={`${
              isOpen ? "opacity-0 rotate-12" : ""
            } h-[4px] w-[25px] bg-black rounded-md transition-all`}
          ></div>
          <div
            className={`${
              isOpen ? "-rotate-[135deg] -translate-y-2" : ""
            } h-[4px] w-[25px] bg-black rounded-md transition-all`}
          ></div>
        </button>

        {/* Side Bar */}
        <nav
          className={`side-bar container flex md:hidden ${
            isOpen ? "flex w-full" : "hidden"
          }`}
        >
          <button
            className="flexbox-col p-1 gap-[4px] md:hidden"
            onClick={handleClose}
          >
            <div
              className={`h-[4px] w-[25px] bg-white rounded-md transition-all rotate-[135deg] `}
            ></div>
            <div
              className={`h-[4px] w-[25px] bg-white rounded-md transition-all -rotate-[135deg] -translate-y-2`}
            ></div>
          </button>

          <ul className="flexbox-col gap-2 transition-default">
            <li
              onClick={handleClose}
              className="flex flex-col items-center gap-2 px-8 py-2"
            >
              <Link href="/">
                <IoHome size={25} />
              </Link>
              <span>Home</span>
            </li>
            <li
              onClick={handleClose}
              className="flex flex-col items-center gap-2 px-8 py-2"
            >
              <Link href="/about">
                <FaUser size={25} />
              </Link>
              <span>About</span>
            </li>
            <li
              onClick={handleClose}
              className="flex flex-col items-center gap-2 px-8 py-2"
            >
              <Link href="/projects">
                <FaFolder size={25} />
              </Link>
              <span>Projects</span>
            </li>
            <li
              onClick={handleClose}
              className="flex flex-col items-center gap-2 px-8 py-2"
            >
              <Link href="/contact">
                <MdMessage size={25} />
              </Link>
              <span>Contact</span>
            </li>
          </ul>
          <span>
            <SocialIcons />
          </span>
        </nav>
      </section>
    </header>
  );
};
export default Navbar;
