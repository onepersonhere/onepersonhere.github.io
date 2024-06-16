import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    {/* Load jQuery and Bootstrap JS from the correct version */}
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* Load custom scripts */}
                    <script src="/assets/js/aos.min.js"></script>
                    <script src="/assets/js/bs-init.js"></script>
                    <script src="/assets/js/button-cv.js"></script>
                    <script src="/assets/js/index.mjs" type="module"></script>
                    <script src="/assets/js/theme.js"></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;