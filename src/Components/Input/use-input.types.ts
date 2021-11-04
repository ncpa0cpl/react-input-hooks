import { InputProps } from "./input.types";

export type UseInputComponent = React.FC<
  Omit<InputProps, "value" | "defaultValue" | "onChange">
>;

export type UseInputResult = {
  Component: UseInputComponent;
  value: string;
  setValue(value: string): void;
};
