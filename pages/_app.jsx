import "../styles/globals.scss";
import Footer from "@molecules/Footer"
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
