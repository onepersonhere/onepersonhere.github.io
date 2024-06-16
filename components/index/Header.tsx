// components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header>
            <div
                data-bss-parallax-bg="true"
                style={{
                    backgroundImage: 'url(/assets/img/Photos/IMG_9186.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '600px'
                }}
            >
                <div className="container d-flex flex-column justify-content-end align-items-start">
                    <h1 className="display-3 fw-bold">Michael Kang</h1>
                    <p
                        className="fs-2 text-badge mb-5"
                        data-bss-hover-animate="pulse"
                        style={{
                            borderRadius: '42px',
                            background: 'var(--bs-dark)',
                            color: 'rgb(199,196,191)'
                        }}
                    >
                        onepersonhere
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;