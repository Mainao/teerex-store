import {
    createContext,
    type ReactNode,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";

import { CartItem } from "./types";
import { CART_ACTIONS, STOCK_LIMIT } from "./constants";
import { cartReducer } from "./reducer/CartReducer";
import { Toast } from "../ui/toast/toast";

interface CartProviderProps {
    children: ReactNode;
}

interface CartContextValue {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (product: CartItem) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartQuantity: number;
    cartItems: CartItem[];
}

const CartContext = createContext<CartContextValue | null>(null);

export function useShoppingCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useShoppingCart must be used within a ShoppingCartProvider"
        );
    }

    return context;
}

export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
        try {
            return JSON.parse(localStorage.getItem("shopping-cart") || "[]");
        } catch {
            return [];
        }
    });

    const [toast, setToast] = useState<string | null>(null);

    const showToast = (msg: string) => setToast(msg);

    const cartQuantity = cartItems.reduce(
        (sum, item) => sum + item.productQuantity,
        0
    );

    function getItemQuantity(id: number) {
        return cartItems.find((item) => item.id === id)?.productQuantity || 0;
    }

    function increaseCartQuantity(product: CartItem) {
        debugger;
        const existing = cartItems.find((item) => item.id === product.id);

        if (existing && existing.productQuantity >= product.quantity) {
            showToast(STOCK_LIMIT);
            return;
        }

        dispatch({ type: CART_ACTIONS.INCREASE, payload: product });
    }

    function decreaseCartQuantity(id: number) {
        dispatch({ type: CART_ACTIONS.DECREASE, payload: { id } });
    }

    function removeFromCart(id: number) {
        dispatch({ type: CART_ACTIONS.REMOVE, payload: { id } });
    }

    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartItems,
                cartQuantity,
            }}
        >
            {children}
            {toast && <Toast message={toast} onClose={() => setToast(null)} />}
        </CartContext.Provider>
    );
}
