import React from "react";

function ShowTime({ hours, minutes, seconds, isPaused, handlePause, handleReset, handleRestart }) {
  return (
    <div className="mt-10 flex flex-col items-center">
      {/* Time Display */}
      <div className="flex gap-3 items-center justify-center bg-gray-100 px-6 py-4 rounded-xl shadow-lg text-4xl font-mono tracking-widest text-gray-800">
        <div>{hours < 10 ? `0${hours}` : hours}</div>
        <span>:</span>
        <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
        <span>:</span>
        <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
      </div>

      {/* Control Buttons */}
      <div className="flex gap-4 mt-8">
        {isPaused ? (
          <button
            onClick={handleRestart}
          >
            Restart
          </button>
        ) : (
          <button
            onClick={handlePause}
          >
            Pause
          </button>
        )}
        <button
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default ShowTime;
