import Link from "next/link";
import styles from "./styles.module.scss";
export default function GlobalSvg({
  iconPath,
  external = false,
  href = "#",
  color = "",
  alt = "",
}) {
  const classList = [styles.globalSvg];
  classList.push(styles[`globalSvg--${color}`]);

  if (!external && href !== "#") {
    return (
      <Link href={`${href}`}>
        <a>
          <img
            src={iconPath}
            className={classList.join(" ")}
            alt={alt}
            tabIndex="0"
          />
        </a>
      </Link>
    );
  } else if (external && href !== "#") {
    return (
      <a href={`${href}`} target="_blank">
        <img
          src={iconPath}
          className={classList.join(" ")}
          alt={alt}
          tabIndex="0"
        />
      </a>
    );
  } else if (href === "#") {
    return (
      <img
        src={iconPath}
        className={classList.join(" ")}
        alt={alt}
        tabIndex="0"
      />
    );
  }
}
