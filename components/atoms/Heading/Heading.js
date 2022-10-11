import styles from "./Heading.module.scss";
import React from "react";

export default function Heading({ size, color, weight, level, children }) {
  const classList = [];
  classList.push(styles[`text--${size}`]);
  classList.push(styles[`text--${color}`]);
  classList.push(styles[`text--${weight}`]);
  console.log(classList.join(" "));
  {
    /* <h1 className={classList.join(" ")}>hello</h1> */
  }
  let props = { className: classList.join(" ") };
  return React.createElement("h" + level, props, children);
}
