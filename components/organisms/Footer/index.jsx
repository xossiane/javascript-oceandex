import React from "react";
import styles from "./styles.module.scss";
export default function Footer() {
  return (
    <footer className={styles[`footer`]}>
      <p className={styles[`footer__copyright`]}>
        Made with <img className={styles[`footer__image`]} src="/assets/images/footer/whale-lov.png" alt="love"/> <br className={styles[`footer__break`]}></br>by the
        OceanDex Team
      </p>
    </footer>
  );
}
