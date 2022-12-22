import Header from "@organisms/Header";
import Background from "@atoms/Background";
import styles from "./styles.module.scss";

export default function Container({ children }) {
  return (
    <div className={styles[`Container`]}>
      {/* <Header className={styles[`Container__header`]} /> */}
      <article className={styles[`Container__article`]}>{children}</article>
      {/* <Background /> */}
      {/* <Footer className={styles[`Container__footer`]} /> */}
    </div>
  );
}
