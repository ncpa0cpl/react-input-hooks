import React from "react";
import { RadioOptions } from "./radio-group.types";
export declare type UseRadioResult<T> = {
    Component: React.FC<{
        inputStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
    }>;
    selectedValue: T | undefined;
    setOptions(value: RadioOptions<T> | ((currentOptions: RadioOptions<T>) => RadioOptions<T>)): void;
    selectOption(optionIndex: number | undefined): void;
};
