import styles from "./styles.module.scss";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import GlobalSvg from "@atoms/GlobalSvg";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className={styles[`nav`]}>
      <div className={styles[`nav__internal`]}>
        {/* <Link href="/">
          <a>
            <img
              className={styles[`Nav__logo`]}
              src="../assets/images/logo.svg"
              alt="logo"
            />
          </a>
        </Link> */}
        <div className={styles[`nav__menu`]}>
          <ul className={styles[`nav__list`]}>
            <li className={styles[`nav__item`]}>
              <Link href="/oceandex">
                <a className={styles[`nav__link`]}>OceanDex</a>
              </Link>
            </li>
            <li className={styles[`nav__item`]}>
              <Link href="/animals-curiosities">
                <a className={styles[`nav__link`]}>Animal's Curiosities</a>
              </Link>
            </li>
            <li className={styles[`nav__item`]}>
              <Link href="/ocean-curiosities">
                <a className={styles[`nav__link`]}>Ocean Curiosities</a>
              </Link>
            </li>
            <li className={styles[`nav__item`]}>
              <Link href="/trophic-level">
                <a className={styles[`nav__link`]}>Trophic Level</a>
              </Link>
            </li>
            <li className={styles[`nav__item`]}>
              <Link href="/favorite-animals">
                <a className={styles[`nav__link`]}>Favorite Animals</a>
              </Link>
            </li>
            <li className={styles[`nav__item`]}>
              <Link href="/authors">
                <a className={styles[`nav__link`]}>Authors</a>
              </Link>
            </li>
          </ul>
          <ul className={styles[`nav__list--mobile`]}>
            {showMenu ? (
              <button
                className={styles[`nav__open`]}
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
                  className={styles[`nav__close`]}
                  onClick={() => setShowMenu(true)}
                >
                  <GlobalSvg
                    iconPath="/assets/images/svg/Close.svg"
                    alt="Close Menu"
                  />
                </button>
                <li className={styles[`nav__item`]}>
                  <Link href="/oceandex">
                    <a className={styles[`nav__link`]}>OceanDex</a>
                  </Link>
                </li>
                <li className={styles[`nav__item`]}>
                  <Link href="/animals-curiosities">
                    <a className={styles[`nav__link`]}>
                      Animal's Curiosities
                    </a>
                  </Link>
                </li>
                <li className={styles[`nav__item`]}>
                  <Link href="/ocean-curiosities">
                    <a className={styles[`nav__link`]}>Ocean Curiosities</a>
                  </Link>
                </li>
                <li className={styles[`nav__item`]}>
                  <Link href="/trophic-level">
                    <a className={styles[`nav__link`]}>Trophic Level</a>
                  </Link>
                </li>
                <li className={styles[`nav__item`]}>
                  <Link href="/favorite-animals">
                    <a className={styles[`nav__link`]}>Favorite Animals</a>
                  </Link>
                </li>
                <li className={styles[`nav__item`]}>
                  <Link href="/authors">
                    <a className={styles[`nav__link`]}>Authors</a>
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
