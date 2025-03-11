import React from "react";

function Calculator() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="p-6 rounded-lg shadow-lg w-80 bg-gray-800">
        <input
          type="text"
          value="0"
          className="w-full mb-4 p-3 text-right text-xl bg-gray-700 text-white rounded"
          readOnly
        />

        
        <div className="grid grid-cols-4 gap-3">
          {["AC", "DEL", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "="].map((button) => (
           <button
           key={button}
           className={`p-4 rounded text-white font-bold text-xl hover:opacity-50
             ${["AC", "DEL", "="].includes(button) ? "bg-red-500" : ""}
             ${["+", "-", "*", "/", "%"].includes(button) ? "bg-orange-500" : ""}
             ${!["AC", "DEL", "=", "+", "-", "*", "/", "%"].includes(button) ? "bg-gray-500" : ""}
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
