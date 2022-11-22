import React from "react";
import Text from "@atoms/Text/Text";
import oceananimals from "oceananimals.json";
import styles from "./AnimalsTag.module.scss";

export default function AnimalsTag({ children }) {
  const animals = oceananimals;
  return (
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
  );
}
