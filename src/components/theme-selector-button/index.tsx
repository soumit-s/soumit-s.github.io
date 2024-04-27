import SvgBrush from "@/components/svg/Brush3.svg";
import { motion } from "framer-motion";

const ThemeSelectorButton = ({ isOpen }: { isOpen: boolean }) => (
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
);

export default ThemeSelectorButton;
