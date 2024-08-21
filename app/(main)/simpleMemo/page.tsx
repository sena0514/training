"use client";

import { comment } from "postcss";
import { ChangeEvent, useState } from "react";

const SimpleMemo = () => {
  const [inputText, setInputText] = useState("");
  const [memoList, setMemoList] = useState<string[]>([]);

  const handleInputText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleInputButton = () => {
    if (!inputText.trim()) return;
    setMemoList((prev) => [...prev, inputText]);
    setInputText("");
  };

  const deleteButton = (index: number) => {
    setMemoList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-10">
      <div className="px-4">
        <div className="mx-auto w-96 p-5 rounded-md shadow-lg bg-blue-200">
          <div className="flex flex-col items-center">
            <h2 className="text-xl text-center">MEMO</h2>
            <textarea
              name=""
              id=""
              onChange={handleInputText}
              value={inputText}
              className="resize-none w-72 h-28 p-4 mt-5 rounded-md border border-blue-500 text-center focus:outline-none focus:ring-2 focus:ring-blue-700"
              placeholder="メモを入力"
            ></textarea>
            <div className="mt-5">
              <button
                onClick={handleInputButton}
                className="rounded-md bg-blue-700 text-white px-3 py-1 transition-colors duration-300 hover:bg-blue-600"
              >
                追加
              </button>
            </div>
          </div>
          <ul className="mt-5 flex flex-col gap-y-3">
            {memoList.map((comment, index) => (
              <li
                key={index}
                className="flex justify-between px-4 py-3 rounded-md bg-white"
              >
                <p>{comment}</p>
                <button
                  onClick={() => deleteButton(index)}
                  className="bg-red-500 px-3 py-1 rounded-md text-white transition-opacity duration-300 hover:opacity-80"
                >
                  削除
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimpleMemo;
