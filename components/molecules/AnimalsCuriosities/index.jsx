import Text from "@atoms/Text";
import { useState } from "react";
import AnimalsTag from "@molecules/AnimalsTag";
import Arrow from "@atoms/Arrow";
import styles from "./styles.module.scss";
import Heading from "@atoms/Heading";

function AnimalsCuriosities({
  animalsCuriosities,
  animalName,
  order,
  phylum,
  curiosityText,
  curiosityImage,
}) {
  return (
    <div className={styles[`AnimalsCuriosities`]}>
      <Heading level="2" style="">
        {animalName}
      </Heading>
      <div className={styles[`AnimalsCuriosities__Tag`]}>
        <AnimalsTag label={phylum} mt="mt" />
        <AnimalsTag label={order} mt="mt" />
      </div>
      <Text
        className={styles[`AnimalsCuriosities__Text`]}
        color="black"
        size="medium"
      >
        {curiosityText}
      </Text>

      <img className={styles[`AnimalsCuriosities__Img`]} src={curiosityImage} />
    </div>
  );
}

export default AnimalsCuriosities;
