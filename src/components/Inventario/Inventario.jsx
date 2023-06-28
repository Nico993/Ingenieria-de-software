import React from 'react';
import styles from '../../styles/inventario.module.css'; // Importa el archivo CSS de estilos
import NavBar from '../Home/NavBar';

const Inventario = () => {
  const products = [
    { id: 1, name: 'Producto 1', price: 10.99, quantity: 5, description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', price: 19.99, quantity: 3, description: 'Descripción del Producto 2' },
    { id: 3, name: 'Producto 3', price: 5.99, quantity: 10, description: 'Descripción del Producto 3' }
  ];

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
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.quantity}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    
  );
};

export default Inventario;


