import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Theme = {
  id: string;
  name?: string;
  colors: {
    background: string; // Used in the background
    accent: string; // Used for headings and strong text
    foreground: string; // Used for common text
    tertiary: string; // Used for borders and stuff
    border?: string;
    signature?: string;
    socials?: string;
  };
  displayStyle?: () => string | { from: string; to: string };
};

export type ThemeStore = {
  currentThemeId: string;
  themes: Theme[];
  getCurrentTheme: () => Theme;
  setTheme: (id: string) => void;
};

const binaryTheme: Theme = {
  id: "binary",
  name: "Binary",
  colors: {
    background: "white",
    accent: "black",
    foreground: "#525252",
    tertiary: "#ddd",
    border: "#d4d4d4",
    signature: "#737373",
    socials: "#aaa",
  },
  displayStyle: () => ({ from: "black", to: "#666" }),
};

const candySky: Theme = {
  id: "candy-sky",
  name: "Candy Sky",
  colors: {
    background: "red",
    accent: "#00215E",
    foreground: "#333",
    tertiary: "orange",
    border: "#2C4E8055",
    signature: "#00215E",
    socials: "#00215E",
  },
  displayStyle: () => ({ from: "red", to: "blue" }),
};

export const useThemeStore = create<ThemeStore>()((set, get) => ({
  currentThemeId: "binary",
  themes: [binaryTheme, candySky],
  getCurrentTheme: () =>
    get().themes.find((t) => t.id == get().currentThemeId) || binaryTheme,
  setTheme: (id) => set({ currentThemeId: id }),
}));
