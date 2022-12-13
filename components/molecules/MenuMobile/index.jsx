import styles from "./styles.module.scss";
import Link from "next/link";

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  return (
    <div isVisible={menuIsVisible} className={styles[`Navbar`]}>
      <button
        className={styles[`Navbar__openMenu`]}
        onClick={() => setMenuIsVisible(true)}
      >
        <img src="assets/images/hamburger.svg" alt="Menu Hamburger" />
      </button>
      <nav className={`${menuIsVisible ? "" : styles[`Navbar__invisible`]}`}>
        <button
          className={styles[`Navbar__closeMenu`]}
          onClick={() => setMenuIsVisible(false)}
        >
          <img src="assets/images/close.svg" alt="Close Menu Hamburger" />
        </button>
        <ul className={styles[`Navbar__list`]}>
          <li className={styles[`Navbar__li`]}>
            <Link href="/Oceandex">
              <a className={styles[`Navbar__item`]}>OceanDex</a>
            </Link>
          </li>
          <li className={styles[`Navbar__li`]}>
            <Link href="/Oceandex">
              <a className={styles[`Navbar__item`]}>General Curiosities</a>
            </Link>
          </li>
          <li className={styles[`Navbar__li`]}>
            <Link href="/Oceandex">
              <a className={styles[`Navbar__item`]}>Ocean WorldWide</a>
            </Link>
          </li>
          <li className={styles[`Navbar__li`]}>
            <Link href="/Oceandex">
              <a className={styles[`Navbar__item`]}>Trophic Level</a>
            </Link>
          </li>
          <li className={styles[`Navbar__li`]}>
            <Link href="/Oceandex">
              <a className={styles[`Navbar__item`]}>Favorite Animals</a>
            </Link>
          </li>
          <li className={styles[`Navbar__li`]}>
            <Link href="/Oceandex">
              <a className={styles[`Navbar__item`]}>Authors</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
