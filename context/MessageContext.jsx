"use client";

import { createContext, useContext, useState, useEffect } from "react";

const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const fetchMessages = () => {
    fetch("/api/messages", { cache: "no-store"})
    .then((res) => {
        if (!res.ok) throw new Error("API tidak ditemukan");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setMessages(data);
        }
      })
      .catch((err) => console.error("Gagal mengambil pesan:", err));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <MessageContext.Provider value={{ messages, fetchMessages }}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  return useContext(MessageContext);
}