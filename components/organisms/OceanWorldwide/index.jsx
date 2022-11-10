import Background from "@atoms/Background";
import React, { useState } from "react";
import styles from "./OceanWorldwide.module.scss";

import Button from "@atoms/Button/Button";
import Text from "@atoms/Text/Text";
import Heading from "@atoms/Heading/Heading";
import Arrow from "@atoms/Arrow/Arrow";

function OceanWorldWide() {
  return (
    <>
      <div className={styles[`OceanWorldwide__container`]}>
        <section className={styles[`OceanWorldwide__header`]}>
        <img className={styles[`OceanWorldwide__header--rectangle`]} src="assets/images/extras/Rectangle.png"></img>
          <Arrow white={true}></Arrow>
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
          <section className={styles[`OceanWorldwide__buttons`]}>
            <Button
              size="medium"
              color="color-500"
              fontsize="fontsmall"
              className={styles[`OceanWorldwide__buttons--unit`]}
            >
              {" "}
              <Text color="white" size="small">
                Pacific Ocean
              </Text>{" "}
            </Button>
            <Button
              size="medium"
              color="color-500"
              fontsize="fontsmall"
              className={styles[`OceanWorldwide__buttons--unit`]}
            >
              {" "}
              <Text color="white" size="small">
                Atlantic Ocean
              </Text>{" "}
            </Button>
            <Button
              size="medium"
              color="color-500"
              fontsize="fontsmall"
              className={styles[`OceanWorldwide__buttons--unit`]}
            >
              {" "}
              <Text color="white" size="small">
                Indian Ocean
              </Text>{" "}
            </Button>
            <Button
              size="medium"
              color="color-500"
              fontsize="fontsmall"
              className={styles[`OceanWorldwide__buttons--unit`]}
            >
              {" "}
              <Text color="white" size="small">
                Southern Ocean
              </Text>{" "}
            </Button>
            <Button
              size="medium"
              color="color-500"
              fontsize="fontsmall"
              className={styles[`OceanWorldwide__buttons--unit`]}
            >
              {" "}
              <Text color="white" size="small">
                Arctic Ocean
              </Text>{" "}
            </Button>
          </section>
        </div>
      </div>

      <section className={styles[`OceanWorldwide__background`]}>
        <Background />
      </section>
    </>
  );
}

export default OceanWorldWide;
