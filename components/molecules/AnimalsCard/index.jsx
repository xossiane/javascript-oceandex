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
  const randomBackgroundColor = () => {
    const randomNumber = Math.floor(Math.random() * 6);

    const color = {
      0: "animalsCard--blue",
      1: "animalsCard--purple",
      2: "animalsCard--pink",
      3: "animalsCard--green",
      4: "animalsCard--oliveGreen",
      5: "animalsCard--red",
    };
    return color[randomNumber];
  };

  useEffect(() => setColor(randomBackgroundColor()));

  return (
    <Link href={`${href}`}>
      <div className={`${styles.animalsCard} ${styles[color]}`}>
        <div className={styles.animalsCard__name}>
          <Heading level="2" color="white" weight="normal" size="small">
            {name}
          </Heading>
        </div>
        <div className={styles.animalsCard__classification}>
          <AnimalsTag label={order} text="text"></AnimalsTag>
          <AnimalsTag label={phylum} text="text"></AnimalsTag>
          {/*   <AnimalsTag label={Class}></AnimalsTag>
          <AnimalsTag label={kingdom}></AnimalsTag> */}
        </div>

        <img className={styles.animalsCard__img} src={src} alt="" />
      </div>
    </Link>
  );
}
