import React, { useEffect, useState } from 'react';
import styles from '../../styles/inventario.module.css'; // Importa el archivo CSS de estilos
import NavBar from '../Home/NavBar';
import {EditarProductoPopUp} from "./EditarProductoPopUp";
import { obtenerProductos, eliminarProducto } from '../../api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inventario = () => {
  const [productos,setProductos]=useState([]);
  const [confirmarEliminar,setConfirmarEliminar]=useState(null);
  const [editarProductoPopUp,setEditarProductoPopUp]=useState(null)

  useEffect(()=>{
    obtenerProductos().then((res)=>{
      setProductos(res)
    })
    .catch((err)=>{
        console.log(err)
    })

  },[]);

  function popUpConfirmacion(codigo){
    setConfirmarEliminar(codigo);
  }

  function eliminarProductoPermanentemente(){
    eliminarProducto(confirmarEliminar).then((res)=>{
      setProductos(productos.filter((product)=>product.codigo!==confirmarEliminar));
      toast.success('Producto eliminado con éxito', {
        position : "top-right" ,
        hideProgressBar : false ,
        closeOnClick : true ,
        pauseOnHover : true ,
        draggable : true ,
        progress : false ,
        theme : "light" ,
        });
    })
    .catch((err)=>{
      console.log(err);
      toast.error('Ocurrió un error al eliminar el producto', {
        position : "top-right" ,
        hideProgressBar : false ,
        closeOnClick : true ,
        pauseOnHover : true ,
        draggable : true ,
        progress : false ,
        theme : "light" ,
        });
    })
    .finally(()=>{
      setConfirmarEliminar(null);
    });
  }

  function  handleEditarProducto(product){
    setEditarProductoPopUp(product);
  }

  return (
    <>
    <NavBar></NavBar>

    <div className={styles.inventory}>
      <h2 className={styles.title}>Inventario - Lista de precios</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(product => (
            <tr key={product.codigo}>
              <td>{product.nombre}</td>
              <td>${product.precio_unitario && product.precio_unitario.toFixed(2)}</td>
              <td>{product.cantidad}</td>
              <td>{product.descripcion}</td>
              <td className={styles.acciones}>
                <div>
                  <button
                  className={styles.editarButton}
                  type='button'
                  onClick={()=>handleEditarProducto(product)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>

                  </button>
                  <button
                    onClick={()=>{popUpConfirmacion(product.codigo)}}
                    className={styles.eliminarButton}
                   type='button'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>                 
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {confirmarEliminar 
    && 
    <PopUpConfirmacion
    mensaje='¿Está seguro que desea eliminar este producto de manera permanente?'
    cancelar={()=>setConfirmarEliminar(false)}
    continuar={eliminarProductoPermanentemente}
    />}
    <ToastContainer/>
    {editarProductoPopUp ? <EditarProductoPopUp close = {()=>setEditarProductoPopUp(false)} product = {editarProductoPopUp}></EditarProductoPopUp>:null}
    </>
    
  );
};

const PopUpConfirmacion = (props) =>{
  return(
    <div className={styles.popUp}>
    <div className={styles.popUpContenedorPrincipal}>
        <p className={styles.popUpMesaje}>
        {props.mensaje}
        </p>
        <div className={styles.popUpContenedorOpciones}>
        <div>
            <button
            className={styles.popUpCancelarButton}
            onClick={props.cancelar}
            type='button'
            >
            Cancelar
            </button>
            <button
            className={styles.popUpContinuarButton}
            onClick={props.continuar}
            type='button'
            >
            Continuar
            </button>
        </div>
        </div>
    </div>
    </div>
  )
}


export default Inventario;


