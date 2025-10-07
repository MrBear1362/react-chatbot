import { useState } from "react";
import { ChatInput, ChatMessages } from "../components/Chat";

const defaultMessages = [
  {
    id: 1,
    type: "user",
    content: "One message to rule them all",
  },
  {
    id: 2,
    type: "bot",
    content: "One bot to answer it",
  },
];

export default function ChatThread() {
  const [messages, setMessages] = useState(defaultMessages);

  const addMessage = (content) => {
    const newMessage = {
      id: messages.length + 1,
      type: "user",
      content: content,
    };

    setMessages([...messages, setMessages]);
  };

  return (
    <main className="chat-container">
      <ChatMessages messages={messages} />
      <ChatInput onAddMessage={addMessage} />
    </main>
  );
}
