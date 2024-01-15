"use client"

import { ImExit } from "react-icons/im";
import { FaRunning } from "react-icons/fa";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="container flexbox-row items-center justify-center gap-4">
        <Link href='/'>Not Found</Link>
        <Link href='/' className="flexbox-row gap-1">
            <FaRunning size={25} />
            <ImExit size={25} />
        </Link>
    </section>
  )
}
export default NotFound