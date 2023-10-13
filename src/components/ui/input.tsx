import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 flex-shrink-0 mt-8 md:mt-4 px-3 py-2 md:h-12 md:w-1/4 rounded-md border bg-slate-200 bg-opacity-40 text-black dark:text-white text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 border-slate-900 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

/////////////////////////////////
///// Debounced input below /////
/////////////////////////////////

export default function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 300,
  className,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      className={cn(
        "flex h-9 flex-shrink-0 mt-8 md:mt-4 px-3 py-2 md:h-12 md:w-1/4 rounded-md border bg-slate-200 bg-opacity-40 text-black dark:text-white text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 border-slate-900 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        className
      )}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
