import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";
import Arrow from "@atoms/Arrow";
import Heading from "@atoms/Heading";

import oceancuriosities from "../../../data/oceanCuriosities.json";
import Text from "@atoms/Text";
import Background from "@atoms/Background";
import useContentful from "hooks/useContentful";

import oceanNames from "../../../data/oceanNames.json";

function OceanCuriosities({ oceanCuriosities }) {
  const curiosities = oceancuriosities;
  const router = useRouter();
  const { ocean } = router.query;

  console.log(oceanNames);
  const defineOcean = () => {
    const oceans = {
      pacificOcean: "pacific",
      atlanticOcean: "atlantic",
      indianOcean: "indian",
      southernOcean: "southern",
      arcticOcean: "arctic",
    };
    return oceans[ocean];
  };
  const oceans = oceanNames;
  console.log(oceans);
  const { getCuriosities } = useContentful();
  const [loading, setLoading] = useState();
  /* const testeOcean = oceanCuriosities;
  consolelog(testeOcean); 
  const oceanListLength = oceanCuriosities.length - 1;
  */
  // const [oceanCuriosities, setOceanCuriosities] = useState([]);

  /* useEffect(() => {
    setLoading(true);
    async function fetchCuriosities() {
      const response = await getCuriosities("ocean", defineOcean());
      setOceanCuriosities(response);
    }
    fetchCuriosities();
    setLoading(false);
  }, [ocean]); */

  //console.log(oceanListLength);

  const [curiositiesID, setcuriositiesID] = useState(0);

  function handleClickSum() {
    if (curiositiesID < oceanListLength) {
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
      setcuriositiesID(oceanListLength);
    }
  }
  /* console.log(ocean);
  console.log(defineOcean());
  console.log(oceanCuriosities); */
  //console.log("Length " + oceanListLength);
  console.log("ID " + curiositiesID);

  return (
    <div className={styles[`OceanCuriosities__container`]}>
      <section className={styles[`OceanCuriosities__content`]}>
        <section className={styles[`OceanCuriosities__header`]}>
          <Heading
            level="1"
            className={styles[`OceanCuriosities__container--text`]}
            color="black"
            style="italic"
          >
            {/* {!loading ? oceanCuriosities[curiositiesID].oceanName : "Loading"} */}
          </Heading>
        </section>
        <>
          <img
            className={styles[`OceanCuriosities--Img`]}
            //src={oceanCuriosities[curiositiesID].image}
          />
          <Text
            className={styles[`OceanCuriosities--Text`]}
            color="black"
            size="small"
          >
            {/* {oceanCuriosities[curiositiesID].description} */}
          </Text>
          <div></div>
        </>
      </section>

      <div className={styles[`OceanCuriosities--Arrow`]}>
        {/* <Arrow direction="left" />
        <Arrow direction="right" /> */}
        <span onClick={handleClickSub}>
          <p>antes</p>
        </span>
        <span onClick={handleClickSum}>
          <p>depois</p>
        </span>
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

export async function getStaticProps() {
  const { getCuriosities } = useContentful();
  const router = useRouter();
  const { ocean } = router.query;

  const defineOcean = () => {
    const oceans = {
      pacificOcean: "pacific",
      atlanticOcean: "atlantic",
      indianOcean: "indian",
      southernOcean: "southern",
      arcticOcean: "arctic",
    };
    return oceans[ocean];
  };

  const oceanCuriosities = await getCuriosities("ocean", defineOcean());
  return {
    props: {
      oceanCuriosities,
    },
  };
}