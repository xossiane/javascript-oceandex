import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";
import Heading from "@atoms/Heading";

import Text from "@atoms/Text";
import oceanNames from "../../../data/oceanNames";
import useContentful from "hooks/useContentful";
import Arrow from "@atoms/Arrow";
import useOceanPage from "store/useOceanPage";

function OceanCuriosities({ params }) {
  const { getCuriosities } = useContentful();
  console.log(params);
  const [curiositiesID, setcuriositiesID] = useState(0);
  const [allOceanCuriosities, setallOceanCuriosities] = useState([]);
  const [loading, setLoading] = useState();
  const [oceanName, setOceanName] = useState([]);

  const defineOcean = () => {
    const oceans = {
      pacificOcean: "pacific",
      atlanticOcean: "atlantic",
      indianOcean: "indian",
      southernOcean: "southern",
      arcticOcean: "arctic",
    };
    return oceans[oceanName];
  };

  useEffect(() => {
    /* setLoading(true);
    const ocean = JSON.parse(localStorage.getItem("oceanName"));
    if (ocean) {
      setOceanName(ocean);
    } */

    async function fetchCuriosities() {
      const curiosity = await getCuriosities("ocean");
      setallOceanCuriosities(curiosity);
    }
    fetchCuriosities();
    setLoading(false);
  }, [oceanName]);

  const oceanListLength = allOceanCuriosities.length - 1;

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
  /* console.log(oceanName);
  console.log(allOceanCuriosities);
  console.log("Length " + oceanListLength);
  console.log("ID " + curiositiesID); */

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
            Pacific Ocean
          </Heading>
        </section>
        <img
          className={styles[`OceanCuriosities--Img`]}
          src="/assets/images/oceans/PacificOcean.jpg"
        />
        <Text
          className={styles[`OceanCuriosities--Text`]}
          color="black"
          size="small"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          libero metus, fermentum et ex eu, vestibulum placerat enim. Ut turpis
          justo, lacinia non justo egestas, pretium vehicula lectus. Suspendisse
          ut eleifend justo, id consequat ex.
        </Text>
        <div></div>
      </section>

      <div className={styles[`OceanCuriosities--Arrow`]}>
        <Arrow href="" direction="left" handleClick={handleClickSub} />
        <Arrow href="" direction="right" handleClick={handleClickSum} />
      </div>
    </div>
  );
}

export default OceanCuriosities;

export async function getStaticPaths() {
  const oceans = oceanNames;
  const paths = oceans.map((ocean) => {
    //console.log(ocean);

    return {
      params: { ocean: ocean.ocean },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params);
  /*  if (ocean) {
    setOceanName(ocean);
  }
  console.log(oceanName); */
  //const ocean = router;
  //console.log(ocean);

  /* const defineOcean = () => {
    const oceans = {
      pacificOcean: "pacific",
      atlanticOcean: "atlantic",
      indianOcean: "indian",
      southernOcean: "southern",
      arcticOcean: "arctic",
    };
    return oceans[ocean];
  };
  console.log(defineOcean());

  const oceanCuriosities = await getCuriosities("ocean", defineOcean());
  const teste = "aaa"; 
*/
  return {
    props: {
      params: params.ocean,
    },
  };
}
