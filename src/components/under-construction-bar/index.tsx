import SvgConstruction from "@/components/svg/Construction1.svg";
import { RxCross2 } from "react-icons/rx";

const UnderConstructionBar = ({ onClose }: { onClose: () => any }) => (
  <nav className="p-2 sm:px-4 flex items-center gap-4 bg-accent text-background font-work-sans text-xs sm:text-sm">
    <div className="flex items-center justify-center gap-4 grow">
      <SvgConstruction className="w-4 h-4 fill-background" />
      <span className="flex gap-2 items-center">
        <span className="font-bricolage-grotesque font-black">
          Under Construction
        </span>
        <span className="text-lg font-bold font-bricolage-grotesque hidden sm:inline">
          &#x25e6;
        </span>
        <span className="hidden sm:inline">Apologies beforehand for any bugs you encounter</span>
      </span>
    </div>
    <div className="hover:bg-background hover:text-accent rounded p-1 cursor-pointer" onClick={() => onClose()}>
      <RxCross2 className="w-4 h-4" />
    </div>
  </nav>
);

export default UnderConstructionBar;
