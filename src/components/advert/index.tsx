import SvgDiamond from "@/components/svg/Diamond1.svg";
import SvgLink from "@/components/svg/Link2.svg";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props = React.PropsWithChildren<{
  title: React.ReactNode;
}>;

const Advert = ({ title, children }: Props) => (
  <motion.div className="group" whileHover={{ translateX: 5 }}>
    <h1 className="w-fit font-bricolage-grotesque text-3xl font-black mb-4 flex gap-4 items-center cursor-pointer relative group/link">
      <SvgDiamond className="w-[0.8em] h-1[0.8em]" />
      {title}
      <motion.div
        className="hidden group-hover:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate="pulse"
      >
        <LinkIcon className="group-hover/link:bg-neutral-600" />
      </motion.div>
    </h1>
    <div className="font-work-sans text-[0.93em] tracking-tight leading-relaxed text-foreground">
      {children}
    </div>
  </motion.div>
);

const LinkIcon = ({ className } : { className?: string }) => (
  <div className={twMerge("bg-black p-1 rounded transition-all duration-300", className)}>
    <SvgLink className="w-4 h-4 stroke-white" />
  </div>
);

export default Advert;
