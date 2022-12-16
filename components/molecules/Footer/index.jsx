import React from "react";

import styles from "./styles.module.scss";

import Image from "next/image";

import instaLogo from "../../../public/assets/images/icons/instagramLogo.svg";
import linkedinLogo from "../../../public/assets/images/icons/LinkedinLogo.svg";
export default function Footer() {
  return (
    <footer className={styles[`footerContainer`]}>
      <div className={styles[`footerContainer__logoParagraph`]}>
        <p>Connect with us</p>
        <div className={styles[`footerContainer__logo`]}>
          <a href="https://www.linkedin.com/company/valtech/" target="_blank">
            <Image
              src={linkedinLogo}
              className={styles[`footerContainer__linkedinLogo`]}
            />
          </a>
          <a href="https://www.instagram.com/valtech_brasil/" target="_blank">
            <Image
              src={instaLogo}
              className={styles[`footerContainer__instaLogo`]}
            />
          </a>
        </div>
      </div>
      <p className={styles[`footerContainer__copyParagraph`]}>
        <span>&copy;</span> 2022 Valtech. All rights reserved.
      </p>
    </footer>
  );
}
