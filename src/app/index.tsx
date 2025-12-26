import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import ProductsPage from "@/pages/products";
import ErrorFallback from "@/pages/error";
// import CartPage from "@/pages/cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorFallback />,
        children: [
            {
                index: true,
                element: <ProductsPage />,
            },
        ],
    },
]);

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
