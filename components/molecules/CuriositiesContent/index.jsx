import Text from "@atoms/Text";
import AnimalsCard from "@molecules/AnimalsCard";
/* import { internalMutate } from "swr/_internal"; */
import styles from "./styles.module.scss";

export default function Curiosities({ data }) {
  if (data) {
    return (
      <div className={styles[`curiosities`]}>
        <Text
          color="black"
          size="medium"
          className={styles[`curiosities__text`]}
        >
          {data.curiosity.fields.description}
        </Text>
        <img
          src={data.curiosity.fields.image.fields.file.url}
          className={styles[`curiosities__image`]}
          alt="animal in its habitat"
          loading="lazy"
        ></img>
      </div>
    );
  }
}
