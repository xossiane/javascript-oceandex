import styles from "./Diet.module.scss";
import Text from "@atoms/Text/Text";

export default function Diet() {
  return (
    <section className={styles[`Diet__Container`]}>
      <hr className={styles[`Diet__hrItem`]}></hr>
      <span className={styles[`Diet__imgContainer`]}>
        <Text color="black" size="small" className={styles[`Diet__animalName`]}>
          Nome do Animal
        </Text>
        <img
          className={styles[`Diet__imgItem`]}
          src="assets/images/diet/algae.png"
          alt="Alga verde"
          width={"120rem"}
        ></img>
      </span>
      <hr className={styles[`Diet__hrItem`]}></hr>
      <span className={styles[`Diet__imgContainer`]}>
        <Text color="black" size="small" className={styles[`Diet__animalName`]}>
          Nome do Animal
        </Text>
        <img
          className={styles[`Diet__imgItem`]}
          src="assets/images/diet/algae.png"
          alt="Alga verde"
          width={"120rem"}
        ></img>
      </span>
      <hr className={styles[`Diet__hrItem`]}></hr>
      <span className={styles[`Diet__imgContainer`]}>
        <Text color="black" size="small" className={styles[`Diet__animalName`]}>
          Nome do Animal
        </Text>
        <img
          className={styles[`Diet__imgItem`]}
          src="assets/images/diet/algae.png"
          alt="Alga verde"
          width={"120rem"}
        ></img>
      </span>
      <hr className={styles[`Diet__hrItem`]}></hr>
    </section>
  );
}
