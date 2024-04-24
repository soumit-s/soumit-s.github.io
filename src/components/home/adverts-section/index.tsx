import { MeAdvert, WorkAdvert, BlogsAdvert } from "@/components/home/adverts";
import { twMerge } from "tailwind-merge";

const AdvertsSection = ({ className }: { className?: string }) => (
  <div className={twMerge("flex flex-col gap-8 px-8 sm:px-0", className)}>
    <MeAdvert />
    <WorkAdvert />
    <BlogsAdvert />
  </div>
);

export default AdvertsSection;
