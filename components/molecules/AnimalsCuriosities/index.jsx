import Text from "@atoms/Text";
import { useState } from "react";
import oceananimals from "../../../data/animalsCuriosities.json";
import AnimalsTag from "@molecules/AnimalsTag";
import Arrow from "@atoms/Arrow";
import styles from "./styles.module.scss";

function AnimalsCuriosities() {
  const animals = oceananimals;
  const [animalsID, setanimalsID] = useState(0);

  //construindo a quantidade de IDs

  function handleClickSum(id) {
    if (animalsID <= 27) {
      setanimalsID((previous) => {
        return previous + 1;
      });
      console.log(animalsID);
    }
  }
  function handleClickSub(id) {
    if (animalsID >= 1) {
      setanimalsID((previous) => {
        return previous - 1;
      });
      console.log(animalsID);
    }
  }
  console.log(animals);

  return (
    <>
      <section className={styles[`AnimalsCuriosities`]}>
        <Text
          size="large"
          style="bold"
        >
          {animals[animalsID].name}
        </Text>
        <div className={styles[`AnimalsCuriosities__Tag`]}>
          <AnimalsTag label={animals[animalsID].kingdom} mt="mt" />
          <AnimalsTag label={animals[animalsID].order} mt="mt" />
        </div>
        <Text
          className={styles[`AnimalsCuriosities__Text`]}
          color="black"
          size="small"
        >
          {animals[animalsID].tabs[0].curiosities[0].curiositiesText}
        </Text>

        <img
          className={styles[`AnimalsCuriosities__Img`]}
          src={animals[animalsID].tabs[0].curiosities[0].curiositiesImage}
          key={animals[animalsID].id}
        />
      </section>
      <div className={styles[`AnimalsCuriosities__Arrow`]}>
        <Arrow direction="left" onClick={handleClickSub} />
        <Arrow direction="right" onClick={handleClickSum} />
      </div>
    </>
  );
}

export default AnimalsCuriosities;
