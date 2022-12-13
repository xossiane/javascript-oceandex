import styles from "./styles.module.scss";
import React from "react";

export default function Heading({
  // size,
  color,
  weight,
  level,
  style,
  children,
}) {
  const classList = [];
  //classList.push(styles[`heading--${size}`]);
  classList.push(styles[`heading--${color}`]);
  classList.push(styles[`heading--${weight}`]);
  classList.push(styles[`heading--${style}`]);
  classList.push(styles[`heading--H${level}`]);

  const props = { className: classList.join(" ") };
  return React.createElement("h" + level, props, children);
}
