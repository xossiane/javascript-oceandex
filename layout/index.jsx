import Background from "@atoms/Background";
import Footer from "@organisms/Footer";
import Header from "@organisms/Header";
import SkipLink from "@atoms/SkipLink";
import styles from "./styles.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <SkipLink />
      <Header />
      <div id="content" className={styles[`content`]}>
        {children}
      </div>
      <Background />
      <Footer />
    </>
  );
}
