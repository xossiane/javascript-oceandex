import React from "react";
import styles from "./styles.module.scss";
import LinkedinIcon from "@atoms/LinkedinIcon";
import InstagramIcon from "@atoms/InstagramIcon";

export default function Footer() {
  return (
    <footer className={styles[`footerContainer`]}>
      <div className={styles[`footerContainer__logoParagraph`]}>
        <p>Connect with us</p>
        <div className={styles[`footerContainer__logo`]}>
          <LinkedinIcon
            href="https://www.linkedin.com/company/valtech/" 
          />
          <InstagramIcon
            href="https://www.instagram.com/valtech_brasil/"
          />
        </div>
      </div>
      <p className={styles[`footerContainer__copyParagraph`]}>
        <span>&copy;</span> 2022 Valtech. All rights reserved.
      </p>
    </footer>
  );
}
