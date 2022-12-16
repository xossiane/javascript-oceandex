import "../styles/globals.scss";
import Head from "next/head";
//import Footer from "@organisms/Footer";
const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Oceandex</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicon-32x32.png"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
