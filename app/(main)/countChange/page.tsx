"use client";

import { useState } from "react";

const CountChange = () => {
  const [toggle, setToggle] = useState(true);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const handleChangeButton = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="pt-20 h-screen bg-blue-200">
      <div className="max-5xl mx-auto px-4">
        <div className="text-center">
          <button
            onClick={handleChangeButton}
            className="rounded-md border-2 border-gray-500 bg-red-200 px-2 py-1 font-semibold"
          >
            Change
          </button>
        </div>
        <div className="mt-8">
          {toggle ? <Count key="A" title="カウントA" count={countA} setCount={setCountA}/> : <Count key="B" title="カウントB" count={countB} setCount={setCountB}/>}
        </div>
      </div>
    </div>
  );
};

const Count = ({title,count,setCount} : {title:string; count:number; setCount:React.Dispatch<React.SetStateAction<number>>}) => {
  const handleCountUp = () => {
    setCount((prev) => prev + 1);
  };

  const handleCountDown = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h2 className="text-center font-semibold text-4xl">{title}:{count}</h2>
      <div className="flex justify-center gap-x-3 mt-5">
        <button
          onClick={handleCountUp}
          className="rounded-md border-2 border-gray-500 p-2 bg-white leading-4"
        >
          ＋
        </button>
        <button
          onClick={handleCountDown}
          className="rounded-md border-2 border-gray-500 p-2 bg-white leading-4"
        >
          －
        </button>
      </div>
    </>
  );
};

export default CountChange;
