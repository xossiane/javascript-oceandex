import Link from "next/link";
import styles from "./styles.module.scss";

export default function MenuDesktop() {
  return (
    <nav
      className={styles[`NavbarDesktop`]}
      role="navigation"
      aria-label="main navigation"
    >
      <ul className={styles[`NavbarDesktop__list`]}>
        <li className={styles[`NavbarDesktop__li`]}>
          <Link href="/Oceandex">
            <a className={styles[`NavbarDesktop__item`]}>OceanDex</a>
          </Link>
        </li>
        <li className={styles[`NavbarDesktop__li`]}>
          <Link href="/GeneralCuriosities">
            <a className={styles[`NavbarDesktop__item`]}>
              Animal's Curiosities
            </a>
          </Link>
        </li>
        <li className={styles[`NavbarDesktop__li`]}>
          <Link href="/OceanCuriosities">
            <a className={styles[`NavbarDesktop__item`]}>Ocean Curiosities</a>
          </Link>
        </li>
        <li className={styles[`NavbarDesktop__li`]}>
          <Link href="/TrophicLevel">
            <a className={styles[`NavbarDesktop__item`]}>Trophic Level</a>
          </Link>
        </li>
        <li className={styles[`NavbarDesktop__li`]}>
          <Link href="/FavoriteAnimals">
            <a className={styles[`NavbarDesktop__item`]}>Favorite Animals</a>
          </Link>
        </li>
        <li className={styles[`NavbarDesktop__li`]}>
          <Link href="/Authors">
            <a className={styles[`NavbarDesktop__item`]}>Authors</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
