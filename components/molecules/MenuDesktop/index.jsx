import styles from "./styles.module.scss";
import Link from "next/link";

export default function MenuDesktop() {
  return (
    <nav lassName={styles[`NavbarDesktop`]}>
      <ul className={styles[`NavbarDesktop__list`]}>
        <li className={styles[`NavbarDesktop__li`]}>
          <Link href="/Oceandex">
            <a className={styles[`NavbarDesktop__item`]}>OceanDex</a>
          </Link>
        </li>
        <li className={styles[`NavbarDesktop__li`]}>
          <Link href="/Oceandex">
            <a className={styles[`NavbarDesktop__item`]}>General Curiosities</a>
          </Link>
        </li>
        <li className={styles[`NavbarDesktop__li`]}>
          <Link href="/Oceandex">
            <a className={styles[`NavbarDesktop__item`]}>Ocean WorldWide</a>
          </Link>
        </li>
        <li className={styles[`NavbarDesktop__li`]}>
          <Link href="/Oceandex">
            <a className={styles[`NavbarDesktop__item`]}>Trophic Level</a>
          </Link>
        </li>
        <li className={styles[`NavbarDesktop__li`]}>
          <Link href="/Oceandex">
            <a className={styles[`NavbarDesktop__item`]}>Favorite Animals</a>
          </Link>
        </li>
        <li className={styles[`NavbarDesktop__li`]}>
          <Link href="/Oceandex">
            <a className={styles[`NavbarDesktop__item`]}>Authors</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
