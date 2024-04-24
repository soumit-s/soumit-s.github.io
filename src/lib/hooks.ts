import { useMediaQuery } from "usehooks-ts";

export const useMobile = () => useMediaQuery("(max-width:640px)");
