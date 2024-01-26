import Image from "next/image";
import Link from "next/link";
import Button from "../../ui/Button";
import Soon from "@/assets/images/soon-page.png";

import { FaEye, FaGithub } from "react-icons/fa";
import { BsHourglassSplit } from "react-icons/bs";

// type Props = {
//     imgSrc: any,
//     imgAlt: string,
//     href: string,
//     title: string,
//     description: string,
//     className: string,
// }

const Portfolio = () => {
  return (
    <section className="container flex flex-col justify-center items-center gap-6">
      <h2 className="text-xl text-[#25216c] my-8">../Projects</h2>
      {/* LARGGEST */}
      <article
        className="card flex flex-col justify-center items-center gap-4 pb-4 border max-w-md w-full m-auto shadow radius
    lg:flex-row lg:p-0 lg:gap-0 lg:max-w-none xl:w-4/5"
      >
        <Link
          href="/"
          className="w-full overflow-hidden z-1 hover:opacity-80 hover:bg-[#25216c] transition-default border rounded-t-md lg:rounded-none lg:rounded-tl-md lg:rounded-bl-md"
        >
          <Image
            src={Soon}
            alt=""
            className="w-full max-h-[250px] object-cover object-center hover:scale-105 transition-default
        sm:h-full
        "
          />
        </Link>

        <span className="w-full px-4 text-left">
          <h4 className="text-sm text-[#25216c] mb-2">Featured Project</h4>
          <h2 className="text-xl mb-2">Building Applications...</h2>
          <p className="text-sm font-normal italic mb-4 flex flex-row items-center gap-2">
            Fetching data{" "}
            <span className="animate-spin duration-1000">
              <BsHourglassSplit size={20} />
            </span>
          </p>
          <div className="flexbox-row gap-2">
            <Button
              href=""
              className="hover:bg-black hover:text-white transition-default"
              icon={<FaEye size={20} />}
            />
            <Button
              href="https://github.com/gabrielanselmoa"
              target="_blank"
              className="hover:bg-black hover:text-white transition-default"
              icon={<FaGithub size={20} />}
            />
          </div>
        </span>
      </article>

      <aside className="flex flex-col flex-wrap gap-6 lg:flex-row lg:gap-6">
        {/* SMALL ONE */}
        <article
          className="flex flex-col justify-center items-center gap-2 border max-w-md w-full m-auto shadow radius
      lg:w-auto
      "
        >
          <Link
            href="/"
            className="w-full overflow-hidden z-1 hover:opacity-80 hover:bg-red-950 transition-default border rounded-t-md"
          >
            <Image
              src={Soon}
              alt=""
              className="w-full max-h-[250px] object-cover object-center hover:scale-105 transition-default"
            />
          </Link>

          <span className="w-full px-4 my-4">
            <h4 className="text-sm text-[#25216c] mb-2">Featured Project</h4>
            <h2 className="text-xl mb-2">Building Applications...</h2>
            <p className="text-sm font-normal italic mb-4 flex flex-row items-center gap-2">
              Applications with React.js, Next.js, Typescript, Tailwind and UI
              Libs to improve and test my Front-End Skills
            </p>
            <div className="flexbox-row gap-2">
              <Button
                href="/"
                className="hover:bg-black hover:text-white transition-default"
                icon={<FaEye size={20} />}
              />
              <Button
                href="https://github.com/gabrielanselmoa"
                target="_blank"
                className="hover:bg-black hover:text-white transition-default"
                icon={<FaGithub size={20} />}
              />
            </div>
          </span>
        </article>

        {/* SMALL ONE */}
        <article
          className="flex flex-col justify-center items-center gap-2 border max-w-md w-full m-auto shadow radius
      lg:w-auto
      "
        >
          <Link
            href="/"
            className="w-full overflow-hidden z-1 hover:opacity-80 hover:bg-red-950 transition-default border rounded-t-md"
          >
            <Image
              src={Soon}
              alt=""
              className="w-full max-h-[250px] object-cover object-center hover:scale-105 transition-default"
            />
          </Link>

          <span className="w-full px-4 my-4">
            <h4 className="text-sm text-[#25216c] mb-2">Featured Project</h4>
            <h2 className="text-xl mb-2">Building Applications...</h2>
            <p className="text-sm font-normal italic mb-4 flex flex-row items-center gap-2">
              Applications with React.js, Next.js, Typescript, Tailwind and UI
              Libs to improve and test my Front-End Skills
            </p>
            <div className="flexbox-row gap-2">
              <Button
                href="/"
                className="hover:bg-black hover:text-white transition-default"
                icon={<FaEye size={20} />}
              />
              <Button
                href="https://github.com/gabrielanselmoa"
                target="_blank"
                className="hover:bg-black hover:text-white transition-default"
                icon={<FaGithub size={20} />}
              />
            </div>
          </span>
        </article>
      </aside>

      {/* LARGGEST */}
      <article
        className="flex flex-col justify-center items-center gap-4 pb-4 border max-w-md w-full m-auto mb-8 shadow radius
    lg:flex-row lg:p-0 lg:gap-0 lg:max-w-none xl:w-4/5"
      >
        <Link
          href="/"
          className="w-full overflow-hidden z-1 hover:opacity-80 hover:bg-red-950 transition-default border rounded-t-md lg:rounded-none lg:rounded-tl-md lg:rounded-bl-md"
        >
          <Image
            src={Soon}
            alt=""
            className="w-full max-h-[250px] object-cover object-center hover:scale-105 transition-default"
          />
        </Link>

        <span className="w-full px-4">
          <h4 className="text-sm text-[#25216c] mb-2">Featured Project</h4>
          <h2 className="text-xl mb-2">Building Applications...</h2>
          <p className="text-sm font-normal italic mb-4 flex flex-row items-center gap-2">
            Fetching data{" "}
            <span className="animate-spin duration-1000">
              <BsHourglassSplit size={20} />
            </span>
          </p>
          <div className="flexbox-row gap-2">
            <Button
              href="/"
              className="hover:bg-black hover:text-white transition-default"
              icon={<FaEye size={20} />}
            />
            <Button
              href="https://github.com/gabrielanselmoa"
              target="_blank"
              className="hover:bg-black hover:text-white transition-default"
              icon={<FaGithub size={20} />}
            />
          </div>
        </span>
      </article>
    </section>
  );
};
export default Portfolio;
