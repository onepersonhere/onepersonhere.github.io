// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Head>
                <title>onepersonhere</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="portfolio" />
                <link rel="icon" href="/assets/img/Logos/favicon-32x32.png" />
            </Head>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}