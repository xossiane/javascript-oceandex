import styles from "./styles.module.scss";

import ArrowLeft from "@atoms/ArrowLeft";
import ArrowRight from "@atoms/ArrowRight";

export default function Arrows() {
  return (
    <article class={styles.arrows}>
      <ArrowLeft />
      <ArrowRight />
    </article>
  );
}
