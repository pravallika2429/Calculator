import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("0");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1) || "0");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (input === "0" && value !== ".") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="p-5 rounded-lg shadow-lg  w-100 bg-gray-800">
        <input
          type="text"
          value={input}
          className="w-full mb-9 p-5 text-right text-4xl bg-cyan-600 text-white rounded"
        />
        <div className="grid grid-cols-4 gap-3">
          {["AC","DEL","%","/","7","8","9","*","4","5","6","-","1","2","3","+","00","0",".","=",
          ].map((button) => (
            <button
              key={button}
              onClick={() => handleClick(button)}
              className={`w-16 h-16 flex items-center justify-center rounded-full text-white font-bold text-2xl hover:opacity-50              
                ${["+", "-", "*", "/", "%", "=","AC", "DEL"].includes(button) ? "bg-purple-400" : ""}
                ${!["AC", "DEL", "=", "+", "-", "*", "/", "%"].includes(button) ? "bg-rose-400" : ""}
              `}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
