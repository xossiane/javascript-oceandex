import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Text from "@atoms/Text";

export default function Diet({ data }) {
  const router = useRouter();

  if (data) {
    function handleClick(animal) {
      if (animal.completeAnimal) {
        router.push(`/oceandex/${animal.name}`);
      }
    }
    return (
      <section className={styles[`diet`]}>
        {data.dietList.map((element) => (
          <>
            <span
              key={element.name}
              className={styles[`diet__image`]}
              onClick={() => handleClick(element)}
            >
              <Text
                color="black"
                size="small"
                className={styles[`diet__animalName`]}
              >
                {element.name}
              </Text>
              <img
                className={styles[`diet__imageItem`]}
                src={element.image}
                alt={element.name}
                loading="lazy"
              ></img>
            </span>
            <hr key={element.name + "hr"} className={styles[`diet__hr`]}></hr>
          </>
        ))}
      </section>
    );
  }
}
