import { CART_ACTIONS } from "../constants";
import { CartItem } from "../types";

export type CartAction =
    | { type: typeof CART_ACTIONS.INCREASE; payload: CartItem }
    | { type: typeof CART_ACTIONS.DECREASE; payload: { id: number } }
    | { type: typeof CART_ACTIONS.REMOVE; payload: { id: number } };

export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
    switch (action.type) {
        case CART_ACTIONS.INCREASE: {
            const item = state.find((i) => i.id === action.payload.id);
            if (!item) {
                return [...state, { ...action.payload, productQuantity: 1 }];
            }

            return state.map((i) =>
                i.id === item.id
                    ? { ...i, productQuantity: i.productQuantity + 1 }
                    : i
            );
        }

        case CART_ACTIONS.DECREASE: {
            const item = state.find((i) => i.id === action.payload.id);

            if (!item) return state;

            if (item.productQuantity === 1) {
                return state.filter((i) => i.id !== item.id);
            }

            return state.map((i) =>
                i.id === item.id
                    ? { ...i, productQuantity: i.productQuantity - 1 }
                    : i
            );
        }

        case CART_ACTIONS.REMOVE: {
            return state.filter((i) => i.id !== action.payload.id);
        }

        default:
            return state;
    }
}
