import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Chatbot from "./components/Chatbot";
import "./index.css";

const root = document.getElementById("root");
if (root) {
  const handleClose = () => {
    try {
      window.parent.postMessage({ type: "BG_CHAT_CLOSE" }, "*");
    } catch {
      // ignore if no parent
    }
  };

  createRoot(root).render(
    <StrictMode>
      <Chatbot embedded={true} onClose={handleClose} />
    </StrictMode>
  );
}
