import Text from "@atoms/Text";
import AnimalsTag from "@molecules/AnimalsTag";
import styles from "./styles.module.scss";
import useFetchData from "../../../store/useFetchData";

export default function AboutContent() {
  const data = useFetchData((state) => state.data);
  console.log(data);
  if (data) {
    return (
      <div className={styles[`AboutContent__Container`]}>
        <div className={styles[`AboutContent__Container--box`]}>
          <Text
            color="black"
            size="small"
            className={styles[`AboutContent__Container--text`]}
          >
            scientific name
          </Text>
          <Text
            className={styles[`AboutContent__Container--text2`]}
            color="black"
            size="small"
          >
            {data.scientificName}
          </Text>
        </div>
        <section className={styles[`AboutContent__Container--about`]}>
          <Text color="black" size="small">
            {data.description.content[0].content[0].value}
          </Text>
        </section>
        <section className={styles[`AboutContent__box2`]}>
          <div className={styles[`AboutContent__box2--title`]}>
            <Text color="black" size="small">
              Height
            </Text>
            <Text color="black" size="small">
              Weight
            </Text>
          </div>
          <div className={styles[`AboutContent__box2--data`]}>
            <Text color="black" size="small">
            {data.height}
            </Text>
            <Text color="black" size="small">
             {data.weight}
            </Text>
          </div>
        </section>
        <div className={styles[`AboutContent__title`]}>
          <Text color="darkBlue">Breeding</Text>
        </div>
        <section className={styles[`AboutContent__breeding`]}>
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
             {data.method}
            </Text>
          </div>
        </section>
        <section className={styles[`AboutContent__tags`]}>
          <AnimalsTag mt="mt" label="Animalia" />
          <AnimalsTag mt="mt" label="Mollusca" />
        </section>
      </div>
    );
  }
}
