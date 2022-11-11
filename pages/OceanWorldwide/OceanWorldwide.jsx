import Arrow from '@atoms/Arrow/Arrow'
import Background from '@atoms/Background'
import Button from '@atoms/Button/Button'
import Heading from '@atoms/Heading/Heading'
import OceanButtons from 'pages/OceanWorldwide/OceanButtons/OceanButtons'
import React from 'react'
import styles from "../OceanWorldwide/OceanWorldWide.module.scss"

export default function OceanWorldwide() {
  return (
    <>
    <div className={styles[`OceanWorldwide__container`]}>
      <img className={styles[`OceanWorldwide__header--rectangle`]} src="assets/images/extras/Rectangle.png"/>
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
        <OceanButtons></OceanButtons>
        </div>
        
        <section className={styles[`OceanWorldwide__background`]}>
        <Background />
        
        </section>
        </>

  )}

