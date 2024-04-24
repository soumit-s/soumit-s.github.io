import SvgGithub from "@/components/svg/Github1.svg";
import SvgLinkedin from "@/components/svg/LinkedIn4.svg";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export type SocialInfo = {
  id: number;
  label: React.ReactNode;
  href?: string | undefined | null;
  Icon: React.ComponentType<{
    className?: string;
    width?: number;
    height?: number;
  }>;
};

const SOCIALS: Array<SocialInfo> = [
  { id: 0, label: "Github", Icon: SvgGithub },
  { id: 1, label: "LinkedIn", Icon: SvgLinkedin },
];

const SocialsPanel = ({
  className,
  socials = SOCIALS,
}: {
  className?: string;
  socials?: Array<SocialInfo>;
}) => (
  <div className="text-sm flex items-center gap-4">
    {socials?.map((social, key) => (
      <Link key={key} href={social.href ?? ""}>
        <social.Icon className={twMerge("w-6 h-6 fill-socials", className)} />
      </Link>
    ))}
  </div>
);

export default SocialsPanel;
