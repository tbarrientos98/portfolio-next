"use client"

import Link from 'next/link'
import styles from './Navigation.module.css'
import Theme from './Theme/Theme'

const links = [
    {
        label: 'Home',
        route: '/'
    }, {
        label: 'Sobre Mi',
        route: '/SobreMi'
    }, {
        label: 'Proyectos',
        route: '/Proyectos'
    }, {
        label: 'Contacto',
        route: '/Contacto'
    }
]

export default function Navigation() {
    return (
        <header className={styles.header}>
            <div className={styles.description}>
                <ul className={styles.navigation}>
                    {links.map(({ label, route }) => (
                        <li key={route} >
                            <Link href={route} className={`${styles.linkeado}`}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* <Theme/> */}
            </div>
        </header>
    )
}