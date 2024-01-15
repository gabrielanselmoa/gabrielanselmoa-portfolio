'use client'

import { useState } from "react"
import { FaArrowUp, FaPlus } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io";

const Academic = () => {

  const [checkRadio, setCheckRadio] = useState<boolean>(false)

  const handleCheck = () => {
    setCheckRadio(!checkRadio)
    console.log(checkRadio);
    return
  }

  return (
    <section className="sm:w-4/5 sm:m-auto lg:w-3/5 xl:w-1/2 pt-6">
        <h2 className="text-center text-[#25216c] text-xl">../Academic-Education</h2>
          <ul className="accordion flexbox-col gap-6 my-8 w-full">

            <li className="container list-none w-full p-3 transition-default hover:bg-black hover:text-white">
              <input type="radio" name="accordion" id="first" onClick={handleCheck} />
              <label htmlFor="first"
              className="flex flex-row items-center gap-4 p-3 text-lg font-semibold cursor-pointer transition-default"
              >
                <span><IoIosArrowDown size={20}/></span>
                UNDB
              </label>
              <div className="content overflow-hidden text-sm font-normal leading-6">
                <p>During my experience at UNDB (Universidade Dom Bosco), where I am currently pursuing a degree in Software Engineering, I have been immersed in a comprehensive curriculum covering software development, data science, agile project management, solution design, IT governance, and more.
                </p>
                <p>
                This educational journey has provided me with a holistic understanding of various aspects of the field, from hands-on software development to strategic aspects like project management and governance. 
                </p>
                <p>
                  UNDB has been instrumental in shaping my knowledge and skills in the dynamic and evolving field of Software Engineering.
                </p>
              </div>
            </li>

            <li className="container list-none w-full my-5 p-3 transition-default hover:bg-black hover:text-white">
              <input type="radio" name="accordion" id="second" onClick={handleCheck} />
              <label htmlFor="second"
              className="flex flex-row items-center gap-4 p-3 text-lg font-semibold cursor-pointer transition-default"
              >
                <span><IoIosArrowDown size={20}/></span>
                IFMA
              </label>
              <div className="content overflow-hidden text-sm font-normal leading-6">
                <p>During my experience at the Federal Institute of Maranhão (IFMA), I participated in the integrated high school program with a technical course in Computer Science focused on programming and practical field skills. 
                  <p>Throughout the integrated high school, I gained solid knowledge in programming, software development, and other competencies related to the field of information technology.
                  </p> 
                  <p>Practical classes and the academic environment provided me with a strong foundation to tackle challenges in the IT sector, preparing me to enter the professional field with confidence and well-developed technical skills. The experience at IFMA was crucial for my academic and professional growth.</p>
                  
                </p>
              </div>
            </li>

          </ul>
    </section>
  )
}
export default Academic