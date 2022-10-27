import React from "react";
import styles from "./GeneralCuriosities.module.scss";
import Text from "@atoms/Text/Text";

function GeneralCuriosities() {
  return (
    <>
      <img
        className={styles[`GeneralCuriosities--Img`]}
        src="assets/images/realAnimals/13-killerWhale.jpg"
      />
      <Text
        className={styles[`GeneralCuriosities--Text`]}
        color="black"
        size="small"
      >
        {" "}
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim{" "}
      </Text>
      <div>
        <Text size="medium" style="italic" className={styles[`GeneralCuriosities--Tag`]}>
          {" "}
          Animalia | Cetacea{" "}
        </Text>
      </div>
      <span className={styles[`GeneralCuriosities--Arrow`]}>
      <svg width="57" height="55" viewBox="0 0 57 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5 48.125C40.3051 48.125 49.875 38.8909 49.875 27.5C49.875 16.1091 40.3051 6.875 28.5 6.875C16.6949 6.875 7.125 16.1091 7.125 27.5C7.125 38.8909 16.6949 48.125 28.5 48.125Z" stroke="black" stroke-width="4" stroke-miterlimit="10"/>
<path d="M27.1418 34.7832L19.5938 27.5L27.1418 20.2168" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5938 27.5H37.4062" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg width="57" height="55" viewBox="0 0 57 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5 6.875C16.6949 6.875 7.125 16.1091 7.125 27.5C7.125 38.8909 16.6949 48.125 28.5 48.125C40.3051 48.125 49.875 38.8909 49.875 27.5C49.875 16.1091 40.3051 6.875 28.5 6.875Z" stroke="black" stroke-width="4" stroke-miterlimit="10"/>
<path d="M29.8582 20.2168L37.4062 27.5L29.8582 34.7832" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.4062 27.5L19.5938 27.5" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </span>
    </>
  );
}

export default GeneralCuriosities;
