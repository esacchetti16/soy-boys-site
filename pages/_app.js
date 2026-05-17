import '../styles/globals.css';
import '../styles/site-polish.css';
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
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Luckiest+Guy&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
        <meta property="og:image" content="https://soyboyskitchen.com/thumbnail.png" />
        <meta property="twitter:image" content="https://soyboyskitchen.com/thumbnail.png" />
        <link rel="icon" type="image/png" href="/images/soy-boy-2-cropped.PNG" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
