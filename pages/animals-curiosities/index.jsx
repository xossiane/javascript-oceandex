import AnimalsCuriosities from "@molecules/AnimalsCuriosities";
import styles from "./styles.module.scss";
import React, { useState } from "react";
import Heading from "@atoms/Heading";
import Arrow from "@atoms/Arrow";
import useContentful from "../../hooks/useContentful";

export default function AnimalsCuriositiesPage({ curiosity }) {
  const [curiositiesID, setcuriositiesID] = useState(0);
  const animalsListLength = curiosity.length - 1;

  function handleClickSum(e) {
    e.preventDefault();
    if (curiositiesID < animalsListLength) {
      setcuriositiesID((previous) => {
        return previous + 1;
      });
      //console.log(curiositiesID);
    } else {
      setcuriositiesID(0);
    }
  }
  function handleClickSub(e) {
    e.preventDefault();
    if (curiositiesID > 0) {
      setcuriositiesID((previous) => {
        return previous - 1;
      });
      //console.log(curiositiesID);
    } else {
      setcuriositiesID(animalsListLength);
    }
  }
  //console.log(animalsCuriosities[curiositiesID]);
  return (
    <div>
      <Heading level="1" color="black" style="italic" pageTitle={true}>
        Animal's Curiosities
      </Heading>
      <AnimalsCuriosities
        animalName={curiosity[curiositiesID].animalName}
        order={curiosity[curiositiesID].orderAndPhylum[0]}
        phylum={curiosity[curiositiesID].orderAndPhylum[1]}
        curiosityText={curiosity[curiositiesID].description}
        curiosityImage={curiosity[curiositiesID].image}
      />
      <div className={styles[`AnimalsCuriositiesPage__arrow`]}>
        <Arrow direction="left" handleClick={handleClickSub} />
        <Arrow direction="right" handleClick={handleClickSum} />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const { getCuriosities } = useContentful();

  const curiosity = await getCuriosities("animal");

  console.log(curiosity);
  return {
    props: {
      curiosity,
    },
  };
}
