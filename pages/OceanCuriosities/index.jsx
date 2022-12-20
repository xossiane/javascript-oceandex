import React, { useState } from "react";

import styles from "./styles.module.scss";
import Heading from "@atoms/Heading";

import oceancuriosities from "json/oceanCuriosities.json";
import Text from "@atoms/Text";
import Background from "@atoms/Background";

function OceanCuriosities() {
  const curiosities = oceancuriosities;
  const [curiositiesID, setcuriositiesID] = useState(0);

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
                Atlantic Ocean
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

          <span className={styles[`OceanCuriosities--Arrow`]}>
            <button
              className={styles[`OceanCuriosities--button`]}
              onClick={handleClickSub}
            >
              <svg
                width="57"
                height="55"
                viewBox="0 0 57 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.5 48.125C40.3051 48.125 49.875 38.8909 49.875 27.5C49.875 16.1091 40.3051 6.875 28.5 6.875C16.6949 6.875 7.125 16.1091 7.125 27.5C7.125 38.8909 16.6949 48.125 28.5 48.125Z"
                  stroke="black"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                />
                <path
                  d="M27.1418 34.7832L19.5938 27.5L27.1418 20.2168"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.5938 27.5H37.4062"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className={styles[`OceanCuriosities--button`]}
              onClick={handleClickSum}
            >
              <svg
                width="57"
                height="55"
                viewBox="0 0 57 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.5 6.875C16.6949 6.875 7.125 16.1091 7.125 27.5C7.125 38.8909 16.6949 48.125 28.5 48.125C40.3051 48.125 49.875 38.8909 49.875 27.5C49.875 16.1091 40.3051 6.875 28.5 6.875Z"
                  stroke="black"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                />
                <path
                  d="M29.8582 20.2168L37.4062 27.5L29.8582 34.7832"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M37.4062 27.5L19.5938 27.5"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </span>
        </div>
        <section>
          <Background />
        </section>
      </>
    </>
  );
}

export default OceanCuriosities;
