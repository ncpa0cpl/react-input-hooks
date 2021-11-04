import { RadioGroupProps, RadioOptions } from "./radio-group.types";
import React from "react";
import { Radio } from "./radio";

export const RadioGroup = <T,>({
  options,
  name,
  inputStyle,
  labelStyle,
  selected,
  onChange,
}: RadioGroupProps<T>) => {
  const [checkedIndex, setCheckedIndex] = React.useState<number | undefined>(
    undefined
  );
  const [checkedOption, setCheckedOption] = React.useState<
    RadioOptions[number] | undefined
  >(undefined);

  const handleRadioClick = (value: string | number) => {
    const index = Number(value);

    const opt = options[index];

    if (opt) {
      setCheckedIndex(index);
      setCheckedOption(opt);
      if (onChange) onChange(opt.value, index);
    }
  };

  React.useEffect(() => {
    if (selected === undefined) {
      setCheckedIndex(undefined);
      setCheckedOption(undefined);
      if (onChange) onChange(undefined, -1);
      return;
    }

    if (selected !== checkedIndex) handleRadioClick(selected);
  }, [selected]);

  React.useEffect(() => {
    if (!checkedIndex) return;

    const opt = options[checkedIndex];

    if (!opt) return;

    if (opt !== checkedOption) {
      handleRadioClick(checkedIndex);
    }
  }, [options]);

  return (
    <>
      {options.map((opt, index) => (
        <Radio
          key={index}
          name={name}
          onClick={handleRadioClick}
          value={`${index}`}
          inputProps={{
            checked: index === checkedIndex,
            style: inputStyle,
          }}
          labelProps={{ children: opt.label, style: labelStyle }}
        />
      ))}
    </>
  );
};
