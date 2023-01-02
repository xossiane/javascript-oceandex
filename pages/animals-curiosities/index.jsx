import AnimalsCuriosities from "@molecules/AnimalsCuriosities";
import styles from "./styles.module.scss";
import React from "react";
import Background from "@atoms/Background";
import Heading from "@atoms/Heading";

export default function AnimalsCuriositiesPage() {
  return (
    <>
      <div className={styles[`AnimalsCuriositiesPage__Content`]}>
        <header className={styles[`AnimalsCuriositiesPage__Header`]}>
          <Heading
            level="1"
            className={styles[`AnimalsCuriositiesPage__Content--text`]}
            color="black"
            style="italic"
            pageTitle= {true}
          >
            {" "}
            Animal's Curiosities{" "}
          </Heading>
        </header>
        <div className={styles[`AnimalsCuriositiesPage__Container`]}>
          <AnimalsCuriosities></AnimalsCuriosities>
        </div>
       
      </div>
    </>
  );
}
