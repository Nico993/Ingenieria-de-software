import styles from "../../styles/agregarProductos.module.css"
import React, { useState } from 'react'

import { editarProducto } from "../../api";


export const EditarProductoPopUp = (props) => {
    const [formData, setFormData]=useState(props.product);

    const handleInputChange=(event)=>{
        const{name, value}=event.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]:value,
        }));
    }

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setFormData((prevData)=>({
            ...prevData,
            imagen: imageFile,
        }));
    }

    function handleSubmit(e){
        e.preventDefault();
        const form=new FormData();
        const productoJson={
            codigo: formData.codigo,
            nombre:formData.nombre,
            precio_unitario:formData.precio_unitario,
            cantidad:formData.cantidad,
            descripcion:formData.descripcion,
        };
        console.log(productoJson);
        const jsonString=JSON.stringify(productoJson);
        const jsonBlob=new Blob ([jsonString],{type:'application/json'});

        form.append("producto",jsonBlob,"producto.json");
        form.append("imagen",formData.imagen)

        editarProducto(form).then((res)=>{
            window.location.reload(true);
        })
        .catch((err)=>{
            props.mensajeError("Ocurrió un error al editar el producto");
        })

    }


  return (
    <div className={styles.main}>
        <form onSubmit={handleSubmit} >
            <div className={styles.formulario}>
                <div className={styles.imagen} style={{ backgroundImage: formData.imagen ? `url(${URL.createObjectURL(formData.imagen)})` : 'none', backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
                    <label htmlFor="upload-input" className={styles.uploadLabel}>
                        <div className={styles.uploadIcon}>+</div>
                        <div>Agregar imagen</div>
                    </label>
                    <input name='imagen' id="upload-input" type="file" className={styles.uploadInput} onChange={handleImageChange} required/>
                </div>
                <div className={styles.detalle}>
                    <h4 className={styles.titulo}>Nuevo producto</h4>
                    <input type="text" placeholder='Nombre' className={styles.input} name='nombre' onChange={handleInputChange} required value={formData.nombre}></input>
                    <input type="number" placeholder='Precio' className={styles.input} name='precio' onChange={handleInputChange} required value={formData.precio_unitario}></input>
                    <input type="number" placeholder='Cantidad' className={styles.input} name='cantidad' onChange={handleInputChange} required value={formData.cantidad}></input>
                    <input type="text" placeholder='Descripcion' className={styles.input} name='descripcion' onChange={handleInputChange} required value={formData.descripcion}></input>
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
