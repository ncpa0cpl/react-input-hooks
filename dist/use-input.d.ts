import * as React from "react";
declare type InputProps = {
    [K in keyof React.InputHTMLAttributes<HTMLInputElement>]: React.InputHTMLAttributes<HTMLInputElement>[K];
};
declare const Input: React.FC<InputProps>;
export declare type UseInputResult = {
    Component: typeof Input;
    value: string;
    setValue(value: string): void;
};
export declare const useInput: (initValue?: string | undefined) => UseInputResult;
export {};
