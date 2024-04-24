import SvgDiamond from "@/components/svg/Diamond1.svg";

type Props = React.PropsWithChildren<{
  title: React.ReactNode;
}>;

const Advert = ({ title, children }: Props) => (
  <div>
    <h1 className="font-bricolage-grotesque text-3xl font-black mb-4 flex gap-4 items-center">
      <SvgDiamond className="w-[0.8em] h-1[0.8em]"/>{title}
    </h1>
    <div className="font-work-sans text-[0.93em] tracking-tight text-foreground">
      {children}
    </div>
  </div>
);

export default Advert;
