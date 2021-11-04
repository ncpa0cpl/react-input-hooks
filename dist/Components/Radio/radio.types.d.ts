/// <reference types="react" />
export declare type RadioProps = {
    name: string;
    value: string;
    onClick?(value: string): void;
    inputProps: Omit<{
        [K in keyof React.InputHTMLAttributes<HTMLInputElement>]: React.InputHTMLAttributes<HTMLInputElement>[K];
    }, "type" | "name" | "value">;
    labelProps: Omit<{
        [K in keyof React.InputHTMLAttributes<HTMLLabelElement>]: React.InputHTMLAttributes<HTMLLabelElement>[K];
    }, "htmlFor">;
};
