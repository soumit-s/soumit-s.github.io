import SocialsPanel, { SocialInfo } from "@/components/socials-panel";
import Image from "next/image";

import SvgSteam from "@/components/svg/Steam1.svg";
import SvgDiscord from "@/components/svg/Discord1.svg";

const socials: Array<SocialInfo> = [
  { id: 0, label: "Discord", Icon: () => <SvgDiscord className="w-8 h-8"/> },
  { id: 1, label: "Steam", Icon: SvgSteam },
];

const ReachMe = () => (
  <section className="px-8">
    <div className="grid grid-cols-2 items-end border-y border-y-neutral-400 pt-8">
      <div className="flex flex-col justify-between pb-4 gap-4">
        <h1 className="font-bricolage-grotesque text-5xl font-black">
          Let's talk
        </h1>
        <p className="font-work-sans text-xs">
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
