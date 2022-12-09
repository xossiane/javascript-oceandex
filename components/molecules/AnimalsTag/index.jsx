import React from "react";
import Text from "@atoms/Text";
import styles from "./styles.module.scss";

export default function AnimalsTag({ label, mt, className }) {
  const classList = [];
  classList.push(styles[`AnimalsTag--${mt}`])
  return (
    <div className={`${classList.join(" ")} ${className}`}>
      <Text className={styles[`AnimalsTag--text`]} color="white" size="medium">
        {label}
      </Text>
    </div>
  );
}
