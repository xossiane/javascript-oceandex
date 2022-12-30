import Arrow from "@atoms/Arrow";
import Heading from "@atoms/Heading";
import AnimalsTag from "@molecules/AnimalsTag";
import TabsDemo from "@organisms/Tabs";
import Background from "@atoms/Background";
import styles from "./aboutstyles.module.scss";
import Like from "@atoms/Like";
import { internalMutate } from "swr/_internal";

export default function AboutPage() {
  return (
    <div className={styles[`AboutPage`]}>
      <div className={styles[`AboutPage__Content`]}>
        <div className={styles[`AboutPage__Container`]}>
          <header className={styles[`AboutPage__Header`]}>
            <div className={styles[`AboutPage__Header--arrow`]}>
              {" "}
              <Arrow direction="left" href="/oceandex" white />
            </div>
            <Like white={true} className={styles[`AboutPage__Header--like`]} />
          </header>
          <section className={styles[`AboutPage__Header--info`]}>
            <Heading
              level="1"
              className={styles[`AboutPage__Header--text`]}
              color="white"
            >
              {" "}
              Octopus{" "}
            </Heading>
            <section className={styles[`AboutPage__tag`]}>
              <AnimalsTag mw="mw" label={"Animalia"} text="text"></AnimalsTag>{" "}
              <AnimalsTag mw="mw" label={"Chordata"} text="text"></AnimalsTag>
            </section>
            <section className={styles[`AboutPage__tag--bottom`]}>
              <AnimalsTag
                mw="mw"
                label={"Actinopterygii"}
                text="text"
              ></AnimalsTag>{" "}
              <AnimalsTag
                mw="mw"
                label={"Syngnathiformes"}
                text="text"
              ></AnimalsTag>
            </section>
            <img
              src="../assets/images/icons/16-octopus.png"
              className={styles[`AboutPage__Header--icon`]}
              alt="Animal"
            ></img>
          </section>
        </div>
        <div className={styles[`AboutPage__Container--bottom`]}>
          <TabsDemo></TabsDemo>
        </div>
      </div>
    </div>
  );
}
