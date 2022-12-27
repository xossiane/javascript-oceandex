import styles from "./styles.module.scss";
import React from "react";

export default function Heading({
  size = "",
  color,
  level,
  children,
}) {
  const classList = [styles.heading];
  classList.push(styles[`heading--${size}`]);
  classList.push(styles[`heading--${color}`]);
  classList.push(styles[`heading--H${level}`]);

  const props = { className: classList.join(" ") };
  return React.createElement("h" + level, props, children);
}
