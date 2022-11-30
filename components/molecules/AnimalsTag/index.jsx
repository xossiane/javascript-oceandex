import React from "react";
import Text from "@atoms/Text";
import styles from "./styles.module.scss";

export default function AnimalsTag({ label }) {
  return (
    <div>
      <Text className={styles[`AnimalsTag--text`]} color="white" size="medium">
        {label}
      </Text>
    </div>
  );
}
