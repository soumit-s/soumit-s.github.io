import { MeAdvert, WorkAdvert, BlogsAdvert } from "@/components/home/adverts";
import { twMerge } from "tailwind-merge";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, translateX: 20 },
  show: { opacity: 1, translateX: 0 },
};

const AdvertsSection = ({ className }: { className?: string }) => (
  <motion.div
    className={twMerge("flex flex-col gap-8 px-8 sm:px-0", className)}
    variants={container}
    initial="hidden"
    whileInView="show"
  >
    <motion.div variants={item}>
      <MeAdvert />
    </motion.div>
    <motion.div variants={item}>
      <WorkAdvert />
    </motion.div>
    <motion.div variants={item}>
      <BlogsAdvert />
    </motion.div>
  </motion.div>
);

export default AdvertsSection;
