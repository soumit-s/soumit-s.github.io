"use client";
import { Theme, useThemeStore } from "@/lib/stores";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const ThemeSelector = () => {
  const currentTheme = useThemeStore((state) => state.getCurrentTheme());
  const themes = useThemeStore((state) => state.themes);
  const setTheme = useThemeStore((state) => state.setTheme);

  const getBg = ({ displayStyle, colors }: Theme) => {
    if (displayStyle) {
      const t = displayStyle();
      if (typeof t === "string") {
        return t;
      } else {
        return `linear-gradient(0.12turn, ${t.from}, ${t.to})`;
      }
    } else {
      return `linear-gradient(0.12turn, ${colors.background}, ${colors.accent})`;
    }
  };

  return (
    <div className="flex gap-4 items-center">
      {themes.map((theme) => (
        <motion.div
          key={theme.id}
          whileHover={{ scale: 1.1 }}
          onClick={() => setTheme(theme.id)}
          className={twMerge(
            `p-4 rounded-full cursor-pointer relative overflow-hidden border border-foreground`,
            currentTheme.id === theme.id &&
              twMerge(
                "outline outline-1 outline-offset-2 outline-border after:absolute after:content-['']",
                "after:left-0 after:right-0 after:top-0 after:bottom-0",
                "after:bg-black/30 after:z-10"
              )
          )}
          style={{
            background: getBg(theme),
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default ThemeSelector;
