import { Route, Routes } from "react-router-dom";
import "@/styles/globals.css";
import "@/styles/layout.css";
import Header from "@/features/ui/header";
import ProductsPage from "@/pages/products";

export default function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<ProductsPage />} />
            </Routes>
        </>
    );
}
