import Image from 'next/image'
import styles from '../SobreMi.module.css'

export default function Experiencia(){
    return(
        <div className={`${styles.experienciaConenedor} container-fluid`}>
            <div className='container-lg py-5'>
                <h2 className={`mb-5 ${styles.tituloExperiencias}`}>Experiencia laboral</h2>
                <div className={styles.experiencia}>
                    <h5 style={{maxWidth: "50%", display: "flex", alignItems: "center"}}>2020 – ACTUALMENTE <br /> SOLUTION BOX</h5>
                    <div className={styles.primerEmpleo}>
                        <p>Desarrollador web:</p>
                        <Image src="/solution-box.png" className='img-thumbnail' width={150} height={50} alt="" />
                    </div>
                    <p>Creación y mantenimiento de sitios webs responsivos en sucursal de Argentina y todo LATAM, implementando PHP, jQuery, React.js y Node.js</p>
                </div>
            </div>
        </div>
    )
}