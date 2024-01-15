'use client'

import Link from "next/link"

const Experience = () => {
  return (
    <article className="flex flex-col gap-8 py-6
    sm:w-4/5 sm:m-auto xl:w-1/2
    ">
        <h1 className="text-xl text-[#25216c] text-center mb-2">../Experience</h1>
        
        <div className="container py-4 px-5">
            <h2 className="text-lg mb-2">Front-End Developer on Smart Media Legacy</h2>
            <span className="text-sm text-[#25216c]">2023 - Present | Full-Time</span>
            <p className="font-normal text-sm">
            As a Freelance Web Developer collaborating with Smart Media Legacy, I specialize in crafting impactful websites using Next.js, React.js, Tailwind, and TypeScript. I focus on dynamic user interfaces and high-performance applications, ensuring consistency and responsiveness through Tailwind. Framer Motion adds sophistication with advanced animations, enhancing the overall user experience. Proficient in TypeScript, I strengthen code reliability and foster effective team collaboration. This freelance role not only sharpens my technical skills but also fuels my ambitions for future Full Stack <b><a href="/projects">Projects</a></b>.
            </p>
            <a href='https://www.linkedin.com/in/gabriel-anselmo-b69bb0247/' target={"_blank"} className="font-bold mt-2">See More</a>
        </div>
        <div className="container">
            <h2 className="text-lg mb-2">Front-End Developer on Maple Bear - Canadian School</h2>
            <span className="text-sm text-[#25216c]">2023 - Present | Internship</span>
            <p className="font-normal text-sm flexbox-col items-center">
            As Front-End Developer, I specialize in crafting impactful websites using Next.js, React.js, Tailwind, and TypeScript. My role extends beyond front-end technologies, encompassing a dynamic learning journey. I've expanded my expertise into Python, delving into versatile applications. Exploring PowerBI, I've harnessed data visualization for informed decision-making. Additionally, I've delved into networking and infrastructure, broadening my skill set. This holistic approach not only sharpens my technical acumen but also positions me as a versatile team player capable of navigating diverse aspects of web development and beyond.
            </p>
            <a href='https://www.linkedin.com/in/gabriel-anselmo-b69bb0247/' target={"_blank"} className="font-bold mt-2">See More</a>
        </div>
    </article>
  )
}
export default Experience