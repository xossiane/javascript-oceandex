import styles from "./styles.module.scss";

import Arrow from "@atoms/Arrow";

export default function Arrows() {
  return (
    <article class={styles.arrows}>
      <Arrow direction="left" />
      <Arrow direction="right" />
    </article>
  );
}
