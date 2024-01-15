"use client";

import Portfolio from "@/components/layout/Portfolio";
import { motion, Variants } from "framer-motion";

const blurVariant: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

const Projects = () => {
  return (
    <motion.section
      className="px-2"
      initial="hidden"
      animate="visible"
      variants={blurVariant}
      transition={{ duration: 0.5 }}
    >
      <Portfolio />
    </motion.section>
  );
};
export default Projects;
