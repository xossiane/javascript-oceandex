import Arrow from "@atoms/Arrow/Arrow";
import Heading from "@atoms/Heading/Heading";
import AnimalsTag from "@molecules/AnimalsTag/AnimalsTag";
import TabsDemo from "@organisms/Tabs/Tabs";
import oceananimals from "oceananimals.json";

import styles from "./About.module.scss";

export default function AboutPage() {
  return (
    <div className={styles[`AboutPage`]}>
      <div className={styles[`AboutPage__Container`]}>
        <img
          className={styles[`AboutPage__Header--rectangle`]}
          src="assets/images/extras/Rectangle.png"
          alt=""
        />
        <img
          className={styles[`AboutPage__Header--dotted`]}
          src="assets/images/extras/dotted.png"
          alt=""
        />

        <header className={styles[`AboutPage__Header`]}>
          <Arrow href="/Oceandex" white={true}></Arrow>
        </header>
        <section className={styles[`AboutPage__Header--info`]}>
          <Heading
            level="1"
            className={styles[`AboutPage__Header--text`]}
            size="Xlarge"
            color="white"
          >
            {" "}
            Octopus{" "}
          </Heading>
          <section className={styles[`AboutPage__Header--tag`]}>
            <AnimalsTag label={"Octopoda"}></AnimalsTag>{" "}
            <AnimalsTag label={"Mollusca"}></AnimalsTag>
          </section>
          <img
            src="assets/images/icons/16-octopus.png"
            className={styles[`AboutPage__Header--icon`]}
            alt="animal icon"
          ></img>
        </section>
      </div>
      <div className={styles[`AboutPage__Container--bottom`]}>
        <TabsDemo></TabsDemo>
      </div>
    </div>
  );
}
