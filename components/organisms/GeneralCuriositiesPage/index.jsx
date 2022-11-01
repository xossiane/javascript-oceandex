import GeneralCuriosities from '@molecules/GeneralCuriosities'
import styles from "./GeneralCuriositiesPage.module.scss";
import React from 'react'
import Background from '@atoms/Background';
import Heading from '@atoms/Heading/Heading';
import Arrow from '@atoms/Arrow/Arrow';

function GeneralCuriositiesPage() {
  return (
    <div className={styles[`GeneralCuriositiesPage__Content`]}>
      <img className={styles[`GeneralCuriositiesPage__Header--rectangle`]} src="assets/images/extras/Rectangle.png"></img>
      <header className={styles[`GeneralCuriositiesPage__Header`]}>  
      <Arrow white={true}></Arrow>
      <Heading level="2" className={styles[`GeneralCuriositiesPage__Content--text`]} size="Xlarge" color="white" style="italic"> General Curiosities </Heading>
      </header>
        <div className={styles[`GeneralCuriositiesPage__Container`]}>
        <GeneralCuriosities></GeneralCuriosities>
    <span className={styles[`GeneralCuriositiesPage__Background`]} >
        <Background></Background>
        
    </span>
    </div>
    </div>
  )
}

export default GeneralCuriositiesPage