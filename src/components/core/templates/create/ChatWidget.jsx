import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CHATRA_ID = import.meta.env.VITE_CHATRA_ID;

const ChatWidget = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const el = document.getElementById('chatra');
    if (el) {
      if (pathname.startsWith('/designs/')) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    }
  }, [pathname]);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://call.chatra.io/chatra.js';
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
