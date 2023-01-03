import styles from "./styles.module.scss";
import heroData from "../../../data/heroData.json";
import Text from "@atoms/Text";

export default function HeroInfo(props) {
  const dado = heroData;
  const newHero = props.data.slice(props.currentItem, props.currentItem + 1);

  return (
    <div className={styles[`sliderHero`]}>
      {newHero.map((dado) => (
        <div key={dado.id} className={styles[`Hero`]}>
          <div className={styles[`Hero__header`]}>
            <img
              className={styles[`Hero__mainCourse`]}
              src={dado.img}
              alt={dado.alt}
              tabIndex="0"
            />

            <div className={styles[`Hero__topContainer`]}>
              <img
                className={styles[`Hero__topContainer__icon`]}
                src={dado.miniIcon}
              />
              <Text
                size="small"
                weight="bold"
                className={styles[`Hero__topContainer__title`]}
              >
                {dado.categ}{" "}
              </Text>
            </div>
          </div>

          <div className={styles[`Hero__botContainer`]} alt={dado.desc}>
            <h2 className={styles[`Hero__botContainer__title`]}>
              {dado.title}
            </h2>
            <Text
              size="large"
              className={styles[`Hero__botContainer__description`]}
            >
              {dado.desc}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
}
