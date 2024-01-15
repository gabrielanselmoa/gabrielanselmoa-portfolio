import { ReactNode } from "react";

type Props = {
    skillName:string, 
    icon: ReactNode
}

const SkillBlock = ({skillName, icon}:Props) => {
  return (
    <div className="skill-block radius transition-all hover:opacity-90 hover:bg-black hover:text-white
    md:w-1/4 lg:w-1/4 xl:1/5
    ">
      <span>{icon}</span>
      {skillName}
    </div>
  )
}
export default SkillBlock