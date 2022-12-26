import React from "react";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles[`footerContainer`]}>
      <p className={styles[`footerContainer__copyParagraph`]}>
        Made with 🐋 <br className={styles[`footerContainer__br`]}></br>by the
        OceanDex Team
      </p>
    </footer>
  );
}
