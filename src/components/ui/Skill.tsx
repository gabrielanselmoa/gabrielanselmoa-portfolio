import SkillBlock from "../block/SkillBlock";

import {
  FaCss3Alt,
  FaFlask,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiDjango,
  SiPostgresql,
  SiSpring,
  SiTailwindcss,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandFramer, TbBrandMysql, TbBrandNextjs } from "react-icons/tb";
// import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { LiaJava } from "react-icons/lia";

const Skill = () => {
  return (
    <article className="skill-container py-6">
      <h2 className="mb-6 text-center text-[#25216c] text-xl">../Skills</h2>
      <div
        className="flex flex-col flex-wrap gap-4
        sm:w-4/5 sm:m-auto md:w-full md:flex-row md:justify-center
        "
      >
        <SkillBlock skillName="html" icon={<FaHtml5 size={20} />} />
        <SkillBlock skillName="css" icon={<FaCss3Alt size={20} />} />
        <SkillBlock skillName="sass" icon={<FaSass size={20} />} />
        <SkillBlock skillName="tailwind" icon={<SiTailwindcss size={20} />} />
        <SkillBlock
          skillName="javascript"
          icon={<IoLogoJavascript size={20} />}
        />
        {/* <SkillBlock skillName="django" icon={<SiDjango size={20} />}/> */}
        <SkillBlock skillName="react.js" icon={<FaReact size={20} />} />
        <SkillBlock skillName="next.js" icon={<TbBrandNextjs size={20} />} />
        <SkillBlock
          skillName="framer motion"
          icon={<TbBrandFramer size={20} />}
        />
        <SkillBlock skillName="java" icon={<LiaJava size={20} />} />
        <SkillBlock skillName="spring" icon={<SiSpring size={20} />} />
        <SkillBlock skillName="mysql" icon={<TbBrandMysql size={20} />} />
        <SkillBlock
          skillName="postgresql"
          icon={<BiLogoPostgresql size={20} />}
          />
          {/* <SkillBlock skillName="java" icon={<FaJava size={20} />} /> */}
        {/* <SkillBlock skillName="mysql" icon={<GrMysql size={20} />} /> */}
        {/* <SkillBlock skillName="postgresql" icon={<SiPostgresql size={20} />} /> */}
        {/* <SkillBlock skillName="python" icon={<FaPython size={20} />} /> */}
        <SkillBlock skillName="git" icon={<FaGitAlt size={20} />} />
        <SkillBlock skillName="github" icon={<FaGithub size={20} />} />
      </div>
    </article>
  );
};
export default Skill;
