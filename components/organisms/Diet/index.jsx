import styles from "./styles.module.scss";
import Text from "@atoms/Text";

export default function Diet() {
  return (
    <section className={styles[`Diet__Container`]}>
      <span className={styles[`Diet__imgContainer`]}>
        <Text color="black" size="small" className={styles[`Diet__animalName`]}>
          Small Fish
        </Text>
        <img
          className={styles[`Diet__imgItem`]}
          src="assets/images/diet/flatFish.png"
          alt="Cod"
        ></img>
      </span>
      <hr className={styles[`Diet__hrItem`]}></hr>
      <span className={styles[`Diet__imgContainer`]}>
        <Text color="black" size="small" className={styles[`Diet__animalName`]}>
          Clam
        </Text>
        <img
          className={styles[`Diet__imgItem`]}
          src="assets/images/diet/hermitCrabs.png"
          alt="Clam"
        ></img>
      </span>
      <hr className={styles[`Diet__hrItem`]}></hr>
      <span className={styles[`Diet__imgContainer`]}>
        <Text color="black" size="small" className={styles[`Diet__animalName`]}>
          Crab
        </Text>
        <img
          className={styles[`Diet__imgItem`]}
          src="assets/images/diet/crab.png"
          alt="Crab"
        ></img>
      </span>
      <hr className={styles[`Diet__hrItem`]}></hr>
    </section>
  );
}
