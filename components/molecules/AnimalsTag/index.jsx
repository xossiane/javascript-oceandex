import React from "react";
import Text from "@atoms/Text";
import styles from "./styles.module.scss";

export default function AnimalsTag({ label, mt, mw, text, className }) {
  const classList = [];
  classList.push(styles[`AnimalsTag--${mt}`]);
  classList.push(styles[`AnimalsTag--${mw}`]);
  classList.push(styles[`AnimalsTag--${text}`]);
  return (
    <div className={styles[`AnimalsTag`]}>
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
