import styles from "./styles.module.scss";
import Text from "@atoms/Text";

export default function Location() {
  return (
    <div className={styles[`Location`]}>
      <Text color="black" size="medium" className={styles[`Location__title`]}>
        Atlantic Ocean
      </Text>
      <article>
        <img
          src="assets/images/realAnimals/16-octopus.jpg"
          className={styles[`Location__img`]}
          alt="animal"
        ></img>
      </article>
    </div>
  );
}
