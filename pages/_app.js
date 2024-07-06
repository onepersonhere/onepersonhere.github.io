import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import '../public/assets/css/animate.min.css';
import '../public/assets/css/Features-Image-images.css';
import '../public/assets/css/Navbar-Right-Links-Dark-icons.css';
import '../public/assets/css/renderCanvas.css';
import '../public/assets/css/styles.css';
import '../styles/globals.css';

import React, { useEffect } from 'react';
import Head from "next/head";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const loadScript = async (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        const loadScripts = async () => {
            try {
                await loadScript("https://code.jquery.com/jquery-3.6.0.min.js");
                await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
                await loadScript("/assets/js/aos.min.js");
                await loadScript("/assets/js/bs-init.js");
                await loadScript("/assets/js/button-cv.js");

                const script = document.createElement('script');
                script.src = "/assets/js/index.mjs";
                script.type = "module";
                document.body.appendChild(script);

                await loadScript("/assets/js/theme.js");
            } catch (error) {
                console.log(error);
            }
        };

        loadScripts();
    }, []);

    return (
        <>
            <Head>
                <title>onepersonhere</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="portfolio" />
                <link rel="icon" href="/assets/img/Logos/logo.jpeg" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;