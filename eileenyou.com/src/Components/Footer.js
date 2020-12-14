import React from 'react';

import "./Footer.css";
import { FiCode, FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <FiCode />
                <FiGithub />
                <FiMail />
                <FiLinkedin />
            </div>
            <p>© Eileen You 2020</p>
        </div>
    );
}

export default Footer;