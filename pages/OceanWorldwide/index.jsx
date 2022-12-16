import ArrowLeft from "@atoms/ArrowLeft";
import Background from "@atoms/Background";
import Button from "@atoms/Button";
import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import React from "react";
import styles from "./styles.module.scss";

export default function OceanWorldwide() {
  const oceans = [
    "Atlantic Ocean",
    "Pacific Ocean",
    "Indian Ocean",
    "Southern Ocean",
    "Arctic Ocean",
  ];
  return (
    <div className={styles[`OceanWorldwide`]}>
      <div className={styles[`OceanWorldwide__container`]}>
        
      
        <section className={styles[`OceanWorldwide__header`]}>
          <Heading
            level="1"
            className={styles[`OceanWorldwide__container--text`]}
            size="Xlarge"
            color="black"
            style="italic"
          >
            {" "}
            Ocean WorldWide
          </Heading>
        </section>
        <div className={styles[`OceanWorldwide__content`]}>
          <section className={styles[`OceanWorldwide__content--buttons`]}>
            {oceans.map((ocean) => (
              <Button href="/OceanCuriosities" size="small" key={ocean} color="color-500">
                <Text color="white" size="large">
                  {ocean}
                </Text>
              </Button>
            ))}
          </section>
        </div>
      </div>
      <section className={styles[`OceanWorldwide__background`]}>
        <Background />
      </section>
    </div>
  );
}
