import { useComponent } from "react-hookify";
import { RadioGroup } from "./radio-group";
import * as uuid from "uuid";
import React from "react";
import { RadioOptions } from "./radio-group.types";
import { UseRadioResult } from "./use-radio.types";

export const useRadio = <T>(
  options: RadioOptions<T>,
  initialOption?: number
): UseRadioResult<T> => {
  const [id] = React.useState(() => uuid.v4());
  const [selectedValue, setSelectedValue] = React.useState<T | undefined>(
    undefined
  );

  const { Component, setProps, currentProps } = useComponent(RadioGroup, {
    name: id,
    options,
    selected: initialOption,
    onChange: (v: T, index) => {
      setSelectedValue(() => v);
      setProps({ selected: index });
    },
  });

  const setOptions = (
    value:
      | ((currentOptions: RadioOptions<T>) => RadioOptions<T>)
      | RadioOptions<T>
  ) => {
    if (Array.isArray(value)) {
      setProps({ options: value });
      return;
    }

    const options = value(currentProps.current.options as RadioOptions<T>);

    setProps({ options });
  };

  const selectOption = (optionIndex: number | undefined) => {
    setProps({ selected: optionIndex });
  };

  return React.useMemo(
    () => ({
      Component,
      selectedValue,
      setOptions,
      selectOption,
    }),
    [selectedValue]
  );
};
