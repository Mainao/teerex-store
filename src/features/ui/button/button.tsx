import React from "react";
import "./Button.css";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: ButtonProps) {
    const finalClassName = `btn btn-${variant} btn-${size} ${className}`;

    return (
        <button className={finalClassName} {...props}>
            {children}
        </button>
    );
}
