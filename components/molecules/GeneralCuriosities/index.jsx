import Text from "@atoms/Text";
import { useState } from "react";
import oceananimals from "../../../json/generalCuriosities.json";
import AnimalsTag from "@molecules/AnimalsTag";
import Arrow from "@atoms/Arrow";
import styles from "./styles.module.scss";

function GeneralCuriosities({
  animalName,
  phylum,
  order,
  curiosityText,
  curiosityImage,
}) {
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
  //console.log(animals);

  return (
    <>
      <section className={styles[`GeneralCuriosities`]}>
        <Text size="large" style="bold">
          {animalName}
        </Text>
        <div className={styles[`GeneralCuriosities--Tag`]}>
          <AnimalsTag label={phylum} mt="mt" />
          <AnimalsTag label={order} mt="mt" />
        </div>
        <Text
          className={styles[`GeneralCuriosities--Text`]}
          color="black"
          size="small"
        >
          {curiosityText}
        </Text>

        <img
          className={styles[`GeneralCuriosities--Img`]}
          src={curiosityImage}
        />
      </section>
    </>
  );
}

export default GeneralCuriosities;
