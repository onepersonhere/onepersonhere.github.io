// pages/index.js
import Header from '../components/index/Header';
import Main from '../components/index/Main';
import Footer from '../components/Footer';

import React, { useEffect } from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return(
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default Home;