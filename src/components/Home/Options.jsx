import React from 'react'

import styles from "../../styles/home.module.css"

export default function Options() {
  return (
    <>    
        <div className={styles.main}>
            <button className={styles.button}>Agregar producto</button>
            <button className={styles.button}>Escanear pedido</button>
        </div>
    </>

  )
}
