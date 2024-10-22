import { useEffect } from 'react';

const CHATRA_ID = import.meta.env.VITE_CHATRA_ID;

const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://call.chatra.io/chatra.js';
    script.onload = () => console.log('Chatra script loaded');
    script.onerror = (e) => console.error('Chatra script error:', e);
    window.ChatraID = CHATRA_ID;
    window.Chatra =
      window.Chatra ||
      function () {
        (window.Chatra.q = window.Chatra.q || []).push(arguments);
      };
    if (document.head) {
      document.head.appendChild(script);
    }
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div id="chatra-widget" />;
};

export default ChatWidget;
