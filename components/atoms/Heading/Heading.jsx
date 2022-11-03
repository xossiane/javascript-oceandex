import styles from "./Heading.module.scss";
import React from "react";

export default function Heading({
  size = "medium",
  color = "white",
  weight = "normal",
  level = 1,
  children,
}) {
  const classList = [styles.heading];
  classList.push(styles[`heading--${size}`]);
  classList.push(styles[`heading--${color}`]);
  classList.push(styles[`heading--${weight}`]);

  const props = { className: classList.join(" ") };
  return React.createElement("h" + level, props, children);
}
