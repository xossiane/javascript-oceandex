import styles from "../styles/home.module.scss";
import Background from "@atoms/Background/Background";
import Heading from "@atoms/Heading/Heading";
import Button from "@atoms/Button/Button.jsx";
import Text from "@atoms/Text/Text";

function Home() {
  return (
    <div className={styles[`Home`]}>
      <main className={styles[`Home__container`]}>
        <Heading level="1" size="Xlarge" color="grey" weight="italic">
          What marine creature are you looking for?
        </Heading>
        <section className={styles[`Home__content`]}>
          <Button
            href="/Oceandex"
            size="medium"
            color="color-400"
            fontsize="fontsmall"
            className={styles[`Home__buttons--unit`]}
          >
            <Text color="white" size="small">
              OceanDex
            </Text>{" "}
          </Button>
          <Button
            href="/GeneralCuriosities"
            size="medium"
            color="color-800"
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
            color="color-500"
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
            color="color-700"
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
            color="color-200"
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
            color="color-300"
            fontsize="fontsmall"
            className={styles[`Home__buttons--unit`]}
          >
            <Text color="white" size="small">
              Who are you in the oceanDex?
            </Text>{" "}
          </Button>
        </section>
      </main>
      <section>
        <Background />
      </section>
    </div>
  );
}

export default Home;
