// pages/index.js
import Head from 'next/head';
import Header from '../components/index/Header';
import Main from '../components/index/Main';
import Footer from '../components/Footer';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Html} from "next/document";

const Home: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return(
        <Head>
            <title>onepersonhere</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="portfolio" />
            <link rel="icon" href="/assets/img/Logos/favicon-32x32.png" />
            <Header />
            <Main />
            <Footer />
        </Head>
    );
}

export default Home;