import { useEffect, useState } from "react";
import "./App.css";
import InputTimer from "./InputTimer";
import ShowTime from "./ShowTime";

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false)
  const [timerId, setTimerId] = useState(0)

  const resetTime = () => {
    setHours(0)
    setMinutes(0)
    setSeconds(0)
    clearInterval(timerId)
  }
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    console.log(value)
    const id = e.target.id;

    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else if (id === "seconds") {
      setSeconds(value);
    }
  };
  const handleStart = () => {
    if(hours <= 0 || hours > 24 || minutes <= 0 || minutes > 59 || seconds <= 0 || seconds > 59){
      alert('Invalid Input')
      return;
    }else{
      setIsStart(true)
    }
  }
  const handleRestart = () => {
    setIsPaused(false)
    timerRunner(seconds,minutes,hours)
  }
  const handlePause = () => {
    setIsPaused(true)
    clearInterval(timerId)
  }

  const handleReset = () => {
    setIsStart(false)
    resetTime();
  }

  const timerRunner = (sec,min,hr,tid) => {
    if(sec > 0){
      setSeconds((s)=> s - 1)
    }else if(sec === 0 && min > 0){
      setSeconds(59)
      setMinutes((m)=> m - 1)
    }else if(min === 0){
      setHours((h)=> h - 1)
      setSeconds(59)
      setMinutes(59)
    }

    if(sec == 0 && min === 0 && hr === 0){
      handleReset();
      alert('timer has been finished.')
      clearInterval(tid)
      return;
    }
  }
  useEffect(()=> {
    let tid;
    if(isStart){
      tid = setInterval(() => {
        timerRunner(seconds,minutes,hours,tid)
      }, 1000);
      setTimerId(tid)
    }

    return () => {
      clearInterval(tid)
    }
  },[isStart,hours,minutes,seconds])
  return (
    <div className="flex flex-col">
      <h1>Countdown Timer</h1>
      {!isStart && (
        <InputTimer 
          handleChange={handleChange}
          handleStart={handleStart}
        />
      )}

      {isStart && (
        <ShowTime 
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          isPaused={isPaused}
          handlePause={handlePause}
          handleReset={handleReset}
          handleRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
