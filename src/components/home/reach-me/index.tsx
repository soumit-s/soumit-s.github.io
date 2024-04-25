import SocialsPanel, { SocialInfo } from "@/components/socials-panel";
import Image from "next/image";

import SvgSteam from "@/components/svg/Steam1.svg";
import SvgDiscord from "@/components/svg/Discord1.svg";
import { twMerge } from "tailwind-merge";

const socials: Array<SocialInfo> = [
  {
    id: 0,
    label: "Discord",
    Icon: ({ className }) => (
      <SvgDiscord className={twMerge(className, "w-8 h-8")} />
    ),
  },
  { id: 1, label: "Steam", Icon: SvgSteam },
];

const ReachMe = () => (
  <section className="px-8 sm:px-0">
    <div className="grid grid-cols-2 items-end border-y border-y-neutral-400 pt-8">
      <div className="flex flex-col justify-between pb-4 gap-4">
        <h1 className="font-bricolage-grotesque text-5xl lg:text-7xl font-black">
          Let's talk
        </h1>
        <p className="font-work-sans text-xs md:text-base sm:tracking-tight sm:font-light">
          Some informal ways of reaching me
        </p>
        <div>
          <SocialsPanel socials={socials} className="fill-black" />
        </div>
      </div>
      <div>
        <Image src="/assets/catty.png" width={1000} height={1000} alt=":(" />
      </div>
    </div>
  </section>
);
export default ReachMe;
