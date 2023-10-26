import styles from "../../styles/escanearProductos.module.css"
import React, {useState} from 'react'
import { escanearProductos, nuevaVenta } from "../../api/index";

export const EscanearProductoPopUp = (props) => {
    const [imagen, setImagen] = useState(null);
    const [editarProductos, setEditarProductos] = useState(false);
    const [productosEscaneados, setProductosEscaneados] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        console.log("Pasa");
        const form=new FormData();
        const productoJson={
            venta: productosEscaneados
        };
        console.log(productoJson);
        const jsonString=JSON.stringify(productoJson);
        const jsonBlob=new Blob ([jsonString],{type:'application/json'});

        form.append("venta",jsonBlob,"venta.json");
        nuevaVenta(form).then((res)=>{
            props.mensajeExito('Venta agregada');
            props.close()
        })
        .catch((err)=>{
            props.mensajeError('Error al agregar la venta.')
            console.log(err)
        })
    }

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setImagen(imageFile);
        const form=new FormData();
        form.append("imagen",imageFile)
        escanearProductos(form).then((res)=>{
            console.log(res);
            setProductosEscaneados(res);

        })
        .catch((err)=>{
            console.log(err);
            props.mensajeError('Error al escanear los productos.')
        });
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
                                    <input type="number" name="precio_unitario" value={form[index].precio_unitario} onChange={(event) => handleInputChange(event,index)}></input>
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
            <div className={styles.imagen}>
                    <label htmlFor="upload-input" className={styles.uploadLabel}>
                        <div className={styles.uploadIcon}>+</div>
                        <div>Agregar imagen</div>
                    </label>
                    <input name='imagen' id="upload-input" type="file" className={styles.uploadInput} onChange={handleImageChange}/>
                </div>

                <div className={styles.detalle}>
                    <h4 className={styles.titulo}>Productos escaneados</h4>
                    {editarProductos ? <ModificarProductosEscaneados/> : <>
                        {productosEscaneados.map((producto, index) => {
                            return (
                                <div className={styles.nombreProducto} key={index}>
                                    <p>{producto.nombre}</p>
                                    <p>${producto.precio_unitario}</p>
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

