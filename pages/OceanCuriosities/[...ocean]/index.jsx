import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";
import Arrow from "@atoms/Arrow";
import Heading from "@atoms/Heading";

import oceancuriosities from "json/oceanCuriosities.json";
import Text from "@atoms/Text";
import Background from "@atoms/Background";

function OceanCuriosities() {
  const curiosities = oceancuriosities;
  const [curiositiesID, setcuriositiesID] = useState(0);
  const router = useRouter();
  const { ocean } = router.query;

  //construindo a quantidade de IDs

  function handleClickSum(id) {
    if (curiositiesID <= 8) {
      setcuriositiesID((previous) => {
        return previous + 1;
      });
      console.log(curiositiesID);
    } else {
      setcuriositiesID(0);
    }
  }
  function handleClickSub(id) {
    if (curiositiesID >= 1) {
      setcuriositiesID((previous) => {
        return previous - 1;
      });
      console.log(curiositiesID);
    } else {
      setcuriositiesID(9);
    }
  }

  return (
    <>
      <>
        <div className={styles[`OceanCuriosities__container`]}>
          <section className={styles[`OceanCuriosities__content`]}>
            <section className={styles[`OceanCuriosities__header`]}>
              <Heading
                level="1"
                className={styles[`OceanCuriosities__container--text`]}
                color="black"
                style="italic"
              >
                {" "}
                {ocean}
              </Heading>
            </section>
            <>
              <img
                className={styles[`OceanCuriosities--Img`]}
                src={curiosities[0].indian[curiositiesID].curiosityImage}
                key={curiosities[curiositiesID]}
              />
              <Text
                className={styles[`OceanCuriosities--Text`]}
                color="black"
                size="small"
              >
                {curiosities[0].indian[curiositiesID].curiosity}
              </Text>
              <div></div>
            </>
          </section>

          <div className={styles[`OceanCuriosities--Arrow`]}>
            <Arrow direction="left" />
            <Arrow direction="right" />
          </div>
        </div>
        <section>
         {/*<Background />*/} 
        </section>
      </>
    </>
  );
}

export default OceanCuriosities;
