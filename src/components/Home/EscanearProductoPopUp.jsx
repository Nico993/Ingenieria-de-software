import styles from "../../styles/escanearProductos.module.css"
import React from 'react'

export const EscanearProductoPopUp = (props) => {

    function handleSubmit(e){
        e.preventDefault();
    }

  return (
    <div className={styles.main}>
        <form onSubmit={handleSubmit}>
            <div className={styles.formulario}>
            <div className={styles.imagen}>
                <img src="Imagenes/pedidoEscaneado.png" alt="Imagen escaneada" className={styles.imagenEscaneada} />
            </div>

                <div className={styles.detalle}>
                    <h4 className={styles.titulo}>Productos escaneados</h4>
                    <div className={styles.nombreProducto}>
                        <p>Producto 1</p>
                        <p>$2300</p>
                    </div>
                    <div className={styles.nombreProducto}>
                        <p>Producto 2</p>
                        <p>$2560</p>
                    </div>
                    <div className={styles.nombreProducto}>
                        <p>Producto 3</p>
                        <p>$1600</p>
                    </div>
                    <div className={styles.nombreProducto}>
                        <p>Producto 4</p>
                        <p>$500</p>
                    </div>
                    <div>
                        <button type="button">Modificar</button>
                        <button type="submit">Aceptar</button>
                        <button type="button" onClick={props.close}>Cancelar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}