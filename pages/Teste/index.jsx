import Container from "@organisms/Container";
import GeneralCuriosities from "@molecules/GeneralCuriosities";

import styles from "./styles.module.scss";

export default function Teste() {
  return (
    <div className={styles[`GeneralCuriosities`]}>
      <Container
        href="/home"
        title="General Curiosities"
        backgroundColorHeader="#567A79"
      />
      <div className={styles[`GeneralCuriosities__Content`]}>
        <GeneralCuriosities />
      </div>
    </div>
  );
}
