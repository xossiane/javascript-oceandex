import React from "react";
import Text from "@atoms/Text";
import styles from "./styles.module.scss";

export default function AnimalsTag({ label, mt, text, className }) {
  const classList = [];
  classList.push(styles[`AnimalsTag--${mt}`]);
  classList.push(styles[`AnimalsTag--${text}`]);
  return (
    <div>
      <Text className={`${classList.join(" ")} ${className}`} color="white" size="medium">
        {label}
      </Text>
    </div>
  );
}
