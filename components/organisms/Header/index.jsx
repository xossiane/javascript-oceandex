import styles from "./styles.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import MenuMobile from "@molecules/MenuMobile";
// import MenuDesktop from "@molecules/MenuDesktop";

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <header className={styles[`Header`]}>
      <div className={styles[`Header__internal`]}>
        <Link href="/">
          <a>
            <img
              className={styles[`Header__logo`]}
              src="../assets/images/logo.svg"
              alt="logo"
            />
          </a>
        </Link>
        <div className={styles[`Header__menuMobile`]}>
          <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
        </div>
        {/* <div className={styles[`Header__menuDesktop`]}>
          <MenuDesktop />
        </div> */}
      </div>
    </header>
  );
}
