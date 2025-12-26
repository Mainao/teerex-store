import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import ProductsPage from "@/pages/products";
import CartPage from "@/pages/cart";
import ErrorFallback from "@/pages/error";
import { CartProvider } from "@/features/cart/cart-context";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorFallback />,
        children: [
            {
                path: "/",
                element: <ProductsPage />,
            },
            {
                path: "/cart",
                element: <CartPage />,
            },
        ],
    },
]);

export default function App() {
    return (
        <>
            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
        </>
    );
}
