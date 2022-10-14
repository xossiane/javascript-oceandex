import styles from "./Heading.module.scss";
import React from "react";

export default function Heading({ size, color, weight, level, children }) {
  const classList = [];
  classList.push(styles[`heading--${size}`]);
  classList.push(styles[`heading--${color}`]);
  classList.push(styles[`heading--${weight}`]);

  const props = { className: classList.join(" ") };
  return React.createElement("h" + level, props, children);
}
