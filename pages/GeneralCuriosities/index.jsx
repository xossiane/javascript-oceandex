import GeneralCuriosities from "@molecules/GeneralCuriosities";
import styles from "./styles.module.scss";
import React, { useEffect, useState } from "react";
import Background from "@atoms/Background";
import Heading from "@atoms/Heading";
import Arrow from "@atoms/Arrow";
import useContentful from "hooks/useContentful";

export default function GeneralCuriositiesPage({ animalsCuriosities }) {
  const { getCuriosities } = useContentful();
  const [loading, setLoading] = useState();

  //const [animalsCuriosities, setAnimalsCuriosities] = useState([]);

  /* useEffect(() => {
    setLoading(true);
    async function fetchCuriosities() {
      const response = await getCuriosities("animal");
      setAnimalsCuriosities(response);
    }
    fetchCuriosities();
    setLoading(false);
  }, []); */
  const testeAnimals = animalsCuriosities;
  console.log(testeAnimals);
  const animalsListLength = testeAnimals.length - 1;
  const [curiositiesID, setcuriositiesID] = useState(0);

  //construindo a quantidade de IDs

  function handleClickSum() {
    if (curiositiesID < animalsListLength) {
      setcuriositiesID((previous) => {
        return previous + 1;
      });
      console.log(curiositiesID);
    } else {
      setcuriositiesID(0);
    }
  }
  function handleClickSub() {
    if (curiositiesID > 0) {
      setcuriositiesID((previous) => {
        return previous - 1;
      });
      console.log(curiositiesID);
    } else {
      setcuriositiesID(animalsListLength);
    }
  }

  console.log(animalsCuriosities[curiositiesID].animalName);

  console.log("length " + animalsListLength);
  console.log("id " + curiositiesID);

  return (
    <>
      <div className={styles[`GeneralCuriositiesPage__Content`]}>
        <header className={styles[`GeneralCuriositiesPage__Header`]}>
          <Heading level="1" color="black" style="italic">
            Animal's Curiosities
          </Heading>
        </header>
        <div className={styles[`GeneralCuriositiesPage__Container`]}>
          <GeneralCuriosities
            animalName={animalsCuriosities[curiositiesID].animalName}
            order={animalsCuriosities[curiositiesID].orderAndPhylum[0]}
            phylum={animalsCuriosities[curiositiesID].orderAndPhylum[1]}
            curiosityText={animalsCuriosities[curiositiesID].description}
            curiosityImage={animalsCuriosities[curiositiesID].image}
          ></GeneralCuriosities>
        </div>
        <div className={styles[`GeneralCuriositiesPage__arrow`]}>
          <span onClick={handleClickSub}>antes</span>
          <span onClick={handleClickSum}>depois</span>
          {/* <Arrow direction="left" onClick={handleClickSub} />
          <Arrow direction="right" onClick={handleClickSum} /> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { getCuriosities } = useContentful();

  const animalsCuriosities = await getCuriosities("animal");
  return {
    props: {
      animalsCuriosities,
    },
  };
}
