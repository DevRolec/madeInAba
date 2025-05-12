import { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/YOUR-ID-HERE/default";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return null; // it's just script injection
};

export default LiveChat;
