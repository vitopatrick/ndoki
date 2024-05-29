import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    // Function to load Tidio Chat
    const loadTidioChat = () => {
      const tidioScript = document.createElement("script");
      tidioScript.src = "//code.jivosite.com/widget/qMd4rgfBm5";
      tidioScript.async = true;
      document.body.appendChild(tidioScript);
    };

    // Load Tidio Chat when component mounts
    loadTidioChat();

    // Clean up function to remove Tidio Chat when component unmounts
    return () => {
      const tidioElement = document.getElementById("tidio-chat");
      if (tidioElement) {
        tidioElement.remove();
      }
    };
  }, []);

  return null;
};


