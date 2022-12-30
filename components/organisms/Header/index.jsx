import styles from "./styles.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import Nav from "@molecules/Nav";

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
              alt="go back to home screen page"
            />
          </a>
        </Link>
        <div className={styles[`Header__nav`]}>
          <Nav />
        </div>
      </div>
    </header>
  );
}
