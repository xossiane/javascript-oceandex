import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Heading from "@atoms/Heading";
import AnimalsTag from "@molecules/AnimalsTag";

export default function AnimalsCard({
  href,
  name,
  order,
  phylum,
  Class,
  kingdom,
  src,
}) {
  const [color, setColor] = useState();
  const chooseColor = () => {
    if (phylum === "Cnidaria") {
      chooseColor = "animalsCard--blue";
    } else if (phylum === "Chordata") {
      chooseColor = "animalsCard--purple";
    } else if (phylum === "Arthropoda ") {
      chooseColor = "animalsCard--pink";
    } else if (phylum === "Mollusca") {
      chooseColor = "animalsCard--green";
    } else if (phylum === "Echinodermata") {
      chooseColor = "animalsCard--oliveGreen";
    } else {
      chooseColor = "animalsCard--red";
    }
    return chooseColor;
  };

  useEffect(() => setColor(chooseColor()));

  return (
    <Link href={`${href}`}>
      <div className={`${styles.animalsCard} ${styles[color]}`}>
        <div className={styles.animalsCard__name}>
          <Heading level="2" color="white" weight="normal" size="small">
            {name}
          </Heading>
        </div>
        <div className={styles.animalsCard__details}>
          <div className={styles.animalsCard__classification}>
            <AnimalsTag label={order} text="text"></AnimalsTag>
            <AnimalsTag label={phylum} text="text"></AnimalsTag>
            <AnimalsTag label={Class} text="text"></AnimalsTag>
            <AnimalsTag label={kingdom} text="text"></AnimalsTag>
          </div>
          <img className={styles.animalsCard__img} src={src} alt="" />
        </div>
      </div>
    </Link>
  );
}
