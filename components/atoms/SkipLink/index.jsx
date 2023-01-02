import styles from "./styles.module.scss";

export default function SkipLink() {
  return (
      <div aria-label="skip link">
        <a className={styles[`skipLink`]} href="#content">
          Skip to content
        </a>
      </div>
  );
}
