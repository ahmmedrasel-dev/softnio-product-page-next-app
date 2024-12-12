"use client";
import React, { useState } from "react";

const ColorVarient = ({ color, onColorChange }) => {
  return (
    <>
      <p className="text-sm text-gray-600">Band Color</p>
      <div className="flex items-center gap-2">
        {color.map((item) => (
          <div key={item.id}>
            <input
              type="radio"
              className="btn-check"
              name="bandColor"
              id={`color${item.id}`}
              defaultValue="Black"
              autoComplete="off"
              onChange={() => onColorChange(item.id)}
            />
            <label
              className={`color-circle ${
                item.name == "Black"
                  ? "black"
                  : item.name == "Blue"
                  ? "blue"
                  : item.name == "Cyan"
                  ? "cyan"
                  : "violet"
              }`}
              htmlFor={`color${item.id}`}
            ></label>
          </div>
        ))}
      </div>
    </>
  );
};

export default ColorVarient;
