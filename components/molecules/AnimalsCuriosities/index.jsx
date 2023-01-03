import { useState } from "react";
import Text from "@atoms/Text";
import Heading from "@atoms/Heading";
import AnimalsTag from "@molecules/AnimalsTag";
import styles from "./styles.module.scss";

export default function AnimalsCuriosities({
  animalsCuriosities,
  animalName,
  order,
  phylum,
  curiosityText,
  curiosityImage,
}) {
  return (
    <div className={styles[`animalsCuriosities`]}>
      <Heading level="2" style="">
        {animalName}
      </Heading>
      <div className={styles[`animalsCuriosities__tag`]}>
        <AnimalsTag label={phylum} mt="mt" />
        <AnimalsTag label={order} mt="mt" />
      </div>
      <Text color="black" size="medium" className={styles[`animalsCuriosities__text`]}>
        {curiosityText}
      </Text>
      <img
        className={styles[`animalsCuriosities__image`]}
        src={curiosityImage}
        alt="animal in its habitat"
      />
    </div>
  );
}
