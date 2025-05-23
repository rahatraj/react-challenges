import React from 'react';

function InputTimer({ handleChange, handleStart }) {
  return (
    <div className="text-xl mt-10 flex flex-col items-center">
      <div className="max-w-sm flex gap-4 items-center justify-center p-4 rounded-xl shadow-md">
        <input
          className="w-16 p-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="hours"
          id="hours"
          placeholder="HH"
          onChange={handleChange}
        />
        <span>:</span>
        <input
          className="w-16 p-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="minutes"
          id="minutes"
          placeholder="MM"
          onChange={handleChange}
        />
        <span>:</span>
        <input
          className="w-16 p-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="seconds"
          id="seconds"
          placeholder="SS"
          onChange={handleChange}
        />
      </div>
      <button
        onClick={handleStart}
      >
        Start
      </button>
    </div>
  );
}

export default InputTimer;
