import Text from "@atoms/Text";
import { useState } from "react";
import oceananimals from "../../../../javascript-oceandex/oceananimals.json";
import AnimalsTag from "@molecules/AnimalsTag";
import ArrowLeft from "@atoms/ArrowLeft";
import ArrowRight from "@atoms/ArrowRight";
import styles from './styles.module.scss'

function GeneralCuriosities() {
  const animals = oceananimals;
  const [animalsID, setanimalsID] = useState(0);

  //construindo a quantidade de IDs

  function handleClickSum(id) {
    if (animalsID <= 28) {
      setanimalsID((previous) => {
        return previous + 1;
      });
      console.log(animalsID);
    }
  }
  function handleClickSub(id) {
    if (animalsID >= 1) {
      setanimalsID((previous) => {
        return previous - 1;
      });
      console.log(animalsID);
    }
  }

  return (
    <>
      <section className={styles[`GeneralCuriosities`]}>
      <Text
          size="large"
          style="bold"
          className={styles[`GeneralCuriosities--Name`]}
        >
          {animals[animalsID].name}
        </Text>
      <div className={styles[`GeneralCuriosities--Tag`]}>
     
          <AnimalsTag label={animals[animalsID].kingdom} mt="mt" />
          <AnimalsTag label={animals[animalsID].order} mt="mt" />
        </div>
        <Text
          className={styles[`GeneralCuriosities--Text`]}
          color="black"
          size="small"
        >
          {animals[animalsID].tabs[0].curiosities[0].curiositiesText}
        </Text>
      
        <img
          className={styles[`GeneralCuriosities--Img`]}
          src={animals[animalsID].tabs[0].curiosities[0].curiositiesImage}
          key={animals[animalsID].id}
        />
        
        
      </section>
      <span className={styles[`GeneralCuriosities--Arrow`]}>
        <button
          className={styles[`GeneralCuriosities--button-left`]}
          onClick={handleClickSub}
        >
          <svg
            width="57"
            height="55"
            viewBox="0 0 57 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ArrowLeft white={false}/>
          </svg>
        </button>
        <button
          className={styles[`GeneralCuriosities--button-right`]}
          onClick={handleClickSum}
        >
          <svg
            width="57"
            height="55"
            viewBox="0 0 57 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <ArrowRight white={false}/>
          </svg>
        </button>
      </span>
    </>
  );
}

export default GeneralCuriosities;