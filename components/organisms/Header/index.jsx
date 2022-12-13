import styles from "./styles.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import MenuMobile from "@molecules/MenuMobile";
import MenuDesktop from "@molecules/MenuDesktop";

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <div>
      <div className={styles[`Header`]}>
        <div className={styles[`Header__logo`]}>
          <Link href="/">
            <a>
              <img
                className={styles[`Header__logo-img`]}
                src="assets/images/logo.svg"
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <div className={styles[`Header__menuMobile`]}>
          <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
        </div>
        <div className={styles[`Header__menuDesktop`]}>
          <MenuDesktop />
        </div>
      </div>
    </div>
  );
}
