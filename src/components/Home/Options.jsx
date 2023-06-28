import React,{useState} from 'react'

import styles from "../../styles/home.module.css"
import { AgregarProductoPopUp } from './AgregarProductoPopUp';
import { EscanearProductoPopUp } from './EscanearProductoPopUp';

export default function Options() {

  const [agregarProductoPopUp,setagregarProductoPopUp]=useState(false)
  const [escanearProductoPupUp,setescanearProductoPopUp]=useState(false)

  function clickAgregarProductoPopUp(){
    setagregarProductoPopUp (true);
  }

  function clickEscanearProductoPupUp(){
    setescanearProductoPopUp(true);
  }

  return (
    <>    
        <div className={styles.main}>
           <button className={styles.button} onClick={clickAgregarProductoPopUp}>Agregar producto</button>
           <button className={styles.button} onClick={clickEscanearProductoPupUp}>Escanear pedido</button>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8521be" fill-opacity="1" d="M0,224L1440,224L1440,320L0,320Z"></path></svg>
        </div>
        {agregarProductoPopUp === true ? <AgregarProductoPopUp></AgregarProductoPopUp>:null}
        {escanearProductoPupUp=== true ? <EscanearProductoPopUp></EscanearProductoPopUp>:null}
    </>

  )
}
