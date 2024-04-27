import SiteLogo from "@/components/site-logo";
import ThemeSelector from "@/components/theme-selector";
import ResumeButton from "@/components/resume-button";
import ThemeSelectorButton from "@/components/theme-selector-button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const NavBarMobile = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.nav className="p-8 sm:px-0 flex justify-between">
      <div className="flex">
        <SiteLogo />
      </div>
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
          <ThemeSelectorButton isOpen={isOpen} />
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBarMobile;
