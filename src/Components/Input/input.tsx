import { InputProps } from "./input.types";
import React from "react";

export const Input: React.FC<InputProps> = (props) => {
  return <input {...props} />;
};
