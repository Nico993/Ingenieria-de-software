import styles from "../../styles/agregarProductos.module.css"
import React from 'react'

export const AgregarProductoPopUp = (props) => {
    function handleSubmit(e){
        e.preventDefault()
    }

  return (
    <div className={styles.main}>
        <form onSubmit={handleSubmit}>
            <div className={styles.formulario}>
                <div className={styles.imagen}>
                    <label htmlFor="upload-input" className={styles.uploadLabel}>
                        <div className={styles.uploadIcon}>+</div>
                        <div>Agregar imagen</div>
                    </label>
                    <input id="upload-input" type="file" className={styles.uploadInput} />
                </div>
                <div className={styles.detalle}>
                    <h4 className={styles.titulo}>Nuevo producto</h4>
                    <input type="text" placeholder='Nombre' className={styles.input}></input>
                    <input type="number" placeholder='Precio' className={styles.input}></input>
                    <input type="number" placeholder='Cantidad' className={styles.input}></input>
                    <input type="text" placeholder='Descripcion' className={styles.input}></input>
                    <div>
                        <button type="submit">Aceptar</button>
                        <button type="button" onClick={props.close}>Cancelar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}
