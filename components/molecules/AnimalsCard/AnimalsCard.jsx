import { useEffect, useState } from "react";
import styles from "./AnimalsCard.module.scss";
import Heading from "@atoms/Heading/Heading";
import AnimalsTag from "@molecules/AnimalsTag/AnimalsTag";

export default function AnimalsCard({ name, order, phylum, src }) {
  const [color, setColor] = useState();
  const randomBackgroundColor = () => {
    const randomNumber = Math.floor(Math.random() * 6);

    const color = {
      0: "animalsCard--blue",
      1: "animalsCard--rose",
      2: "animalsCard--pink",
      3: "animalsCard--green",
      4: "animalsCard--aqua",
      5: "animalsCard--purple",
    };
    return color[randomNumber];
  };

  useEffect(() => setColor(randomBackgroundColor()));

  return (
    <div className={`${styles.animalsCard} ${styles[color]}`}>
      <div className={styles.animalsCard__name}>
        <Heading level="1" color="white" weight="normal" size="large">
          {name}
        </Heading>
      </div>
      <div className={styles.animalsCard__classification}>
        <AnimalsTag label={order}></AnimalsTag>
        <AnimalsTag label={phylum}></AnimalsTag>
      </div>
      <img className={styles.animalsCard__img} src={src} alt="" />
    </div>
  );
}
