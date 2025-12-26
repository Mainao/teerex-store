import { useEffect } from "react";
import "./toast.css";

type ToastProps = {
    message: string;
    onClose: () => void;
};

export function Toast({ message, onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, 2000); // auto hide after 2s
        return () => clearTimeout(timer);
    }, [onClose]);

    return <div className="toast">{message}</div>;
}
