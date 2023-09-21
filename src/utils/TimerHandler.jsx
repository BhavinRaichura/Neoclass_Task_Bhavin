import React, { useState, useRef, useEffect } from "react";
import testEndHandler from "./TestEndHandler";

export const getTimeRemaining = (prevTime) => {
  const newDate = new Date();
  const total = Date.parse(prevTime) - Date.parse(newDate);
  return {
    total,
    newDate,
  };
};


export const TimerHandler = ({ handler = () => {}, durationInSecond }) => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00");

  function startTimer(duration) {
    let timer = duration,
      minutes,
      seconds;
    Ref.current = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setTimer(minutes + ":" + seconds);

      if (--timer < 0) {
        clearInterval(Ref.current);
        return handler();
      }
    }, 1000);
  }

  useEffect(() => {
    startTimer(durationInSecond - 1);
    return () => {
      return clearInterval(Ref.current);
    };
  }, []);

  return <span>{timer}</span>;
};

export default testEndHandler(TimerHandler);
