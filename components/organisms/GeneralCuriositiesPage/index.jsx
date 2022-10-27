import GeneralCuriosities from '@molecules/GeneralCuriosities'
import styles from "./GeneralCuriositiesPage.module.scss";
import React from 'react'
import Background from '@atoms/Background';
import Heading from '@atoms/Heading/Heading';

function GeneralCuriositiesPage() {
  return (
    <div className={styles[`GeneralCuriositiesPage__Content`]}>
      <Heading level="2" className={styles[`GeneralCuriositiesPage__Content--text`]} size="large" color="white" style="italic"> General Curiosities </Heading>
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