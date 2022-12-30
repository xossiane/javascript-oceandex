import Text from "@atoms/Text";
import AnimalsCard from "@molecules/AnimalsCard";
import { internalMutate } from "swr/_internal";
import styles from "./styles.module.scss";

export default function Curiosities({ data }) {
  if (data) {
    return (
      <div className={styles[`Curiosities`]}>
        <Text
          color="black"
          size="medium"
          className={styles[`Curiosities__text`]}
         
        >
       {data.curiosity.fields.description}
        </Text>
        <img
          src={data.curiosity.fields.image.fields.file.url}
          className={styles[`Curiosities__img`]}
          alt="animal"
          loading="lazy"
        ></img>
      </div>
    );
  }
}
