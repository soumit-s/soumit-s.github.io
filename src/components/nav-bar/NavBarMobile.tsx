import Link from "next/link";
import SiteLogo from "../site-logo";
import SvgBrush from "@/components/svg/Brush3.svg";
import { twMerge } from "tailwind-merge";

const NavBarMobile = () => (
  <nav className="p-8 sm:px-0 flex justify-between">
      <SiteLogo />
      <div className="flex gap-4 items-center">
        <Link
          href=""
          className={
            "p-2 font-victor-mono italic text-xs sm:text-sm sm:px-4 border-2 border-neutral-200 text-neutral-800 rounded-md cursor-pointer"
          }
        >
          Resume
        </Link>
        <div className="bg-black p-2 rounded-md shadow-black/40">
          <SvgBrush className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
        </div>
      </div>
  </nav>
);

export default NavBarMobile;
