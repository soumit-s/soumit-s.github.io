import ReachMeButton from "@/components/reach-me-button";
import SocialsPanel from "@/components/socials-panel";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const Hero = ({ className }: { className?: string }) => (
  <motion.section
    className={twMerge("px-8 sm:px-0 flex-col items-center", className)}
    initial={{ opacity: 0, translateY: 20 }}
    whileInView={{ opacity: 1, translateY: 0 }}
  >
    <h4 className="mb-2 font-victor-mono italic font-black text-3xl">Hi,</h4>
    <h3 className="mb-4 font-ojuju text-4xl font-black">I am</h3>
    <h1 className="mb-8 font-bricolage-grotesque text-6xl font-black">
      Soumit Srimany
    </h1>
    <p className="font-work-sans tracking-tight text-foreground leading-relaxed text-[0.98em]">
      As a <Kwd>fullstack</Kwd> developer, I create <Kwd>simple</Kwd>,{" "}
      <Kwd>elegant</Kwd> and <Kwd>fluid</Kwd>&nbsp; user interfaces, paired with{" "}
      <u>performant</u>, <u>scalable</u> and <u>fault-tolerant</u> backend
      services.
    </p>
    <div className="mt-8 flex gap-8">
      <ReachMeButton />
      <SocialsPanel />
    </div>
  </motion.section>
);

const Kwd = ({ children }: React.PropsWithChildren) => (
  <span className="font-victor-mono italic text-sm text-blue-500 font-black">
    {children}
  </span>
);

export default Hero;
