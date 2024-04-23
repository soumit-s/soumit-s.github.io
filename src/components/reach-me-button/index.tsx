"use client";
import SvgMail from "@/components/svg/Mail2.svg";
import { useState } from "react";
import { FiMail } from "react-icons/fi";

type State = "normal" | "cooldown";

const ReachMeButton = () => {
  const [state, setState] = useState<State>("normal");
  return (
    <>
      <button
        className="px-5 py-3 text-neutral-300 bg-black rounded-md font-victor-mono italic text-[0.85em] font-black flex gap-3 items-center shadow-md"
        onClick={() => {
          if (state === "normal") {
            setState("cooldown");
            setTimeout(() => {
              setState("normal");
            }, 2000);
          }
        }}
      >
        Reach Me
        <FiMail className="w-4 h-4" />
      </button>
      {state === "cooldown" && (
        <div className="fixed bottom-4 left-0 right-0">
          <div className="m-auto w-fit bg-black text-white rounded-lg px-4 py-3 shadow-neutral-400 shadow-md font-reddit-mono text-sm">
            Email Copied 😊
          </div>
        </div>
      )}
    </>
  );
};

export default ReachMeButton;
