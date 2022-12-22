import styles from "./styles.module.scss";
import Link from "next/link";
import MenuIcon from "@atoms/MenuIcon";
import CLoseIcon from "@atoms/CloseIcon";

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  return (
    <div className={styles[`Navbar`]}>
      <button
        className={styles[`Navbar__openMenu`]}
        onClick={() => setMenuIsVisible(true)}
      >
        <MenuIcon alt="Menu Hamburger"></MenuIcon>
      </button>
      <nav
        className={`${menuIsVisible ? "" : styles[`Navbar__invisible`]}`}
        role="navigation"
        aria-label="main navigation"
      >
        <button
          className={styles[`Navbar__closeMenu`]}
          onClick={() => setMenuIsVisible(false)}
        >
          <CLoseIcon alt="Close Menu Hamburger"></CLoseIcon>
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
