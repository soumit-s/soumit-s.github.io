"use client";
import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { useCopyToClipboard } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";

type State = "normal" | "copying" | "cooldown" | "failed_cooldown";

const ReachMeButton = () => {
  const [state, setState] = useState<State>("normal");
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = async (v: string) => {
    // initiate copy only if the state is 'normal'
    if (state !== "normal") return;
    const success = await copy(v);
    setState(success ? "cooldown" : "failed_cooldown");
    setTimeout(() => setState("normal"), 2000);
  };

  return (
    <>
      <button
        className="px-5 py-3 text-background bg-accent rounded-md font-victor-mono italic text-[0.85em] font-black flex gap-3 items-center shadow-md"
        onClick={() => handleCopy("hi@soumit.me")}
      >
        Reach Me
        <FiMail className="w-4 h-4" />
      </button>
      <AnimatePresence>
        {state === "cooldown" && (
          <div className="fixed bottom-4 left-0 right-0 z-50">
            <motion.div
              className="m-auto w-fit bg-black text-white rounded-lg px-4 py-3 shadow-neutral-400/20 shadow-lg border border-neutral-600 font-reddit-mono text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {state === "cooldown" ? (
                "Email Copied 😊"
              ) : (
                <div className="text-center">
                  Copy Failed 😞
                  <br />
                  Here is the email <br />
                  <u className="underline-offset-4">hi@soumit.me</u>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ReachMeButton;
