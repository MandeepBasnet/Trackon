import React from "react";
import "./Button.css";

type Variant = "primary" | "secondary" | "tertiary" | "link" | "dark";
type Size = "small" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  iconLeading,
  iconTrailing,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`.trim()}
      {...props}
    >
      {iconLeading && <span className="btn-icon">{iconLeading}</span>}
      <span className="btn-text">{children}</span>
      {iconTrailing && <span className="btn-icon">{iconTrailing}</span>}
    </button>
  );
};

export default Button;
