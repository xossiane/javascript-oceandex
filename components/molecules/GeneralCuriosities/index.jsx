import React, { useState } from "react";
import styles from "./styles.module.scss";
import Text from "@atoms/Text";
import oceananimals from "../../../../javascript-oceandex/oceananimals.json";

function GeneralCuriosities() {
  const animals = oceananimals;
  const [animalsID, setanimalsID] = useState(0);

  //construindo a quantidade de IDs

  function handleClickSum(id) {
    if (animalsID <= 28) {
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

  return (
    <>
      <section className={styles[`GeneralCuriosities`]}>
      <Text
            size="large"
            style="bold"
            
            className={styles[`GeneralCuriosities--Name`]}
          >
            {animals[animalsID].name}
          </Text>
        <img
          className={styles[`GeneralCuriosities--Img`]}
          src={animals[animalsID].tabs[0].curiosities[0].curiositiesImage}
          key={animals[animalsID].id}
        />
        <Text
          className={styles[`GeneralCuriosities--Text`]}
          color="black"
          size="small"
        >
          {animals[animalsID].tabs[0].curiosities[0].curiositiesText}
        </Text>
        <div>
          <Text
            size="medium"
            
            className={styles[`GeneralCuriosities--Tag`]}
          >
            {" "}phylum: {" "}
            {animals[animalsID].phylum} || {" "}order: {" "}{animals[animalsID].order}
          </Text>
        </div>
      </section>
      <span className={styles[`GeneralCuriosities--Arrow`]}>
        <button
          className={styles[`GeneralCuriosities--button-left`]}
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
          className={styles[`GeneralCuriosities--button-right`]}
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
    </>
  );
}

export default GeneralCuriosities;
