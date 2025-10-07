import { useLoaderData } from "react-router";
import { ChatInput, ChatMessages } from "../components/Chat";

export async function clientLoader({ params }) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const defaultMessages = [
    {
      id: 1,
      type: "user",
      content: `Message is in thread ${params.threadId}`,
    },
    {
      id: 2,
      type: "bot",
      content: `Bot message is in thread ${params.threadId}`,
    },
  ];

  return {
    threadId: params.threadId,
    messages: defaultMessages,
  };
}

export default function ChatThread() {
  const { threadId, messages } = useLoaderData();

  const addMessage = (content) => {
    console.log("Message sent:", content);
    console.log("(Data mutations will be implemented in the next phase)");
  };

  return (
    <main className="chat-container">
      <div className="chat-thread-header">
        <h2>Conversation Thread #{threadId}</h2>
      </div>
      <ChatMessages messages={messages} />
      <ChatInput onAddMessage={addMessage} />
    </main>
  );
}
