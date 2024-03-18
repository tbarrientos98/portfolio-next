"use client"
import Image from 'next/image'
import styles from './Proyectos.module.css'
import { Tooltip } from "@nextui-org/react";

const proyectos = [
    {
        titulo: 'ABM Clientes',
        descripcion: 'Alta, Baja, modificación de un registro de clientes realizado en HTML, CSS, PHP, Bootstrap y Json.',
        imagen: '/abmclientes.png',
        url: 'https://github.com/tbarrientos98/ABMclientes',
        id: 1
    },
    {
        titulo: 'Sistema de gestión de ventas',
        descripcion: 'Sistema de gestión de clientes, productos y ventas, con login de usuarios. Realizado en HTML, CSS, PHP, MVC, Bootstrap, Js, Ajax, jQuery y MySQL de base de datos.',
        imagen: '/abmventas.png',
        url: 'https://github.com/tbarrientos98/ABMventas',
        id: 2
    },
    {
        titulo: 'Proyecto integrador: Curso de full stack DepcSuite',
        descripcion: 'Proyecto Full Stack desarrollado en Laravel, Javascript, jQuery, AJAX, HTML, CSS, con panel administrador, gestor de usuarios, módulo de permisos y funcionalidades a fines.',
        imagen: '/sistema-admin.png',
        url: '',
        id: 3
    },
    {
        titulo: 'Consumo de api: Rick & Morty: Platzi',
        descripcion: 'Sitio web resposive integrando el fetching de datos de una api y diversos hooks de react.js',
        imagen: '/react-hooks.png',
        url: 'https://github.com/tbarrientos98/ReactHooks',
        id: 4
    },
    {
        titulo: 'Candybay Ecommerce: Curso de React js CODERHOUSE',
        descripcion: 'Sitio web resposive  aplicando fetching de datos a una base de datos en firebase, formik para creacion de formulario, axios, semantic UI, material UI, useEffect, useState y context api',
        imagen: '/candybay.png',
        web: 'https://62a1f99eab07ae0a460c522f--radiant-choux-e47c1d.netlify.app/',
        url: 'https://github.com/tbarrientos98/miecommerce1',
        id: 5
    },
]

export default function Proyectos() {
    return (
        <div className={styles.contenedorProyectos}>
            <div className={`container`}>
                <h1 className={`my-5 ${styles.titulohome} ${styles.fadeIn}`}>
                    Mis proyectos!
                </h1>
                <h4 className={`${styles.slideInLeft}`}>Estos son algunos de los trabajos que he realizado:</h4>
                <div className={`${styles.proyectos}`}>
                    {proyectos.map(({ titulo, descripcion, imagen, url, id, web }) => (
                        <div className={`${styles.cards} ${styles.flipindiag2tl} my-3`} key={id}>
                            <Image src={imagen} className={`${styles.imgProyecto} img-fluid p-3`} width={500} height={250} alt='' />
                            <div className={`${styles.textProyecto} px-3`}>
                                <h4>{titulo}</h4>
                                <p>{descripcion}</p>
                            </div>
                            <div className={`${styles.codigoFuente} ${web && 'justify-content-between'}`}>
                                {web &&
                                    <a href={web}>
                                        Web
                                    </a>
                                }
                                <a href={url}>
                                    <Tooltip className={styles.github} color={"foreground"} content={"ver código fuente"}>
                                        <Image src="/icons8-github-48.svg" width={35} height={50} alt="" />
                                    </Tooltip>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}