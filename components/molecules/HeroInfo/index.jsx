import styles from "./styles.module.scss";
import heroData from "../../../data/heroData.json";
import Text from "@atoms/Text";

export default function HeroInfo(props) {
  const dado = heroData;
  const newHero = props.data.slice(props.currentItem, props.currentItem + 1);

  return (
    <div className={styles[`heroInfo__container`]}>
      {newHero.map((dado) => (
        <div key={dado.id} className={styles[`heroInfo`]}>
          <div className={styles[`heroInfo__header`]}>
            <img
              className={styles[`heroInfo__img`]}
              src={dado.img}
              alt={dado.alt}
              tabIndex="0"
            />

            <div className={styles[`heroInfo__topContainer`]}>
              <img
                className={styles[`heroInfo__icon`]}
                src={dado.miniIcon}
              />
              <Text
                size="small"
                weight="bold"
                
              >
                {dado.categ}{" "}
              </Text>
            </div>
          </div>

          <div className={styles[`heroInfo__botContainer`]} alt={dado.desc}>
            <h2 className={styles[`heroInfo__title`]}>
              {dado.title}
            </h2>
            <Text
              size="large"
              className={styles[`heroInfo__description`]}
            >
              {dado.desc}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
}
