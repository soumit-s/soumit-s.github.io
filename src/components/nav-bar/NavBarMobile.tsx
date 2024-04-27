import Link from "next/link";
import SiteLogo from "../site-logo";
import SvgBrush from "@/components/svg/Brush3.svg";
import SvgDownload from "@/components/svg/Download2.svg";
import ThemeSelector from "../theme-selector";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ResumeButton from "../resume-button";

const NavBarMobile = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.nav className="p-8 sm:px-0 flex justify-between">
      <SiteLogo />
      <div className="flex items-center gap-4">
        <ResumeButton />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="box-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
      </div>
    </motion.nav>
  );
};

export default NavBarMobile;
