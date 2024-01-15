"use client";

import Image from "next/image";
import Picture from "../../assets/images/newPic.png";
import Skill from "@/components/ui/Skill";
import Experience from "@/components/layout/Experience";
import Academic from "@/components/layout/Academic";

import { motion, Variants } from "framer-motion";

const blurVariant: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

const About = () => {
  return (
    <motion.div
      className="px-2"
      initial="hidden"
      animate="visible"
      variants={blurVariant}
      transition={{ duration: 0.5 }}
    >
      <section className="container">
        <article
          className="flex flex-col-reverse gap-4 py-2
        md:flex-row lg:w-11/12 lg:m-auto
        "
        >
          <div
            className="flexbox-col gap-4 text-sm text-left font-normal px-2 sm:w-4/5 sm:m-auto
          md:w-1/2 md:text-left md:px-4 xl:text-md
          "
          >
            <h2 className="text-xl text-[#25216c] font-semibold md:text-left">
              ../About
            </h2>
            <p>
              I am Gabriel Anselmo, a passionate and highly skilled front-end
              developer with a deep love for technology. My journey into the
              tech world began during high school when I pursued a technical
              course in Information Technology at IFMA, where I laid the
              foundations for my knowledge. Currently, I am on the path of
              furthering my education in Software Engineering at UNDB, expanding
              my expertise in software development, data science, agile project
              management, and IT governance.
            </p>
            <p>
              Throughout my journey, I had the opportunity to intern at a
              bilingual Canadian company, take on freelancing projects, and
              accumulate a year of valuable experience in web system
              development. My skill set includes quick learning, effective
              problem-solving, agile reasoning, dedication, effort,
              determination, and an innovative approach.
            </p>
            <p>
              I am committed to continuous improvement, staying abreast of the
              latest technological trends, and holding relevant certifications
              such as the Scrum Foundation Professional Certificate,
              demonstrating my dedication to agile project management best
              practices.
            </p>
            <p>
              Beyond my professional endeavors, I am dedicated to expanding my
              language skills. Currently, I am studying French and Spanish to
              enhance communication with a broader audience. My tireless effort
              reflects my commitment to adding value to my services and
              enriching my social experiences.
            </p>
          </div>
          {/* <Image src={Picture} alt="" className="w-4/5 m-auto md:w-1/2"/> */}
        </article>
        {/* <Hr/> */}
        <Skill />
        {/* <Hr/> */}
        <Academic />
        <Experience />
      </section>
    </motion.div>
  );
};
export default About;
