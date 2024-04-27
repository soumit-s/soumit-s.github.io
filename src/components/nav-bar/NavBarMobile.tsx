import Link from "next/link";
import SiteLogo from "../site-logo";
import SvgBrush from "@/components/svg/Brush3.svg";
import SvgDownload from "@/components/svg/Download2.svg";
import ThemeSelector from "../theme-selector";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const NavBarMobile = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.nav className="p-8 sm:px-0 flex justify-between">
      <SiteLogo />
      <motion.div
        layout
        transition={{ duration: 1 }}
        className="flex gap-4 items-center"
      >
        <Link
          href=""
          className={
            "p-2 font-victor-mono italic text-xs sm:text-sm sm:px-4 border-2 border-border text-foreground rounded-md cursor-pointer group"
          }
        >
          <motion.div layout className="flex items-center gap-2">
            Resume
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="hidden group-hover:block"
            >
              <SvgDownload className="w-4 h-4 fill-black" />
            </motion.div>
          </motion.div>
        </Link>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
            >
              <ThemeSelector />
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className="bg-accent rounded-md shadow-black/40 cursor-pointer hover:rounded-lg transition-all"
          onClick={() => setOpen(!isOpen)}
        >
          <motion.div
            className="p-2"
            animate={{
              rotateZ: isOpen ? "180deg" : "0deg",
            }}
            whileHover={{
              rotateZ: isOpen ? "135deg" : "45deg",
            }}
          >
            <SvgBrush className="w-4 h-4 sm:w-5 sm:h-5 fill-background" />
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavBarMobile;
