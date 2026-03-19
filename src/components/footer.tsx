'use client';

import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-top">
                    {/* Left Side */}
                    <div className="brand-section">
                        <div className="logo-group">
                            <div className="logo-wrapper">
                                <img
                                    src="/icon.png"
                                    alt="VingsTech Logo"
                                    className="logo-img"
                                />
                            </div>
                            <h2 className="brand-title">
                                VINGS<span className="brand-highlight">TECH</span>
                            </h2>
                        </div>
                        <div className="quote-wrapper">
                            <p className="quote-text">
                                "The best code is the code that goes unnoticed,
                                <br />
                                because it works so flawlessly."
                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="contact-section">
                        <h3 className="contact-title">
                            Chat with Developer
                        </h3>
                        <div className="social-links">
                            <a
                                href="https://www.instagram.com/vingstech.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-button instagram"
                            >
                                <Instagram size={18} />
                                <span>Instagram</span>
                            </a>
                            <a
                                href="https://wa.me/918778264166"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-button whatsapp"
                            >
                                <MessageCircle size={18} />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <p className="copyright-text">
                        © {new Date().getFullYear()} Vings Tech. Crafted with passion.
                    </p>
                    <img
                        src="/icon.png"
                        alt="Vings Tech Logo"
                        className="bottom-logo"
                    />
                    <p className="powered-text">
                        Powered by Vings Tech Projects
                    </p>
                </div>
            </div>

            <style jsx>{`
                .footer-container {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    border-top: 1px solid var(--border);
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(16px);
                    padding: 3rem 0;
                    margin-top: auto;
                }
                .footer-content {
                    max-width: 56rem;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }
                .footer-top {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    gap: 2.5rem;
                }
                @media (min-width: 768px) {
                    .footer-top {
                        flex-direction: row;
                        align-items: center;
                    }
                }
                .brand-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }
                @media (min-width: 768px) {
                    .brand-section {
                        align-items: flex-start;
                    }
                }
                .logo-group {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                .logo-wrapper {
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .logo-group:hover .logo-wrapper {
                    transform: scale(1.1);
                }
                .logo-img {
                    height: 2.5rem;
                    width: auto;
                    object-fit: contain;
                }
                .brand-title {
                    font-size: 1.25rem;
                    font-weight: 900;
                    letter-spacing: -0.025em;
                    color: var(--text-main);
                    text-transform: uppercase;
                }
                .brand-highlight {
                    color: var(--primary);
                }
                .quote-wrapper {
                    text-align: center;
                }
                @media (min-width: 768px) {
                    .quote-wrapper {
                        text-align: left;
                    }
                }
                .quote-text {
                    color: var(--text-muted);
                    font-weight: 500;
                    font-style: italic;
                    line-height: 1.25;
                    font-size: 0.95rem;
                }
                .contact-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    width: 100%;
                }
                @media (min-width: 768px) {
                    .contact-section {
                        align-items: flex-end;
                        width: auto;
                    }
                }
                .contact-title {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }
                .social-links {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    width: 100%;
                }
                @media (min-width: 768px) {
                    .social-links {
                        justify-content: flex-end;
                        width: auto;
                    }
                }
                .social-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--border);
                    border-radius: 1rem;
                    color: var(--text-muted);
                    text-decoration: none;
                    transition: all 0.2s ease;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                }
                .social-button:hover {
                    background: rgba(255, 255, 255, 0.1);
                    transform: translateY(-2px);
                }
                .social-button span {
                    font-size: 0.875rem;
                    font-weight: 700;
                }
                .social-button.instagram:hover {
                    color: #E1306C;
                    border-color: #E1306C;
                }
                .social-button.whatsapp:hover {
                    color: #25D366;
                    border-color: #25D366;
                }
                .footer-bottom {
                    margin-top: 3rem;
                    padding-top: 2rem;
                    border-top: 1px solid var(--border);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                }
                @media (min-width: 640px) {
                    .footer-bottom {
                        flex-direction: row;
                    }
                }
                .copyright-text, .powered-text {
                    font-size: 0.75rem;
                    font-weight: 500;
                    color: var(--text-muted);
                    text-align: center;
                }
                @media (min-width: 640px) {
                    .copyright-text { text-align: left; }
                    .powered-text { text-align: right; }
                }
                .bottom-logo {
                    height: 2.5rem;
                    width: auto;
                    object-fit: contain;
                }
            `}</style>
        </footer>
    );
};

export default Footer;