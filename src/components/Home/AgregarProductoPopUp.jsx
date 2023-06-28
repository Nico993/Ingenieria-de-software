import styles from "../../styles/agregarProductos.module.css"
import React from 'react'

export const AgregarProductoPopUp = () => {
  return (
    <div className={styles.main}>
        <form>
            <div className={styles.formulario}>
                <div className={styles.imagen}>
                    <input type="file"></input>
                </div>
                <div className={styles.detalle}>
                    <h4 className={styles.titulo}>Nuevo producto</h4>
                    <input type="text" placeholder='Nombre' className={styles.input}></input>
                    <input type="number" placeholder='Precio' className={styles.input}></input>
                    <input type="numbre" placeholder='Cantidad' className={styles.input}></input>
                    <input type="text" placeholder='Descripcion' className={styles.input}></input>
                    <div>
                        <button>Aceptar</button>
                        <button>Cancelar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}
