import SvgGithub from "@/components/svg/Github1.svg";
import SvgLinkedin from "@/components/svg/LinkedIn4.svg";
import Link from "next/link";

type SocialInfo = {
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
  socials = SOCIALS,
}: {
  socials?: Array<SocialInfo>;
}) => (
  <div className="text-sm flex items-center gap-4">
    {socials?.map((social) => (
      <Link href={social.href ?? ""}>
        <social.Icon className="w-6 h-6 fill-socials" />
      </Link>
    ))}
  </div>
);

export default SocialsPanel;
