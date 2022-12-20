// import Arrow from "@atoms/ArrowLeft";
// import Background from "@atoms/Background";
// import Button from "@atoms/Button";
// import Heading from "@atoms/Heading";
import Button from "@atoms/Button";
import Text from "@atoms/Text";
import Container from "@organisms/Container";
import styles from "./styles.module.scss";

export default function TrophicLevel() {
  return (
    <Container>
      <Text className={styles.title} style="italic" color="darkBlue">
        Trophic Level
      </Text>
      <Text className={styles.paragraph} size="large">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero
        metus, fermentum et ex eu, vestibulum placerat enim. Ut turpis justo,
        lacinia non justo egestas, pretium vehicula lectus. Suspendisse ut
        eleifend justo, id consequat ex.
      </Text>

      <div className={styles.containerCard}>
        <Button
          href="/"
          size="medium"
          color="oliveGreen"
          fontsize="fontsmall"
          className={styles[`Home__buttons--unit`]}
          description="Below 200 meters"
          img="/assets/images/icons/deep_ocean.svg"
          title="Ocean Worldwide"
        ></Button>
        <Button
          href="/"
          size="medium"
          color="oliveGreen"
          fontsize="fontsmall"
          className={styles[`Home__buttons--unit`]}
          description="Coldest waters"
          img="/assets/images/icons/artic_ocean.svg"
          title="Arctic Ocean"
        ></Button>
        <Button
          href="/"
          size="medium"
          color="oliveGreen"
          fontsize="fontsmall"
          className={styles[`Home__buttons--unit`]}
          description="Where light meets water"
          img="/assets/images/icons/pelagic_ocean.svg"
          title="Pelagic Ocean"
        ></Button>
      </div>
    </Container>
  );
}
