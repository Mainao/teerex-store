import React from "react";
import "./checkbox.css";

type CheckboxProps = {
    label: string;
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Checkbox({ label, name, checked, onChange }: CheckboxProps) {
    return (
        <label className="checkbox">
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <span className="checkbox-label">{label}</span>
        </label>
    );
}
