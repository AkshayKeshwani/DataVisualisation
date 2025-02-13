import React, { useEffect, useState } from "react";

export default function AttributeOptions(props){

    const {name, value, options, handleChange, text} = props
    
    return (
      <div class="mb-b ml-3 mt-5">
        <label class="form-label">{text}</label>
        <select
          class="form-select w-100"
          name={name}
          value={value}
          onChange={handleChange}
        >
          <option value="">Chose attribute</option>
          {options.map((option) => {
            return <option value={option}>{option}</option>;
          })}
        </select>
      </div>
    );
}



export function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}