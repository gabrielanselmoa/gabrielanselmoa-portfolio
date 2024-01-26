import Link from "next/link";
import Button from "../../ui/Button";
import { LuMessagesSquare } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="px-2 py-2">
      <section
        className="container flexbox-row justify-between
        max-[375px]:flex-col max-[375px]:text-center max-[375px]:text-[10px] max-[375px]:gap-2
        max-[425px]:text-[12px] max-[425px]:gap-1 max-[425px]:flex-col
        max-[520px]:text-[10px]
        max-[768px]:text-sm max-[768px]:gap-2
        "
      >
        <div className="hover:text-[#25216c]">
          All rights reserved to &copy; Gabriel Anselmo Developer
        </div>
        <Button
          name="Contact Me"
          href="mailto:gabrielanselmo@gmail.com"
          icon={<LuMessagesSquare size={20} />}
          className="hover:bg-[#25216c] hover:text-white hover:border-white"
        />
      </section>
    </footer>
  );
};
export default Footer;
