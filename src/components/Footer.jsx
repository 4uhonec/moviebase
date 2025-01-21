

export default function Footer(){

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-text">©{currentYear} Movie Base, All rights reserved</p>
        </footer>
    )
}