import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline";
}

export default function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  const base =
    "px-6 py-3 font-semibold rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accentHover shadow-[0_0_15px_rgba(59,130,246,0.6)]"
      : "border border-accent text-accent hover:bg-accent hover:text-white";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
