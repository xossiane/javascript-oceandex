import Arrow from "@atoms/Arrow";
import Heading from "@atoms/Heading";
import AnimalsTag from "@molecules/AnimalsTag";
import TabsDemo from "@organisms/Tabs";
import Background from "@atoms/Background";
import styles from "./styles.module.scss";
import Like from "@atoms/Like";

export default function AboutPage() {
  return (
    <div className={styles[`AboutPage`]}>
      <div className={styles[`AboutPage__title`]}>
        <Heading
          level="1"
          className={styles[`AboutPage__Header--text`]}
          size="Xlarge"
          color="black"
        >
          {" "}
          Octopus{" "}
        </Heading>
      </div>
      <div className={styles[`AboutPage__Content`]}>
        <div className={styles[`AboutPage__Container`]}>
        

          <header className={styles[`AboutPage__Header`]}>
            <Arrow href="/Oceandex" white={true}></Arrow>
          {/*   <Like className={styles[`AboutPage__Heart`]}></Like> */}
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
            <section className={styles[`AboutPage__tag`]}>
              <AnimalsTag className={styles[`AboutPage__tag--bg`]} label={"Animalia"}></AnimalsTag>{" "}
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
      <section className={styles[`AboutPage__background`]}>
        <Background />
      </section>
    </div>
  );
}
