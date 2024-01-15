import Link from "next/link"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

type Props = {
  name?: string,
  href: string,
  className?: string,
  icon?: any
}

const Button = ({name, href, className, icon}:Props) => {
  return (
    <Link href={href}>
        <button className={`btn radius text-[11px] py-3 px-3 ${className}
        sm:text-[14px] sm:py-4 sm:px-4
        md:text-[13px] lg:text-md
        `}>
          {name}
          {icon}
        </button>
    </Link>
  )
}
export default Button