import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer: React.FunctionComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="logo-text">MiSitio</h2>
                    <p>
                        Somos una empresa dedicada a ofrecer los mejores servicios y productos. Nuestra misión es satisfacer a nuestros clientes con calidad y compromiso.
                    </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> &nbsp; +123-456-7890</span>
                        <span><i className="fas fa-envelope"></i> &nbsp; info@misitio.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><BiLogoGmail /></a>
                    </div>
                </div>

                <div className="footer-section links">
                    <h2>Enlaces rápidos</h2>
                    <br />
                    <ul>
                        <a href="#"><li>Inicio</li></a>
                        <a href="#"><li>Servicios</li></a>
                        <a href="#"><li>Acerca de</li></a>
                        <a href="#"><li>Contacto</li></a>
                        <a href="#"><li>Política de Privacidad</li></a>
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
                &copy; cochaschico.com | Jean Ramos Masgo
            </div>
        </footer>
    )
}

export default Footer