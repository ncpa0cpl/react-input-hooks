import { RadioProps } from "./radio.types";
import React from "react";

export const Radio: React.FC<RadioProps> = ({
  inputProps,
  labelProps,
  name,
  value,
  onClick,
}) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        onChange={() => {}}
        onClick={() => {
          if (onClick) onClick(value);
        }}
        {...inputProps}
      />
      <label
        onClick={() => {
          if (onClick) onClick(value);
        }}
        {...labelProps}
      />
    </>
  );
};
