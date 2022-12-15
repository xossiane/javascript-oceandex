import styles from "../styles/home.module.scss";
import Background from "@atoms/Background";
import Heading from "@atoms/Heading";
import Button from "@atoms/Button/index.jsx";
import Text from "@atoms/Text";

export default function MainPage() {
  return (
    <div className={styles[`Home`]}>
      <main className={styles[`Home__container`]}>
        <Heading level="1" size="Xlarge" color="grey" weight="italic">
          Discover the Ocean
        </Heading>
        <section className={styles[`Home__content`]}>
          <Button
            href="/Oceandex"
            size="medium"
            color="blue"
            fontsize="fontsmall"
            className={styles[`Home__buttons--unit`]}
          >
            <Text color="white" size="small">
              OceanDex
            </Text>{" "}
          </Button>
          <Button
            href="/Teste"
            size="medium"
            color="green"
            fontsize="fontsmall"
            className={styles[`Home__buttons--unit`]}
          >
            <Text color="white" size="small">
              General Curiosities
            </Text>{" "}
          </Button>
          <Button
            href="/OceanWorldwide"
            size="medium"
            color="purple"
            fontsize="fontsmall"
            className={styles[`Home__buttons--unit`]}
          >
            <Text color="white" size="small">
              Ocean Worldwide
            </Text>{" "}
          </Button>
          <Button
            href="/"
            size="medium"
            color="oliveGreen"
            fontsize="fontsmall"
            className={styles[`Home__buttons--unit`]}
          >
            <Text color="white" size="small">
              Trophic Level
            </Text>{" "}
          </Button>
          <Button
            href="/"
            size="medium"
            color="pink"
            fontsize="fontsmall"
            className={styles[`Home__buttons--unit`]}
          >
            <Text color="white" size="small">
              Favorite Animals
            </Text>{" "}
          </Button>
          <Button
            href="/"
            size="medium"
            color="red"
            fontsize="fontsmall"
            className={styles[`Home__buttons--unit`]}
          >
            <Text color="white" size="small">
              Authors
            </Text>{" "}
          </Button>
        </section>
      </main>
    </div>
  );
}
