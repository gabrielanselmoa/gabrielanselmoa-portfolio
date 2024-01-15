'use client'

import { motion, Variants} from "framer-motion"
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillChatTextFill } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { useState } from "react";

const blurVariant: Variants = {
    hidden: {opacity: 0, 'filter':'blur(10px)'},
    visible: {opacity: 1, 'filter':'blur(0px)'},
}

const Forms = () => {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [textarea, setTextArea] = useState("")
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsFormSubmitted(true);

    setEmail("");
    setName("");
    setTextArea("");
  };

  return (
    <motion.div className="px-2"
    initial='hidden'
    animate='visible'
    variants={blurVariant}
    transition={{duration: 0.5}}
    >
      <section className="container">
        <article className="py-8">
          <h2 className="text-center text-lg text-[#25216c] mb-6">../Contact Me</h2>

          <form action="https://formspree.io/f/mvoeoegk" 
          method="POST"
          className="flex flex-col justify-between items-start gap-4 border radius shadow px-4 py-8
          max-w-sm m-auto"
          >
            <label className="flex flex-row items-center gap-2 w-full">
              {/* Name: */}
              <FaUser size={20}/>
              <input type="text" 
              name="name" required={true} 
              placeholder="Name" maxLength={35} 
              className="w-full px-4 py-1 border radius"
              onChange={e => setName(e.target.value)}
              value={name}
              title="Only text is allowed here!"
              pattern="[a-zA-Z\s]+"
              />
            </label>

            <label className="flex flex-row items-center gap-2 w-full">
              {/* Email: */}
              <MdEmail size={20}/>
              <input type="email" name="email" 
              required={true} placeholder="Email" 
              maxLength={100} className="w-full px-4 py-1 border radius"
              onChange={e => setEmail(e.target.value)}
              value={email}
              title="Only valid emails are allowed"
              pattern="[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)"
              />
            </label>

            <label className="flex flex-row items-start gap-2">
              {/* Message: */}
              <BsFillChatTextFill size={20}/>
              <textarea name="message" required={true} 
              placeholder="Message" maxLength={150} 
              cols={50} className="w-full px-4 py-2 border radius"
              onChange={e => setTextArea(e.target.value)}
              value={textarea}
              ></textarea>
            </label>

            <button
              type="submit"
              className="w-full flex flex-row justify-center items-center gap-2 bg-black text-white px-4 py-2 radius shadow"
              disabled={isFormSubmitted}
            >
              {isFormSubmitted ? "Sent!" : "Send"} <BiLogoTelegram size={20} />
            </button>
          </form>
        
      </article>
      </section>
    </motion.div>
  )
}
export default Forms