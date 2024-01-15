"use client";

import Image from "next/image";
import Link from "next/link";
import ProfilePic from "../../../assets/images/profile.png";
import Button from "../../ui/Button";
import { FaUser } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";

const blurVariant: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

const Hero = () => {
  return (
    <motion.main
      className="px-2"
      initial="hidden"
      animate="visible"
      variants={blurVariant}
      transition={{ duration: 0.5 }}
    >
      <section
        className="container min-h-[50vh] py-12 px-5 flex flex-col justify-center items-center gap-4
        md:flex-row
        "
      >
        <Image
          src={ProfilePic}
          alt="profile"
          width={0}
          height={0}
          className="sm:w-4/5 md:w-2/5 lg:w-1/2"
        />
        <article
          className="side-text w-full px-2
            md:w-3/5 lg:w-1/2
            "
        >
          <h2
            className="text-2xl capitalize text-center mb-4
                md:text-left md:text-3xl
                lg:text-4xl
                xl:text-6xl"
          >
            your ideas turned into a website with code and design
          </h2>
          <p
            className="text-sm text-center font-normal
                md:text-left xl:text-lg"
          >
            As a skilled Full-Stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects,
            showcasing my expertise in Web Development.
          </p>
          <span
            className="btn-container flexbox-row justify-center gap-[20px] my-6
                md:justify-start
                "
          >
            <Button
              name="Who am I"
              href="/about"
              icon={<FaUser size={20} />}
              className="shadow hover:bg-black hover:text-white"
            />
            <Button
              name="Contact me"
              href="mailto:gabrielanselmo29@gmail.com"
              icon={<FaArrowUpRightFromSquare size={20} />}
              className="contact-me shadow
                    hover:bg-[#25216c]
                    "
            />
          </span>
        </article>
      </section>
    </motion.main>
  );
};
export default Hero;
