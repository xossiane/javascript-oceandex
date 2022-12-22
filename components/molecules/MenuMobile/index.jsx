import styles from "./styles.module.scss";
import Link from "next/link";
import GlobalSvg from "@atoms/GlobalSvg";

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  return (
    <div className={styles[`Navbar`]}>
      <button
        className={styles[`Navbar__openMenu`]}
        onClick={() => setMenuIsVisible(true)}
      >
        <GlobalSvg
          iconPath="/assets/images/svg/Hamburger.svg"
          alt="Open menu"
        />
      </button>
      <nav className={`${menuIsVisible ? "" : styles[`Navbar__invisible`]}`}>
        <button
          className={styles[`Navbar__closeMenu`]}
          onClick={() => setMenuIsVisible(false)}
        >
          <GlobalSvg iconPath="/assets/images/svg/Close.svg" alt="Close Menu" />
        </button>
        <ul className={styles[`Navbar__list`]}>
          <li className={styles[`Navbar__li`]}>
            <Link href="/Oceandex">
              <a className={styles[`Navbar__item`]}>OceanDex</a>
            </Link>
          </li>
          <li className={styles[`Navbar__li`]}>
            <Link href="/GeneralCuriosities">
              <a className={styles[`Navbar__item`]}>Animal's Curiosities</a>
            </Link>
          </li>
          <li className={styles[`Navbar__li`]}>
            <Link href="/OceanWorldwide">
              <a className={styles[`Navbar__item`]}>Ocean WorldWide</a>
            </Link>
          </li>
          <li className={styles[`Navbar__li`]}>
            <Link href="/TrophicLevel">
              <a className={styles[`Navbar__item`]}>Trophic Level</a>
            </Link>
          </li>
          <li className={styles[`Navbar__li`]}>
            <Link href="/Oceandex">
              <a className={styles[`Navbar__item`]}>Favorite Animals</a>
            </Link>
          </li>
          <li className={styles[`Navbar__li`]}>
            <Link href="/Authors">
              <a className={styles[`Navbar__item`]}>Authors</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
