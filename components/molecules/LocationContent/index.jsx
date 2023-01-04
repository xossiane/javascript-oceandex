import styles from "./styles.module.scss";
import Text from "@atoms/Text";

export default function Location({ data }) {
  if (data) {
    return (
      <div className={styles[`location`]}>
        <Text color="darkBlue" size="medium" className={styles[`location__title`]}>
          {data.location.oceanName}
        </Text>
        <article>
          <img
            src={data.location.oceanFile}
            className={styles[`location__image`]}
            alt="ocean (or oceans) in which the animal is most often found"
          ></img>
        </article>
      </div>
    );
  }
}
