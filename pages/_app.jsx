import "../styles/globals.scss";
import Head from "next/head";
import Header from "@organisms/Header";
import Footer from "@organisms/Footer";
import Layout from "components/layout";
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
