"use client";
import { Theme, useThemeStore } from "@/lib/stores";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const ThemeSelector = () => {
  const currentTheme = useThemeStore((state) => state.getCurrentTheme());
  const themes = useThemeStore((state) => state.themes);
  const setTheme = useThemeStore((state) => state.setTheme);

  const getBg = ({displayStyle, colors}: Theme) => {
    if (displayStyle) {
      const t = displayStyle();
      if (typeof t === 'string') {
        return t;
      } else {
        return `linear-gradient(0.12turn, ${t.from}, ${t.to})`
      }
    } else {
      return `linear-gradient(0.12turn, ${colors.background}, ${colors.accent})`;
    }
  }

  return (
    <div className="flex gap-4 items-center">
      {themes.map((theme) => (
        <motion.div
          key={theme.id}
          whileHover={{ scale: 1.1 }}
          onClick={() => setTheme(theme.id)}
          className={twMerge(
            `p-4 rounded-full cursor-pointer`,
            currentTheme.id === theme.id &&
              "outline outline-4 outline-accent"
          )}
          style={{
            background: getBg(theme)
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default ThemeSelector;
