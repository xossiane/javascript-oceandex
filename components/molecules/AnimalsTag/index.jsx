import React from "react";
import Text from "@atoms/Text";
import styles from "./styles.module.scss";

export default function AnimalsTag({ label, mt, mw, text, className }) {
  const classList = [];
  classList.push(styles[`animalsTag--${mt}`]);
  classList.push(styles[`animalsTag--${mw}`]);
  classList.push(styles[`animalsTag--${text}`]);
  return (
    <div className={styles[`animalsTag`]}>
      <Text
        className={`${classList.join(" ")} ${className}`}
        color="white"
        size="medium"
      >
        {label}
      </Text>
    </div>
  );
}
