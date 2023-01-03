import styles from "./styles.module.scss";
export default function Background() {
  return (
    <div className={styles[`background`]}>
      <img
        className={styles[`background--desktop`]}
        src="/assets/images/extras/backgroundLarge2.png"
        alt=""
      />
      <img
        className={styles[`background--mobile`]}
        src="/assets/images/extras/background.png"
        alt=""
      />
    </div>
  );
}
