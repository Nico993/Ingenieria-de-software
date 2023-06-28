import React from 'react'

import styles from "../../styles/navbar.module.css";
import { useNavigate } from 'react-router-dom';

export default function NavBar() {

    const navigate=useNavigate();
    function clickInventario(){
        navigate('/inventario')
    }

    function clickHome(){
        navigate('/')
    }

    return (
        <nav className={styles.main}>
            <div className={styles.navbar}>
                <div onClick={clickInventario} style={{cursor:'pointer'}}>
                <p>Inventario</p>
                </div>
                <div>
                <h1 className={styles.title} onClick={clickHome} style={{cursor:'pointer'}}>Marca</h1>
                </div>
                <div>
                <p>Estadisticas</p>
                </div>
            </div>
        </nav>
      );
}
