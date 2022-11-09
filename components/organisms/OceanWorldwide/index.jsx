import Background from '@atoms/Background'
import React from 'react'
import styles from './OceanWorldwide.module.scss'

function OceanWorldWide() {
  return (
    <>
    <div className={styles[`OceanWorldwide__container`]}>
        <section className={styles[`OceanWorldwide__content`]}>
        <h1> Hello everyone this is us</h1>

        </section>
       
    </div>
    <Background/>
    </>
  )
}

export default OceanWorldWide