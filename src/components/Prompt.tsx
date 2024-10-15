import { useState, useEffect } from "react";

interface PromptProps {
  sendPromptToParent: (prompt: string) => void;  // Function that accepts a string and returns void
}

export const Prompt: React.FC<PromptProps> = ({ sendPromptToParent }) => {
  const [prompt, setPrompt] = useState<string>("");
  
  useEffect(() => {
    sendPromptToParent(prompt);
  }, [prompt, sendPromptToParent]); 

  return (
    <div className="pt-3">
      <h2 className="font-semibold text-xl py-2">Prompt</h2>
      <textarea
        onChange={(e) => {
          const newPrompt = e.target.value;
          setPrompt(newPrompt);
        }}
        className="rounded-lg p-2 w-full text-black resize-none overflow-hidden h-60"
        placeholder="Enter your prompt here"
        rows={1}
        value={prompt}
      />
    </div>
  );
};
