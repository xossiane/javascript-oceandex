import styles from "./Diet.module.scss";
import Text from "@atoms/Text/Text";


export default function Diet() {
  return (
    <section className={styles[`Diet__Container`]}>
        <Text
        color="black"
        size="medium"
        className={styles[`Diet__titleTab`]}
        >
            Diet
        </Text>
        
        <hr className={styles[`Diet__hrItem`]}></hr>
        <Text
        color="black"
        size="small"
        className={styles[`Diet__animalName`]}>
            Nome do Animal
        </Text>
        <span className={styles[`Diet__imgContainer`]}><img className={styles[`Diet__imgItem`]} src="assets/images/diet/algae.png" alt="Alga verde" width={"120rem"}></img></span>
        <hr className={styles[`Diet__hrItem`]}></hr>
        <Text
        color="black"
        size="small"
        className={styles[`Diet__animalName`]}>
            Nome do Animal
        </Text>
        <span className={styles[`Diet__imgContainer`]}><img className={styles[`Diet__imgItem`]} src="assets/images/diet/algae.png" alt="Alga verde" width={"120rem"}></img></span>
        <hr className={styles[`Diet__hrItem`]}></hr>
        <Text
        color="black"
        size="small"
        className={styles[`Diet__animalName`]}>
            Nome do Animal
        </Text>
        <span className={styles[`Diet__imgContainer`]}><img className={styles[`Diet__imgItem`]} src="assets/images/diet/algae.png" alt="Alga verde" width={"120rem"}></img></span>
        <hr className={styles[`Diet__hrItem`]}></hr>

    
    </section>
   
  );
}