"use client";

import { NextPage } from "next";
import { useState } from "react";

const CountUpdate: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-10">
      <CountResult title="カウント" count={count} />
      <div className="mt-5">
        <CountChange setCount={setCount} />
      </div>
    </div>
  );
};

const CountResult = ({ title, count } : {title:string; count:number}) => {
  return (
    <h2 className="text-center text-4xl font-semibold">
      {title}:{count}
    </h2>
  );
};

const CountChange = ({ setCount } : {setCount: React.Dispatch<React.SetStateAction<number>> }) => {
  const handleCountUp = () => {
    setCount((prev) => prev + 1);
  };

  const handleCountDown = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex justify-center gap-x-4">
      <button 
      onClick={handleCountUp}
      className="border-2 border-gray-500 rounded-md leading-4 p-2">
        ＋
      </button>
      <button 
      onClick={handleCountDown}
      className="border-2 border-gray-500 rounded-md leading-4 p-2">
        －
      </button>
    </div>
  );
};

export default CountUpdate;
