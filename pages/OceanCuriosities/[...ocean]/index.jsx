import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Arrow from "@atoms/Arrow";
import Heading from "@atoms/Heading";
import oceancuriosities from "json/oceanCuriosities.json";
import Text from "@atoms/Text";

function OceanCuriosities() {
  const curiosities = oceancuriosities;
  const [curiositiesID, setcuriositiesID] = useState(0);
  const router = useRouter();
  const { ocean } = router.query;
  const oceansSubtitles = [
    { subtitle: "The biggest ocean" },
    { subtitle: "Sea of Atlas" },
    { subtitle: "Third-largest ocean" },
    { subtitle: "Portions of oceans" },
    { subtitle: "The smallest ocean" },
  ];

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
        <div className={styles[`OceanCuriosities__Container`]}>
          <section className={styles[`OceanCuriosities__Content`]}>
            <section className={styles[`OceanCuriosities__Header`]}>
              <Heading
                level="1"
                color="black"
                style="italic"
              >
                {" "}
                {ocean}
              </Heading>
            </section>

            <>
              {
                oceansSubtitles.map((oceans) => (
                  <Heading level="2" color="black" size="small" weight="normal">
                    {oceans.subtitle}
                  </Heading>
                ))[0]
              }
              <Text
                className={styles[`OceanCuriosities__Text`]}
                color="black"
                size="small"
              >
                {curiosities[0].indian[curiositiesID].curiosity}
              </Text>
              <img
                className={styles[`OceanCuriosities__Img`]}
                src={curiosities[0].indian[curiositiesID].curiosityImage}
                key={curiosities[curiositiesID]}
              />
            </>
          </section>

          <div className={styles[`OceanCuriosities__Arrow`]}>
            <Arrow direction="left" onClick={handleClickSub} />
            <Arrow direction="right" onClick={handleClickSum} />
          </div>
        </div>
      </>
    </>
  );
}

export default OceanCuriosities;
