import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Heading from "@atoms/Heading";

import Text from "@atoms/Text";
import oceanNames from "../../../data/oceanNames";
import useContentful from "hooks/useContentful";
import Arrow from "@atoms/Arrow";
import useOceanPage from "store/useOceanPage";

function OceanCuriosities({ oceanCuriosities, oceanName }) {
  console.log(oceanCuriosities);
  const [curiositiesID, setcuriositiesID] = useState(0);
  const [allOceanCuriosities, setallOceanCuriosities] = useState([]);

  const oceanListLength = oceanCuriosities.length - 1;
  function handleClickSum(e) {
    e.preventDefault();
    if (curiositiesID < oceanListLength) {
      setcuriositiesID((previous) => {
        return previous + 1;
      });
      console.log(curiositiesID);
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
      console.log(curiositiesID);
    } else {
      setcuriositiesID(oceanListLength);
    }
  }

  return (
    <div className={styles[`OceanCuriosities`]}>
      <section className={styles[`OceanCuriosities__Content`]}>
        <section className={styles[`OceanCuriosities__Header`]}>
          <Heading
            level="1"
            className={styles[`OceanCuriosities__Text`]}
            color="black"
            style="italic"
          >
            {oceanName + " Ocean"}
          </Heading>
        </section>

        <img
          className={styles[`OceanCuriosities__Img`]}
          src={oceanCuriosities[curiositiesID].image}
        />
        <Text
          className={styles[`OceanCuriosities__Text`]}
          color="black"
          size="small"
        >
          {oceanCuriosities[curiositiesID].description}
        </Text>
        <div></div>
      </section>
      <div className={styles[`OceanCuriosities__Arrow`]}>
        <Arrow direction="left" handleClick={handleClickSub} />
        <Arrow direction="right" handleClick={handleClickSum} />
      </div>
    </div>
  );
}
export default OceanCuriosities;

export async function getStaticPaths() {
  const oceans = oceanNames;
  const paths = oceans.map((ocean) => {
    return {
      params: { ocean: ocean.ocean },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { getCuriosities } = useContentful();

  const defineOcean = () => {
    const oceans = {
      "pacific-ocean": "pacific",
      "atlantic-ocean": "atlantic",
      "indian-ocean": "indian",
      "southern-ocean": "southern",
      "arctic-ocean": "arctic",
    };
    return oceans[params.ocean];
  };

  const oceanCuriosities = await getCuriosities("ocean", defineOcean());

  return {
    props: {
      oceanCuriosities,
      oceanName: defineOcean(),
    },
  };
}
