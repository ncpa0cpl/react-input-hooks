import * as React from "react";
import { useComponent } from "react-hookify";
import { Input } from "./input";
import { UseInputResult } from "./use-input.types";

export const useInput = (initValue?: string): UseInputResult => {
  const [value, setInternalValue] = React.useState<string>(initValue ?? "");

  const { Component, setProps } = useComponent(Input, {
    value: value,
    onChange: ({ target: { value } }) => {
      setInternalValue(value);
      setProps({ value });
    },
  });

  const setValue = (value: string) => {
    setProps({ value });
  };

  return React.useMemo(
    () => ({
      Component,
      value,
      setValue,
    }),
    [value]
  );
};
