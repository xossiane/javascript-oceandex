import { useRouter } from "next/router";

import styles from "./styles.module.scss";
import Text from "@atoms/Text";

export default function Diet({ data }) {
  const router = useRouter();

  if (data) {
    function handleClick(animal) {
if(animal.completeAnimal){
  router.push(`/oceandex/${animal.name}`)
}
    }
    return (
      <section className={styles[`Diet__Container`]}>
        {data.dietList.map((element) => (
          <>
            <span
              key={element.name}
              className={styles[`Diet__imgContainer`]}
              onClick={() => handleClick(element)}
            >
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
                loading="lazy"
              ></img>
            </span>
            <hr className={styles[`Diet__hrItem`]}></hr>
          </>
        ))}
      </section>
    );
  }
}
