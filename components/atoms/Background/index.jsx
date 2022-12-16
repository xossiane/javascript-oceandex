import styles from "./styles.module.scss";
import background from '../../../public/assets/images/extras/backgroundLarge2.png'

export default function Background() {
  return (
    <img
      className={styles[`background`]}
      src={background}
      alt=""
    />
  );
}
