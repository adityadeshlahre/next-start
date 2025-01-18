"use client";

import { use, useEffect, useState } from "react";

const RandomFucnio = () => {
  // Implement a button, a timer and counter.
  // On page load, the timer will start from 10 and end at 0.
  // The button click increments the counter by 1 until the timer expires.
  // The button should disappear once the timer expires.

  const [timer, setTimer] = useState(10);
  const [counter, setCounter] = useState(0);
  const [isExpired, setIsExpired] = useState(false);

  const handleClick = () => {
    if (isExpired) return;
    setCounter(counter + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      if (timer >= 0) {
        setTimer(timer - 1);
      } else {
        setIsExpired(true);
      }
    }, 1000);
  }, [timer]);

  return (
    <>
      <div>
        <h1>Timer: {timer}</h1>
        <h1>Counter: {counter}</h1>
        {!isExpired ? <button onClick={handleClick}>Click me</button> : <></>}
      </div>
    </>
  );
};

export default RandomFucnio;
