import { useLayoutEffect, useState } from "react";

export default function useScreenSize(screenType = false) {
  const [screenSize, setScreenSize] = useState(null);
  useLayoutEffect(() => {
    function updateScreenSize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
  let screenTypeValue = "";
  if (screenType) {
    if (screenSize < 768) {
      screenTypeValue = "mobile";
    } else if (screenSize >= 768 && screenSize < 1365) {
      screenTypeValue = "tablet";
    } else {
      screenTypeValue = "desktop";
    }
    return screenTypeValue;
  }
  return screenSize;
}
