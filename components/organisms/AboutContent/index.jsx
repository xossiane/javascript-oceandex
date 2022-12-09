import Text from "@atoms/Text";
import AnimalsTag from "@molecules/AnimalsTag";
import styles from "./styles.module.scss";

export default function AboutContent() {
  return (
    <div className={styles[`AboutContent__Container`]}>
      <div className={styles[`AboutContent__Container--box`]}>
        <Text
          color="black"
          size="small"
          className={styles[`AboutContent__Container--text`]}
        >
          {" "}
          scientific name{" "}
        </Text>{" "}
        <Text
          className={styles[`AboutContent__Container--text2`]}
          color="black"
          size="small"
        >
          Grimpoteuthis umbellata
        </Text>
      </div>
      <section className={styles[`AboutContent__Container--about`]}>
        <Text color="black" size="small">
          {" "}
          An octopus is a soft-bodied, eight-limbed mollusc of the order
          Octopoda. It consists of some 300 species and is grouped within the
          class Cephalopoda with squids, cuttlefish, and nautiloids.</Text>
      </section>
      <section className={styles[`AboutContent__box2`]}>
        <div className={styles[`AboutContent__box2--title`]}>
          <Text color="black" size="small">
            {" "}
            Height{" "}
          </Text>{" "}
          <Text color="black" size="small">
            {" "}
            Weight{" "}
          </Text>{" "}
        </div>
        <div className={styles[`AboutContent__box2--data`]}>
          <Text color="black" size="small">
            {" "}
            1cm - 10m{" "}
          </Text>{" "}
          <Text color="black" size="small">
            {" "}
            1g - 500kg{" "}
          </Text>{" "}
        </div>
      </section>
      <section className={styles[`AboutContent__breeding`]}>
        <div className={styles[`AboutContent__breeding--title`]}>
          <Text color="black" size="medium">
            Breeding
          </Text>
        </div>
        <div className={styles[`AboutContent__breeding--method`]}>
          <Text
            color="black"
            size="small"
            className={styles[`AboutContent__breeding--label`]}
          >
            Method
          </Text>
          <Text
            color="black"
            size="small"
            className={styles[`AboutContent__breeding--data`]}
          >
            Egg - larvae - juvenile - adult
          </Text>
        </div>
        
      </section>
      <section>
          <AnimalsTag mt="mt" label="Animalia"/>
          <AnimalsTag mt="mt" label="Mollusca"/>
        </section>
    </div>
  );
}
