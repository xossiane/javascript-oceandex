import Arrow from "@atoms/Arrow/Arrow";
import Background from "@atoms/Background/Background";
import Button from "@atoms/Button/Button";
import Heading from "@atoms/Heading/Heading";
import Text from "@atoms/Text/Text";
import React from "react";
import styles from "../OceanWorldwide/OceanWorldWide.module.scss";

export default function OceanWorldwide() {
  const oceans = [
    "Atlantic Ocean",
    "Pacific Ocean",
    "Indian Ocean",
    "Southern Ocean",
    "Arctic Ocean",
  ];
  return (
    <>
      <div className={styles[`OceanWorldwide__container`]}>
        <img
          className={styles[`OceanWorldwide__header--rectangle`]}
          alt=""
          src="assets/images/extras/Rectangle.png"
        />
        <section className={styles[`OceanWorldwide__header`]}>
          <Arrow href="/home" white={true}></Arrow>
          <Heading
            level="1"
            className={styles[`OceanWorldwide__container--text`]}
            size="Xlarge"
            color="white"
            style="italic"
          >
            {" "}
            Ocean WorldWide
          </Heading>
        </section>
        <div className={styles[`OceanWorldwide__content`]}>
          <section className={styles[`OceanWorldwide__content--buttons`]}>
            {oceans.map((ocean) => (
              <Button href="/OceanCuriosities" size="large" color="color-500">
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
    </>
  );
}
