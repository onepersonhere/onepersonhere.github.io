// components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="py-3" style={{background: 'var(--bs-gray-900)', marginTop: 'auto'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start py-2">
                        <div>
                            <p className="fs-5 fw-bold mb-0">Created by Michael Kang</p>
                            <p className="mb-0">© onepersonhere, 2025</p>
                        </div>
                    </div>
                    <div
                        className="col-md-6 d-flex d-lg-flex justify-content-center align-items-center justify-content-md-end justify-content-lg-end align-items-lg-center py-2"
                        style={{paddingRight: '0px'}}>
                        <ul className="list-inline mb-0" style={{paddingLeft: '0px'}}>
                            <li className="list-inline-item">
                                <a className="link-dark" href="https://www.linkedin.com/in/michael-k/" rel="external">
                                    <i className="fab fa-linkedin fs-1 text-white me-2"
                                       data-bss-hover-animate="bounce"></i>
                                </a>
                            </li>
                            <li className="list-inline-item fs-1 me-2">
                                <a className="link-dark" href="https://github.com/onepersonhere" rel="external">
                                    <i className="fab fa-github fs-1 text-white me-2"
                                       data-bss-hover-animate="bounce"></i>
                                </a>
                            </li>
                            <li className="list-inline-item fs-1 me-2">
                                <a className="link-dark" href="https://www.instagram.com/one_personhere/"
                                   rel="external">
                                    <i className="fab fa-instagram fs-1 text-white me-2"
                                       data-bss-hover-animate="bounce"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;