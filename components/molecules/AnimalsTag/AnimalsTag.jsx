import React from "react";
import Text from "@atoms/Text/Text";
import oceananimals from "oceananimals.json";
import styles from "./AnimalsTag.module.scss";

function AnimalsTag({ label }) {
  //console.log(oceananimals);
  const animals = oceananimals;
  //console.log(animals.map((animal) => animal.id));
  //console.log(animals);
  return (
    <>
      <div className={styles[`AnimalsTag--bg`]}>
          <Text
            className={styles[`AnimalsTag--text`]}
            color="black"
            size="small"
          >
            {label}
          </Text>
      </div>
    </>
  );
}

export default AnimalsTag;
