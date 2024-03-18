import React from 'react';
// import Navigation from './components/Navigation/Navigation';
// import Context from './components/Context/Context';
import styles from './globals.css'

export default function MyLayout({ children }) {
    return (
        <div className={styles.fondo}>
            {/* <Navigation /> */}
            {children}
        </div>
    );
}
