import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export const useMobile = () => {
  const [isMobile, setMobile] = useState(false);
  const result = useMediaQuery("(max-width:640px)");
  useEffect(() => {
    setMobile(result);
  });
  return isMobile;
};
