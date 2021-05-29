import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="text-center bg-dark footer-area py-4">
            <div className="social-icon">
                <Link className="fb" to="/"><FontAwesomeIcon icon={faFacebookF} /></Link>
                <Link className="wa" to="/"><FontAwesomeIcon icon={faWhatsapp} /></Link>
                <Link className="ig" to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link className="tr" to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
            </div>

            <p>CopyRight &copy; 2021 Team-68</p>
        </div>
    );
};

export default Footer;