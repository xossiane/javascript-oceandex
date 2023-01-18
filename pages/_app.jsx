import "../styles/globals.scss";
import Head from "next/head";
import { GoogleAnalytics } from 'nextjs-google-analytics'
import Layout from "layout";
//this is for google analytics
const GID = process.env.NEXT_PUBLIC_GID


const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <GoogleAnalytics gaMeasurementId={GID} trackPageViews />
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
