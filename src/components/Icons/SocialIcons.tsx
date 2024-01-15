
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

type Props = {
  icon?: any,
  className?: string
}

const SocialIcons = ({icon, className}:Props) => {
  return (
      // <Link href='/' className={className}>{icon}</Link>
    <div className="flexbox-row gap-2 transition">
        <Link href='https://github.com/gabrielanselmoa' target={"_blank"}><FaGithub size={25} /></Link>
        <Link href='https://www.linkedin.com/in/gabriel-anselmo-b69bb0247/' target={"_blank"}><FaLinkedin size={25} /></Link>
        <Link href='https://www.instagram.com/anselmo.codes/'><FaInstagram size={25} target={"_blank"}/></Link>
    </div>
  )
}
export default SocialIcons