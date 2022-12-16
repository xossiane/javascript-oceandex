// import Arrow from "@atoms/ArrowLeft";
// import Background from "@atoms/Background";
// import Button from "@atoms/Button";
// import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import Container from "@organisms/Container";
import styles from "./styles.module.scss";

export default function TrophicLevel() {

  return (
    <Container>

      <Text className={styles.title} style="italic" color="darkBlue" size="XLarge">Trophic Level</Text>
      <Text className={styles.paragraph} size="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero metus, fermentum et ex eu, vestibulum placerat enim. Ut turpis justo, lacinia non justo egestas, pretium vehicula lectus. Suspendisse ut eleifend justo, id consequat ex.</Text>

    </Container>
  );
}
