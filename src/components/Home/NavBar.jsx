import React from 'react'

import styles from "../../styles/navbar.module.css";

export default function NavBar() {
    return (
        <nav className={styles.main}>
            <div className={styles.navbar}>
                <div>
                <p>Inventario</p>
                </div>
                <div>
                <h1 className={styles.title}>Marca</h1>
                </div>
                <div>
                <p>Estadisticas</p>
                </div>
            </div>
        </nav>
      );
}
