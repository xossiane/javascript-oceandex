import Heading from "@atoms/Heading";
import AnimalsTag from "@molecules/AnimalsTag";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function AnimalsCard({
  href,
  name,
  order,
  phylum,
  Class,
  kingdom,
  src,
  onClick,
}) {
  const [color, setColor] = useState();
  let chooseColor = () => {
    if (phylum === "Cnidaria") {
      chooseColor = "animalsCard--blue";
    } else if (phylum === "Chordata") {
      chooseColor = "animalsCard--purple";
    } else if (phylum === "Arthropoda") {
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
      <div
        onClick={onClick}
        className={`${styles.animalsCard} ${styles[color]}`}
        tabIndex={"0"}
      >
          <Heading level="2" color="white" weight="normal" size="small">
            {name}
          </Heading>
        <div className={styles.animalsCard__details}>
          <div className={styles.animalsCard__classification}>
            <AnimalsTag label={order} text="text" />
            <AnimalsTag label={phylum} text="text" />
            <AnimalsTag label={Class} text="text" />
            <AnimalsTag label={kingdom} text="text" />
          </div>
          <img
            className={styles.animalsCard__image}
            src={src}
            alt={name}
            loading="lazy"
          />
        </div>
      </div>
    </Link>
  );
}
