import styles from "./Background.module.scss";

export default function Background() {
  return (
    <img
      className={styles[`Background`]}
      src="assets/images/extras/backgroundLarge2.png"
      alt="coral wallpaper"
    />
  );
}
