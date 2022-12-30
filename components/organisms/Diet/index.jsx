import styles from "./styles.module.scss";
import Text from "@atoms/Text";

export default function Diet({ data }) {
  if (data) {
    return (
      <section className={styles[`Diet__Container`]}>
        {data.dietList.map((element) => (
          <span key={element.name} className={styles[`Diet__imgContainer`]}>
            <Text
              color="black"
              size="small"
              className={styles[`Diet__animalName`]}
            >
              {element.name}
            </Text>
            <img
              className={styles[`Diet__imgItem`]}
              src={element.image}
              alt={element.name}
            ></img>
          </span>
        ))}
        <hr className={styles[`Diet__hrItem`]}></hr>
        {/*  <span className={styles[`Diet__imgContainer`]}>
          <Text
            color="black"
            size="small"
            className={styles[`Diet__animalName`]}
          >
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
          <Text
            color="black"
            size="small"
            className={styles[`Diet__animalName`]}
          >
            Crab
          </Text>
          <img
            className={styles[`Diet__imgItem`]}
            src="assets/images/diet/crab.png"
            alt="Crab"
          ></img>
        </span>
        <hr className={styles[`Diet__hrItem`]}></hr> */}
      </section>
    );
  }
}
