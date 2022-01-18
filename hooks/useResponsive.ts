// https://javascript.plainenglish.io/useresponsive-writing-your-own-react-hook-for-handling-responsive-display-sizes-5fe36cc0c067

import { useEffect, useMemo, useState } from "react";

export enum DisplaySize {
    NotSupported = 0,
    MobileS = 320,
    MobileM = 375,
    MobileL = 425,
    Tablet = 768,
    ComputerS = 1024,
    ComputerM = 1440,
    ComputerL = 2560,
}

export const determineDisplaySize = (width: number) => {
    if (width >= DisplaySize.Tablet) {
      if (width >= DisplaySize.ComputerM) {
        if (width >= DisplaySize.ComputerL) {
            return DisplaySize.ComputerL;
        } else {
            return DisplaySize.ComputerM;
        }
      } else if (width >= DisplaySize.ComputerS) {
            return DisplaySize.ComputerS;
      } else {
            return DisplaySize.Tablet;
      }
    } else if (width >= DisplaySize.MobileM) {
      if (width >= DisplaySize.MobileL) {
        return DisplaySize.MobileL;
      } else {
        return DisplaySize.MobileM;
      }
    } else if (width >= DisplaySize.MobileS) {
        return DisplaySize.MobileS;
    } else {
        return DisplaySize.NotSupported;
    }
}

const useResponsive = () => {
  const [ currentDisplaySize, setCurrentDisplaySize ] = useState(determineDisplaySize(window.innerWidth));

  useEffect(() => {
    const handler = () => setCurrentDisplaySize(determineDisplaySize(window.innerWidth));
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return useMemo(() => currentDisplaySize, [currentDisplaySize]);
}

export default useResponsive;