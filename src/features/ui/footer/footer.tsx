import "./footer.css";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-text">© {year} TeeRex Store</p>
        </footer>
    );
}
