import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer: React.FunctionComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="logo-text">BuriWeb</h2>
                    <p style={{ fontSize: "15px", textAlign: "justify" }}>
                        Somos BuriWeb, un grupo de jóvenes universitarios, interesados por la cultura de nuestra región, con este emprendimiento, buscamos que más personas, ya sean del país o turistas de diversos países, conozcan más sobre la cultura, historia y artesanías que hay en Cochas Chico.
                    </p>
                    <div className="contact" style={{ marginTop: "30px" }}>
                        <span><i className="fas fa-phone"></i> &nbsp; +51 960 070 475</span>
                        <span><i className="fas fa-envelope"></i> &nbsp; cochaschico272@gmail.com</span>
                    </div>
                    {/* <div className="socials">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><BiLogoGmail /></a>
                    </div> */}
                </div>

                <div className="footer-section links">
                    <h2>Nuestros Valores</h2>
                    <br />
                    <ul>
                        <a href="#"><li>Honestidad</li></a>
                        <a href="#"><li>Diversidad</li></a>
                        <a href="#"><li>Respeto de</li></a>
                        <a href="#"><li>Empatia</li></a>
                    </ul>
                </div>

                <div className="footer-section contact-form">
                    <h2>Contacto</h2>
                    <br />
                    <form action="index.html" method="post">
                        <input type="email" name="email" className="text-input contact-input" placeholder="Tu correo..." />
                        <textarea name="message" className="text-input contact-input" placeholder="Tu mensaje..."></textarea>
                        <button type="submit" className="btn btn-big">
                            <i className="fas fa-envelope"></i>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; Cochas Chico - Huancayo - 2024
            </div>
        </footer>
    )
}

export default Footer