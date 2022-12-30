import styles from "./styles.module.scss";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import GlobalSvg from "@atoms/GlobalSvg";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className={styles[`Nav`]}>
      <div className={styles[`Nav__internal`]}>
        {/* <Link href="/">
          <a>
            <img
              className={styles[`Nav__logo`]}
              src="../assets/images/logo.svg"
              alt="logo"
            />
          </a>
        </Link> */}
        <div className={styles[`Nav__menu`]}>
          <ul className={styles[`Nav__menuList`]}>
            <li className={styles[`Nav__menuLi`]}>
              <Link href="/Oceandex">
                <a className={styles[`Nav__menuItem`]}>OceanDex</a>
              </Link>
            </li>
            <li className={styles[`Nav__menuLi`]}>
              <Link href="/GeneralCuriosities">
                <a className={styles[`Nav__menuItem`]}>Animal's Curiosities</a>
              </Link>
            </li>
            <li className={styles[`Nav__menuLi`]}>
              <Link href="/OceanCuriosities">
                <a className={styles[`Nav__menuItem`]}>Ocean Curiosities</a>
              </Link>
            </li>
            <li className={styles[`Nav__menuLi`]}>
              <Link href="/TrophicLevel">
                <a className={styles[`Nav__menuItem`]}>Trophic Level</a>
              </Link>
            </li>
            <li className={styles[`Nav__menuLi`]}>
              <Link href="/Oceandex">
                <a className={styles[`Nav__menuItem`]}>Favorite Animals</a>
              </Link>
            </li>
            <li className={styles[`Nav__menuLi`]}>
              <Link href="/Authors">
                <a className={styles[`Nav__menuItem`]}>Authors</a>
              </Link>
            </li>
          </ul>
          <ul className={styles[`Nav__menuList--mobile`]}>
            {showMenu ? (
              <button
                className={styles[`Nav__openMenu`]}
                onClick={() => setShowMenu(false)}
              >
                <GlobalSvg
                  iconPath="/assets/images/svg/Hamburger.svg"
                  alt="Open menu"
                />
              </button>
            ) : (
              <>
                <button
                  className={styles[`Nav__closeMenu`]}
                  onClick={() => setShowMenu(true)}
                >
                  <GlobalSvg
                    iconPath="/assets/images/svg/Close.svg"
                    alt="Close Menu"
                  />
                </button>
                <li className={styles[`Nav__menuLi`]}>
                  <Link href="/Oceandex">
                    <a className={styles[`Nav__menuItem`]}>OceanDex</a>
                  </Link>
                </li>
                <li className={styles[`Nav__menuLi`]}>
                  <Link href="/GeneralCuriosities">
                    <a className={styles[`Nav__menuItem`]}>
                      Animal's Curiosities
                    </a>
                  </Link>
                </li>
                <li className={styles[`Nav__menuLi`]}>
                  <Link href="/OceanCuriosities">
                    <a className={styles[`Nav__menuItem`]}>Ocean Curiosities</a>
                  </Link>
                </li>
                <li className={styles[`Nav__menuLi`]}>
                  <Link href="/TrophicLevel">
                    <a className={styles[`Nav__menuItem`]}>Trophic Level</a>
                  </Link>
                </li>
                <li className={styles[`Nav__menuLi`]}>
                  <Link href="/Oceandex">
                    <a className={styles[`Nav__menuItem`]}>Favorite Animals</a>
                  </Link>
                </li>
                <li className={styles[`Nav__menuLi`]}>
                  <Link href="/Authors">
                    <a className={styles[`Nav__menuItem`]}>Authors</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
