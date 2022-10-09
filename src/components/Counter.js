import React from "react";
import { useState, useEffect, useRef } from "react";

const Counter = () => {
  const [counterSec, setCounterSec] = useState(30);
  // const [sec, setSec] = useState(30);
  const countRef = useRef(counterSec);
  countRef.current = counterSec;
  setTimeout(() => {
    if (counterSec !== 1) {
      setCounterSec(countRef.current - 1);
    } else {
      setCounterSec(30);
    }
    // console.log(counterMilliSec);
  }, 1000);
  return (
    <div>
      <span>{counterSec} seconds</span>
    </div>
  );
};

export default Counter;
