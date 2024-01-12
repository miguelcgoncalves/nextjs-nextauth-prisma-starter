import React from "react";

export default function SubmitButton({
  title,
  className,
  ...props
}: {
  title: string;
  className?: string;
}) {
  return (
    <button
      className={`w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none ${className}`}
      {...props}
    >
      {title}
    </button>
  );
}
