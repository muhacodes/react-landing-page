import React from "react";

function Button({ text }) {
  return (
    <button className="bg-redbutton text-white w-48 h-20"> {text} </button>
  );
}

export default Button;
