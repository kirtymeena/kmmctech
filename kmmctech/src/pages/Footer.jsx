import noBgLogo from "../assets/noBgLogo.png"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <div className='footer'>
            <div className='footer__logo'>
                <img src={noBgLogo} alt="logo" className="footer__logo" />
            </div>
            <div className="footer__address">
                <p>
                    Heisenbergbogen 3
                    D-85609 Dornach / Munich | Germany
                    v7-sales@ingrammicro.com
                    +49 89 42080
                </p>
            </div>
            <div className="footer__details">
                <Link to="/" className="footer__link">Customer Service</Link>
                <Link to="/" className="footer__link" >Customer Service</Link>
                <Link to="/" className="footer__link">Customer Service</Link>
                <Link to="/" className="footer__link">Customer Service</Link>
                <Link to="/" className="footer__link">Customer Service</Link>
                <Link to="/" className="footer__link" >Customer Service</Link>
            </div>
            <div className="footer__social">
                Follow Us On Social
            </div>
        </div>
    )
}

export default Footer