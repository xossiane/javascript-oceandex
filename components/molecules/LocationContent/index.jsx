import styles from "./styles.module.scss";
import Text from "@atoms/Text";

export default function Location({ data }) {
  if (data) {
    return (
      <div className={styles[`Location`]}>
        <Text color="black" size="large" className={styles[`Location__title`]}>
          {data.location.oceanName}
        </Text>
        <article>
          <img
            src={data.location.oceanFile}
            className={styles[`Location__img`]}
            alt="animal"
          ></img>
        </article>
      </div>
    );
  }
}
