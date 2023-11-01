import styles from "../../styles/escanearProductos.module.css"
import React, {useState} from 'react'
import { escanearProductos, nuevaVenta } from "../../api/index";

export const EscanearProductoPopUp = (props) => {
    const [imagen, setImagen] = useState(null);
    const [imagenURI, setImagenUri] = useState(null);
    const [editarProductos, setEditarProductos] = useState(false);
    const [productosEscaneados, setProductosEscaneados] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
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
            setProductosEscaneados(res.producto);
            setImagenUri(res.url);
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

        function deleteItem(index){
            setProductosEscaneados(productosEscaneados.filter((producto, i) => i !== index));
        }

        return(
            <>
            {productosEscaneados.map((producto, index) => {
                            return (
                                <div className={styles.nombreProducto} key={index}>
                                    <input type="text" name="nombre" value={form[index].nombre} onChange={(event) => handleInputChange(event,index)}></input>
                                    <input type="number" name="precio_unitario" value={form[index].precio_unitario} onChange={(event) => handleInputChange(event,index)}></input>
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}} onClick = {()=>deleteItem(index)}>
                                        <svg
                                        baseProfile="tiny"
                                        viewBox="0 0 24 24"
                                        fill="pink"
                                        height="2em"
                                        width="2em"
                                        >
                                        <path d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293a.999.999 0 11-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 01-1.414 0 .999.999 0 010-1.414L10.586 12 8.293 9.707a.999.999 0 111.414-1.414L12 10.586l2.293-2.293a.999.999 0 111.414 1.414L13.414 12l2.293 2.293z" />
                                        </svg>
                                    </div>
                                </div>
                            )
                    })}
                    <div style={{position: "absolute"}}>
                <button onClick={handleAceptarClick}>Aceptar</button>
                </div>
            </>
        )
    }

    


  return (
    <div className={styles.main}>
        <form onSubmit={handleSubmit}>
            <div className={styles.formulario}>
            <div className={styles.imagen} style={{ backgroundImage: imagen ? `url(${URL.createObjectURL(imagen)})` : 'none', backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", position: "relative"}}>
                {imagenURI && <img src={imagenURI + "?timestamp=" + Math.random()} alt="" style={{width: "100%", height: "100%", position: "absolute"}}/>}
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

