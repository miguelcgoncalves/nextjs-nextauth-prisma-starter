import React from "react";
import cn from "classnames";

export default React.forwardRef(function TextInput(
  {
    error,
    ...inputProps
  }: {
    required?: boolean;
    error?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    autoComplete?: string;
  },
  ref: any
) {
  return (
    <>
      <input
        ref={ref}
        className={cn(
          "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none",
          { "border-red-500 focus:border-gray-300": error }
        )}
        {...inputProps}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </>
  );
});
