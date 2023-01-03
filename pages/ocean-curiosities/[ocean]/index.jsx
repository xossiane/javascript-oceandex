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
    <section className={styles[`oceanCuriosities`]}>
      <article className={styles[`oceanCuriosities__content`]}>
          <Heading
            level="1"
            color="black"
            style="italic"
          >
            {oceanName}
          </Heading>

        <img
          className={styles[`oceanCuriosities__image`]}
          src={oceanCuriosities[curiositiesID].image}
        />
        <Text
          color="darkBlue"
        >
          {oceanCuriosities[curiositiesID].description}
        </Text>
      </article>
      <article className={styles[`oceanCuriosities__arrows`]}>
        <Arrow direction="left" handleClick={handleClickSub} />
        <Arrow direction="right" handleClick={handleClickSum} />
      </article>
    </section>
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
      pacificOcean: "pacific",
      atlanticOcean: "atlantic",
      indianOcean: "indian",
      southernOcean: "southern",
      arcticOcean: "arctic",
    };
    return oceans[params.ocean];
  };

  const oceanCuriosities = await getCuriosities("ocean", defineOcean());

  return {
    props: {
      oceanCuriosities,
      oceanName: params.ocean,
    },
  };
}
