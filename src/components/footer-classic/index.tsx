import { Variants, motion } from "framer-motion";

import { TiHeart as SvgHeart } from "react-icons/ti";
import SvgUnsplash from "@/components/svg/Unsplash1.svg";
import SvgGithub from "@/components/svg/Github2.svg";
import SvgSteam from "@/components/svg/Steam1.svg";
import SvgDiscord from "@/components/svg/Discord1.svg";
import Link from "next/link";
import { SocialInfo } from "../socials-panel";
import SinCurve from "@/components/sin-curve";

const socialsInfo: Array<SocialInfo> = [
  { id: 0, label: "Discord", Icon: SvgDiscord },
  { id: 1, label: "Steam", Icon: SvgSteam },
  { id: 2, label: "Github", Icon: SvgGithub },
  { id: 3, label: "Unsplash", Icon: SvgUnsplash },
];

const socialsVariants: Variants = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const FooterClassic = () => (
  <footer className="py-8 flex gap-8 items-center">
    <motion.div
      className="py-4 font-bricolage-grotesque text-neutral-500 font-extralight flex items-center gap-2 shrink-0"
      initial={{ opacity: 0, translateX: -20 }}
      whileInView={{ opacity: 1, translateX: 0 }}
    >
      Made with <SvgHeart className="w-6 h-6" /> by{" "}
      <b className="font-black">me</b>
    </motion.div>
    <hr className="w-full border-neutral-300" />
    <motion.div
      className="flex gap-4 items-center"
      transition={{ staggerChildren: 0.1 }}
      initial="hidden"
      whileInView="show"
    >
      {socialsInfo.map((s) => (
        <motion.a
          key={s.id}
          href={s.href ?? ""}
          className="p-2 border border-neutral-300 rounded-full inline-block"
          variants={socialsVariants}
        >
          <s.Icon className="w-6 h-6 fill-black" />
        </motion.a>
      ))}
    </motion.div>
    <hr className="w-full border-neutral-300" />
    <motion.div
      className="shrink-0 font-cedarville-cursive font-medium text-xl text-neutral-500"
      initial={{ opacity: 0, translateX: 20 }}
      whileInView={{ opacity: 1, translateX: 0 }}
    >
      Soumit Srimany
    </motion.div>
  </footer>
);

export default FooterClassic;
