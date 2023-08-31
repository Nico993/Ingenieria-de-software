import React, { useEffect, useState } from 'react';
import styles from '../../styles/inventario.module.css'; // Importa el archivo CSS de estilos
import NavBar from '../Home/NavBar';
import { obtenerProductos } from '../../api';

const Inventario = () => {
  const [productos,setProductos]=useState([]);
  useEffect(()=>{
    obtenerProductos().then((res)=>{
      setProductos(res)
    })
    .catch((err)=>{
        console.log(err)
    })

  },[])

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
          </tr>
        </thead>
        <tbody>
          {productos.map(product => (
            <tr key={product.codigo}>
              <td>{product.nombre}</td>
              <td>${product.precio_unitario && product.precio_unitario.toFixed(2)}</td>
              <td>{product.cantidad}</td>
              <td>{product.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    
  );
};


export default Inventario;


