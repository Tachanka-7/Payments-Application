"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className="bg-slate-500 text-slate-100 text-2xl"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
    
  );
};
