import Background from "@atoms/Background";
import React, { useState } from "react";
import styles from "./OceanButtons.module.scss";

import Button from "@atoms/Button/Button.jsx";
import Text from "@atoms/Text/Text";
import OceanWorldwide from "../OceanWorldwide";

function OceanButtons() {
  return (
    <>
    
      <div className={styles[`OceanWorldwide__container`]}>

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
