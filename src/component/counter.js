import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function incrementHandler() {
    setCount(count + 1);
  }
  function decrementHandler() {
    setCount(count - 1);
  }
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="wrapper w-[100vw] h-[100vh] flex items-center justify-center flex-col gap-10 bg-[#344151]">
      <div className="text-[#0398d4] font-medium text-2xl">
        Increment & Decrement
      </div>
      <div className=" bg-[white] flex flex-row justify-center  gap-12 py-3 rounded-sm text-[25px] text-[#344151] ">
        <button
          onClick={incrementHandler}
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          +
        </button>
        <div className="font-bold gap-12 text-5xl ">{count}</div>
        <button
          onClick={decrementHandler}
          className="border-l-2 text-center w-20 border-[#bfbfbf]  text-5xl"
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={resetHandler}
          className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg "
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
