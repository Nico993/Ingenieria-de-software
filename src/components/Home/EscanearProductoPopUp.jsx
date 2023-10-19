import styles from "../../styles/escanearProductos.module.css"
import React, {useState} from 'react'

export const EscanearProductoPopUp = (props) => {
    const [imagen, setImagen] = useState(null);
    const [editarProductos, setEditarProductos] = useState(false);
    const [productosEscaneados, setProductosEscaneados] = useState([
        {
            nombre: 'Producto 1',
            precio: 2300,
        },
        {
            nombre: 'Producto 2',
            precio: 2560,
        },
        {
            nombre: 'Producto 3',
            precio: 1600,
        },
        {
            nombre: 'Producto 4',
            precio: 500,
        }
    ]);

    function handleSubmit(e){
        //Llamar al endpoint de una nueva venta
        e.preventDefault();
    }

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setImagen(imageFile);
        //Llamar al endpoint de escanear productos
    }

    
    const ModificarProductosEscaneados = () =>{
        const [form, setForm] = useState(productosEscaneados);

        function handleInputChange(event, index){
            const{name, value}=event.target;
            const newForm = [...form];
            newForm[index][name] = value;
            setForm(newForm);
        }

        function handleAceptarClick(){
            setProductosEscaneados(form);
            setEditarProductos(false);
        }

        return(
            <>
            {productosEscaneados.map((producto, index) => {
                            return (
                                <div className={styles.nombreProducto} key={index}>
                                    <input type="text" name="nombre" value={form[index].nombre} onChange={(event) => handleInputChange(event,index)}></input>
                                    <input type="number" name="precio" value={form[index].precio} onChange={(event) => handleInputChange(event,index)}></input>
                                </div>
                            )
                    })}
                <button onClick={handleAceptarClick}>Aceptar</button>
            </>
        )
    }

    


  return (
    <div className={styles.main}>
        <form onSubmit={handleSubmit}>
            <div className={styles.formulario}>
            <div className={styles.imagen} style={{ backgroundImage: `url(${imagen && URL.createObjectURL(imagen)})`}}>
                    <label htmlFor="upload-input" className={styles.uploadLabel}>
                        <div className={styles.uploadIcon}>+</div>
                        <div>Agregar imagen</div>
                    </label>
                    <input name='imagen' id="upload-input" type="file" className={styles.uploadInput} onChange={handleImageChange} required/>
                </div>

                <div className={styles.detalle}>
                    <h4 className={styles.titulo}>Productos escaneados</h4>
                    {editarProductos ? <ModificarProductosEscaneados/> : <>
                        {productosEscaneados.map((producto, index) => {
                            return (
                                <div className={styles.nombreProducto} key={index}>
                                    <p>{producto.nombre}</p>
                                    <p>${producto.precio}</p>
                                </div>
                            )
                        })}
                    </>}
                    
                    <div>
                        <button type="button" onClick={()=>setEditarProductos(true)}>Modificar</button>
                        <button type="submit">Aceptar</button>
                        <button type="button" onClick={props.close}>Cancelar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

