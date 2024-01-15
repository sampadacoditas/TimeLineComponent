import { useCallback, useEffect, useState } from "react";
// import { DEVICE_RATIO, DeviceType } from "../enum";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const useWindowUtils = () => {
  const [windowDimensions, setWindowDimensions] = useState<any>(
    getWindowDimensions()
  );

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return { windowDimensions };
};

export default useWindowUtils;
