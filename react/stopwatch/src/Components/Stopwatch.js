import React, { useState, useRef } from "react";

 

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="app">
      <h3>React Stopwatch</h3> <br />
      <div className="stopwatch-card">
        <h3><p>{formatTime()}</p></h3>
        
        <div className="buttons">
          {!isActive && !isPaused ? (
            <button onClick={handleStart} className="btn">Start</button>
          ) : isPaused ? (
            <button onClick={handlePause} className="btn">Pause</button>
          ) : (
            <button onClick={handleResume} className="btn">Resume</button>
          )}
          <button onClick={handleReset} disabled={!isActive} className="btn">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;



