import { useState, FormEvent } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";

import { api } from "../../lib/axios";
import { Sidemenu } from "../../components/Sidemenu";
import { ChatMessage } from "../../components/ChatMessage";

export function Home() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "Como posso te ajudar",
    },
  ]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    let response = await api({ prompt: input });

    response = response.data.split("\n").map((line: string) => <p>{line}</p>);

    setChatLog([
      ...chatLog,
      {
        user: "me",
        message: `${input}`,
      },
      {
        user: "gpt",
        message: response,
      },
    ]);
    setInput("");
  }

  return (
    <div className="flex bg-backgroundHome text-white absolute top-0 bottom-0 right-0 left-0 text-center">
      <Sidemenu />
      <section className="flex-1 bg-backgroundChatBoxHome relative overflow-y-auto">
        <div className="text-left whitespace-pre-wrap">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>

        <div className="p-6 absolute bottom-0 left-0 right-0">
          <form onSubmit={handleSubmit}>
            <input
              className="bg-backgroundInputHome w-11/12 p-3 text-white text-2xl rounded-md border-0 m-3 outline-none resize-none "
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button className="relative right-12" onClick={handleSubmit}>
              <PaperPlaneTilt size={20} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
