import Text from "@atoms/Text";
import AnimalsTag from "@molecules/AnimalsTag";
import styles from "./styles.module.scss";

export default function AboutContent({ data }) {
  if (data) {
    return (
      <section className={styles[`aboutContent`]}>
        <article className={styles[`aboutContent__container`]}>
          <Text
            color="darkBlue"
            size="small"
            className={styles[`aboutContent--text`]}
          >
            scientific name
          </Text>
          <Text color="black" size="small" style="italic">
            {data.scientificName}
          </Text>
        </article>
        <article className={styles[`aboutContent__paragraph`]}>
          <Text color="darkBlue">
            {data.description.content[0].content[0].value}
          </Text>
        </article>
        <article className={styles[`aboutContent__container`]}>
          <div>
            <Text
              color="darkBlue"
              size="small"
              className={styles[`aboutContent--text`]}
            >
              Height
            </Text>
            <Text color="black" size="small">
              {data.height}
            </Text>
          </div>
          <div>
            <Text
              color="darkBlue"
              size="small"
              className={styles[`aboutContent--text`]}
            >
              Weight
            </Text>
            <Text color="black" size="small">
              {data.weight}
            </Text>
          </div>
        </article>
        <article className={styles[`aboutContent__title`]}>
          <Text color="darkBlue">Breeding</Text>
        </article>
        <article className={styles[`aboutContent__container`]}>
          <div>
            <Text
              color="darkBlue"
              size="small"
              className={styles[`aboutContent--text`]}
            >
              Method
            </Text>
            <Text color="black" size="small" style="italic">
              {data.method}
            </Text>
          </div>
        </article>
        <article className={styles[`aboutContent__tags`]}>
          <AnimalsTag mt="mt" label="Animalia" />
          <AnimalsTag mt="mt" label="Mollusca" />
        </article>
      </section>
    );
  }
}
