import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/4xb21wasyag5eavozeojjymbwbgv2yvb.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script tag when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return null;
};
