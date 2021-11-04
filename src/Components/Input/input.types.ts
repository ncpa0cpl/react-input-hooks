export type InputProps = {
  [K in keyof React.InputHTMLAttributes<HTMLInputElement>]: React.InputHTMLAttributes<HTMLInputElement>[K];
};
