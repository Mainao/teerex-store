import { Outlet } from "react-router";
import { Header } from "@/features/ui/header";
import { Footer } from "@/features/ui/footer";

export default function AppLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
