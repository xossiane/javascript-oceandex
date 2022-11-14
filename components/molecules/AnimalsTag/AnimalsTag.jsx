import React from "react";
import Text from "@atoms/Text/Text";
import oceananimals from "oceananimals.json";
import styles from "./AnimalsTag.module.scss";

function AnimalsTag({ children }) {
  //console.log(oceananimals);
  const animals = oceananimals;
  //console.log(animals.map((animal) => animal.id));
  //console.log(animals);
  return (
    <>
      <div className={styles[`AnimalsTag--bg`]}>
        {animals.map((animal) => (
          <Text
            className={styles[`AnimalsTag--text`]}
            color="black"
            size="small"
            key={animal.id}
          >
            {animal.name}
          </Text>
        ))}
      </div>
    </>
  );
}

export default AnimalsTag;
