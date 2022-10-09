import React from "react";
import { useState, useEffect, useRef } from "react";

const Counter = (props) => {
  const countRef = useRef(props.counterSec);
  countRef.current = props.counterSec;
  const timer = () => {
    setTimeout(() => {
      if (props.counterSec !== 1) {
        props.setCounterSec(countRef.current - 1);
      } else {
        props.refreshButtonHandler();
      }
    }, 1000);
  };
  timer();

  return (
    <div>
      <span>{props.counterSec} seconds</span>
    </div>
  );
};

export default Counter;
