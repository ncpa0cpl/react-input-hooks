/// <reference types="react" />
export declare type RadioOptions<T = unknown> = {
    label: string;
    value: T;
}[];
export declare type RadioGroupProps<T = unknown> = {
    name: string;
    options: RadioOptions<T>;
    inputStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    selected?: number;
    onChange?(option: T | undefined, index: number): void;
};
