import React from "react";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles[`footerContainer`]}>
      <p className={styles[`footerContainer__copyParagraph`]}>
        <span>&copy;</span> 2022 Oceandex. All rights reserved.
      </p>
    </footer>
  );
}
