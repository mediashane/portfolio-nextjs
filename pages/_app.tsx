import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Shane Smith</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    name="description"
                    content="Software Developer, Shane Smith. I'm an experienced engineer who's shipped projects and products for some of the biggest brands and companies in the world. 
            Web, mobile and desktop - I work in all environments with creativity, flexibility and reliability."
                />

                <meta property="og:title" content="Shane Smith" />
                <meta
                    property="og:description"
                    content="Software Developer, Shane Smith. I'm an experienced engineer who's shipped projects and products for some of the biggest brands and companies in the world. 
            Web, mobile and desktop - I work in all environments with creativity, flexibility and reliability."
                />
                <meta property="og:url" content="https://mediashane.com/" />
                <meta property="og:type" content="website" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
