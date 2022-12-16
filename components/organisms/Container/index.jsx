import Header from "@organisms/Header";
import Line from "@atoms/Line";
import Background from "@atoms/Background";
import styles from "./styles.module.scss";

export default function Container({ children }) {
  return (
    <div className={styles[`Container`]}>
      <Header className={styles[`Container__header`]} />
      <Line />
      <article className={styles[`Container__article`]}>{children}</article>
      <Background />
      <Line />
    </div>
  );
}
