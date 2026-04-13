import '../styles/globals.css';
import '../styles/products-mobile.css';
import '../styles/services-mobile.css';
import '../styles/locations-mobile.css';
import '../styles/instagram-mobile.css';
import '../styles/about-mobile.css';
import '../styles/contact-mobile.css';
import '../styles/footer-mobile.css';
import '../styles/footer-responsive.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
