/// <reference types="react" />
import { InputProps } from "./input.types";
export declare type UseInputComponent = React.FC<Omit<InputProps, "value" | "defaultValue" | "onChange">>;
export declare type UseInputResult = {
    Component: UseInputComponent;
    value: string;
    setValue(value: string): void;
};
