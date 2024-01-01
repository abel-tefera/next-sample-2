"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { startTransition, useState } from "react";
import { editSnippet } from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = editSnippet.bind(null, snippet.id, code);

  // OPTION 2
  // const handleClick = () => {
  //   startTransition(async () => {
  //     await editSnippetAction();
  //   });
  // };

  // OPTION 1
  // const editSnippetAction = editSnippet.bind(null, code);

  return (
    <div className="flex flex-col w-full">
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          scrollbar: { vertical: "hidden" },
        }}
        onChange={handleEditorChange}
      />
      {/* OPTION 1 */}
      <form action={editSnippetAction}>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
      {/* OPTION 2 */}
      {/* <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Save
        </button> */}
    </div>
  );
}
