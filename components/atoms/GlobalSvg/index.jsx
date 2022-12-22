import Link from "next/link";
import styles from "./styles.module.scss";
export default function GlobalSvg({
  iconPath,
  external = false,
  href = "#",
  color = "",
  alt,
}) {
  const classList = [];
  classList.push(styles[`svgIcon--${color}`]);

  if (!external && href !== "#") {
    return (
      <Link href={`${href}`} className={styles.iconContainer}>
        <a>
          <img src={iconPath} className={classList.join(" ")} alt={alt} />
        </a>
      </Link>
    );
  } else if (external && href !== "#") {
    return (
      <a href={`${href}`} target="_blank" className={styles.iconContainer}>
        <img src={iconPath} className={classList.join(" ")} alt={alt} />
      </a>
    );
  } else if (href === "#") {
    return <img src={iconPath} className={classList.join(" ")} alt={alt} />;
  }
}
