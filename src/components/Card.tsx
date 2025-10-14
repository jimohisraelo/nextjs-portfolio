import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="p-6 rounded-lg shadow-soft bg-white dark:bg-dark border border-gray-100 dark:border-gray-800">
      {children}
    </div>
  );
}
