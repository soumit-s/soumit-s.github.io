"use client";
import { TiHeart as SvgHeart } from "react-icons/ti";
import { ReachIcon } from "@/components/footer/icons";
import { MeIcon } from "@/components/footer/icons";
import { WorkIcon } from "@/components/footer/icons";
import { BlogIcon } from "@/components/footer/icons";
import { redirect } from "next/navigation";
import React from "react";

export type FooterEntry = {
  id: number;
  name: string;
  onClick: string | React.MouseEventHandler;
  Icon: React.ComponentType<{ className?: string }>;
};

export type FooterProps = {
  entries?: FooterEntry[];
};

export const footerEntries: Array<FooterEntry> = [
  { id: 0, name: "Reach Me", Icon: ReachIcon, onClick: "" },
  { id: 1, name: "Me", Icon: MeIcon, onClick: () => {} },
  { id: 2, name: "Work", Icon: WorkIcon, onClick: "" },
  { id: 3, name: "Blog", Icon: BlogIcon, onClick: "" },
];

const getOnClickHandler = (onClick: string | React.MouseEventHandler) => {
  return (e: React.MouseEvent) => {
    if (typeof onClick === "string") {
      e.stopPropagation();
      console.log(onClick);
      redirect(onClick);
    } else {
      onClick(e);
    }
  };
};

const Footer = ({ entries = footerEntries }: FooterProps) => (
  <section className="py-2 px-8 sm:px-0">
    <div className="flex gap-4 justify-between font-work-sans text-neutral-800">
      <div className="w-1/2">
        <div className="font-victor-mono italic font-medium text-[0.77em] leading-6 mb-6">
          Want to start a conversation ? Email me at
        </div>
        <div className="font-ojuju font-bold underline underline-offset-8 decoration-1 tracking-wider">
          hello@soumit.me
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {entries.map(({ id, Icon, onClick }, i) => (
          <div
            key={id}
            className="text-right"
            onClick={getOnClickHandler(onClick)}
          >
            <Icon />
          </div>
        ))}
      </div>
    </div>
    <div className="py-4 font-bricolage-grotesque font-light flex items-center gap-2">
      Made with <SvgHeart className="w-6 h-6 text-red-500" /> by <b className="font-black">me</b>
    </div>
  </section>
);

export default Footer;
