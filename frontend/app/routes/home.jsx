import { ChatMessages, ChatInput } from "../components/Chat";

export default function Home() {
  return (
    <main className="chat-container">
      {/* Using our reusable Message component with different props */}
      <ChatMessages />
      {/* Chat input area */}
      <ChatInput />
    </main>
  );
}
