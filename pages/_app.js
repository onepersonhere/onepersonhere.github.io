// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import '../public/assets/css/animate.min.css';
import '../public/assets/css/Features-Image-images.css';
import '../public/assets/css/Navbar-Right-Links-Dark-icons.css';
import '../public/assets/css/renderCanvas.css';
import '../public/assets/css/styles.css';
import '../styles/globals.css';

import { useEffect } from 'react';
import AOS from 'aos';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init();
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;