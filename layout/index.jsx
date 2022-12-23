import Footer from "@organisms/Footer";
import Header from "@organisms/Header";
import styles from "./styles.module.scss";


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles[`content`]}>{children}</div>
        <div className={styles[`Background__ContainerBackgroundImage`]}>
          <img className={styles[`Background__ContainerBackgroundImage__BackgroundImage`]} src="/assets/images/extras/backgroundLarge2.png" alt="" />
          <img className={styles[`Background__ContainerBackgroundImage__BackgroundImageMobile`]} src="/assets/images/extras/background.png" alt="" />
        </div>
      <Footer />
    </>
  );
}
