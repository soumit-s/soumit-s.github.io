import Link from "next/link";
import { twMerge } from "tailwind-merge";

const ResumeButton = () => (
  <Link
    href=""
    className={twMerge(
      "p-2 px-3 font-victor-mono italic text-xs sm:text-sm sm:px-4 border-2 border-border text-foreground",
      "rounded-md cursor-pointer hover:bg-accent hover:text-background hover:border-background hover:font-black"
    )}
  >
    Resume
  </Link>
);

export default ResumeButton;
