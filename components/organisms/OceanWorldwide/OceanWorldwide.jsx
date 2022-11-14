import Background from "@atoms/Background/Background";
import React, { useState } from "react";
import styles from "./OceanButtons.module.scss";

import Button from "@atoms/Button/Button.jsx";
import Text from "@atoms/Text/Text";
import OceanWorldwide from "../OceanWorldwide";

function OceanButtons() {
  return (
    <>
    
      <div className={styles[`OceanWorldwide__container`]}>
<<<<<<<< HEAD:pages/OceanWorldwide/OceanButtons/OceanButtons.jsx
========
        <img
          className={styles[`OceanWorldwide__header--rectangle`]}
          src="assets/images/extras/Rectangle.png" alt=""
        />
        <section className={styles[`OceanWorldwide__header`]}>
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
>>>>>>>> c651fca78cd10a2ff6ad6d6d7fd2e90473088bcd:components/organisms/OceanWorldwide/OceanWorldwide.jsx

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
      
    </>
  );
}

export default OceanButtons;
