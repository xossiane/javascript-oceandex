import styles from "./styles.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import Nav from "@molecules/Nav";

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <header className={styles[`header`]}>
      <div className={styles[`header__internal`]}>
        <Link href="/">
          <a>
            <img
              className={styles[`header__logo`]}
              src="../assets/images/logo.svg"
              alt="go back to homescreen page"
            />
          </a>
        </Link>
        <div className={styles[`header__nav`]}>
          <Nav />
        </div>
      </div>
    </header>
  );
}
