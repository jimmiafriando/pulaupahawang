import React from 'react';
import "../components/Footer.css"

const Footer = () => {
    return(
        <div className="main-footer">
                {/* Logo */}
                <div className='logo'>
                    <img src="/assets/logowhite.png" alt="#"/>
                </div>
                {/* contact */}
                <div className='contact'>
                        <img className='icon' src="/assets/instagram.svg" alt="#"/>
                        <img className='icon' src="/assets/line.svg" alt="#"/>
                        <img className='icon' src="/assets/mail.svg" alt="#"/>
                        <img className='icon' src="/assets/whatsapp.svg" alt="#"/>  
                </div>
        </div>
    )
}

export default Footer;