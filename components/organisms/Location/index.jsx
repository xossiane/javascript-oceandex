import styles from "./styles.module.scss";
import Text from "@atoms/Text";

export default function Location() {
  return (
    <div className={styles[`Location`]}>
      <Text color="black" size="large" className={styles[`Location__title`]}>
        Atlantic Ocean
      </Text>
      <article>
        <img
          src="../assets/images/oceans/AtlanticOcean.jpg"
          className={styles[`Location__img`]}
          alt="Atlantic ocean"
        ></img>
      </article>
    </div>
  );
}
