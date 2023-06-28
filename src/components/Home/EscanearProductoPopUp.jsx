import styles from "../../styles/escanearProductos.module.css"
import React from 'react'

export const EscanearProductoPopUp = () => {
  return (
    <div className={styles.main}>
        <form>
            <div className={styles.formulario}>
                <div className={styles.imagen}>
                    Imagen escaneada
                </div>
                <div className={styles.detalle}>
                    <h4 className={styles.titulo}>Productos escaneados</h4>
                    <div className={styles.nombreProducto}>
                        <p>Producto 1</p>
                        <p>2300</p>
                    </div>
                    <div className={styles.nombreProducto}>
                        <p>Producto 2</p>
                        <p>2560</p>
                    </div>
                    <div className={styles.nombreProducto}>
                        <p>Producto 3</p>
                        <p>1600</p>
                    </div>
                    <div className={styles.nombreProducto}>
                        <p>Producto 4</p>
                        <p>500</p>
                    </div>
                    <div>
                        <button>Modificar</button>
                        <button>Aceptar</button>
                        <button>Cancelar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}