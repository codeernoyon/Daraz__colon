import React, { useState } from 'react';


export default function Input({ className, placeholder }) {
  const [inputs, setInput] = useState("");
  function inputHandler(e) {
    setInput(e.target.value);
  }
  return (
    <input className={className} type="text" value={inputs} onChange={inputHandler} placeholder={placeholder} />
  );
}
