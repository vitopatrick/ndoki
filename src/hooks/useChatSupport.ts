import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    // Create a new script element
    const script = document.createElement("script");

    // Set the inner HTML of the script element to the Tawk.to script
    script.innerHTML = `
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/6656e6549a809f19fb368bde/default';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  `;

    // Append the script element to the body of the document
    document.body.appendChild(script);

    // Cleanup function: this function is called when the component is unmounted
    return () => {
      // Remove the script element from the body of the document
      document.body.removeChild(script);
    };
  }, []); 

  return null;
};
