import "../styling/footer.css";

function Footer({ dark }) {
    return (
        <footer className={`footer ${dark ? 'text-white' : 'text-gray-900'}`}>
            <div className="footer-content">
                &copy; 2025 Agagwo Victor. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;