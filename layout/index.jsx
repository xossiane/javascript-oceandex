import Background from "@atoms/Background";
import Footer from "@organisms/Footer";
import Header from "@organisms/Header";
import styles from "./styles.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles[`content`]}>{children}</div>
      <Background />
      <Footer />
    </>
  );
}
