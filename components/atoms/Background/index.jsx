import styles from "./styles.module.scss";
import background from "../../../public/assets/images/extras/backgroundLarge2.png";
export default function Background() {
  return (
    <div className={styles[`Background__ContainerBackgroundImage`]}>
      <img
        className={
          styles[`Background__ContainerBackgroundImage__BackgroundImage`]
        }
        src="/assets/images/extras/backgroundLarge2.png"
        alt=""
      />
      <img
        className={
          styles[`Background__ContainerBackgroundImage__BackgroundImageMobile`]
        }
        src="/assets/images/extras/background.png"
        alt=""
      />
    </div>
  );
}
