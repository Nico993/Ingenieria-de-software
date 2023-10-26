import React,{useState} from 'react'

import styles from "../../styles/home.module.css"
import { AgregarProductoPopUp } from './AgregarProductoPopUp';
import { EscanearProductoPopUp } from './EscanearProductoPopUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Options() {

  const [agregarProductoPopUp,setagregarProductoPopUp]=useState(false)
  const [escanearProductoPupUp,setescanearProductoPopUp]=useState(false)

  function clickAgregarProductoPopUp(){
    setagregarProductoPopUp(true);
  }

  function clickEscanearProductoPupUp(){
    setescanearProductoPopUp(true);
  }

  function mostrarMensajeExito(mensaje){
    toast.success(mensaje, {
      posición : "arriba a la derecha" ,
      ocultarProgressBar : false ,
      closeOnClick : true ,
      pausaOnHover : true ,
      arrastrable : true ,
      progreso : false ,
      tema : "luz" ,
      })
  }
  function mostrarMensajeError(mensaje){
    toast.error(mensaje)
  }

  return (
    <>    
        <div className={styles.main}>
           <button className={styles.button} onClick={clickAgregarProductoPopUp}>Agregar producto</button>
           <button className={styles.button} onClick={clickEscanearProductoPupUp}>Escanear pedido</button>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8521be" fillOpacity="1" d="M0,224L1440,224L1440,320L0,320Z"></path></svg>
        </div>
        {agregarProductoPopUp === true ? <AgregarProductoPopUp close = {()=>setagregarProductoPopUp(false)} mensajeExito={mostrarMensajeExito} mensajeError={mostrarMensajeError}></AgregarProductoPopUp>:null}
        {escanearProductoPupUp=== true ? <EscanearProductoPopUp close = {()=>setescanearProductoPopUp(false)} mensajeExito={mostrarMensajeExito} mensajeError={mostrarMensajeError}></EscanearProductoPopUp>:null}
        <ToastContainer />
    </>

  )
}
