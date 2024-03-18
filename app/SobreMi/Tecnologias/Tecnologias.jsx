import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode as fasFaCode } from '@fortawesome/free-solid-svg-icons'
import { faDatabase as fasFaDatabase } from '@fortawesome/free-solid-svg-icons'
import styles from '../SobreMi.module.css'

export default function Tecnologias() {
    return (
        <div className='container my-5'>
            <h2 className={` ${styles.tituloTecnologias}`}>Tecnologías</h2>
            <div className={styles.cardsTecnologias}>
                <div className={`mt-3 ${styles.tecnologias} animate__animated animate__fadeIn`}>
                    <FontAwesomeIcon icon={fasFaCode} className={`${styles.iconFront}`} />
                    <h4 style={{ fontWeight: 700, textTransform: "uppercase" }} className={styles.frontEnd}>Front-End</h4>
                    <p>
                        Experiencia con Javascript: <span className={styles.frontEnd}>jQuery, React js, Next js</span>. Y Framworks de PHP como Symfony 3.4, 1.2 y Laravel
                    </p>
                </div>
                <div className={`mt-3 ${styles.tecnologias} animate__animated animate__fadeIn`}>
                    <FontAwesomeIcon icon={fasFaDatabase} className={styles.iconFront} />
                    <i className="fa-solid fa-database"></i>
                    <h4 style={{ fontWeight: 700, textTransform: "uppercase" }} className={styles.backEnd}>Back-End</h4>
                    <p>
                        Experiencia con Frameworks de <span className={styles.backEnd}>PHP</span>
                        y bases de datos <span className={styles.backEnd}>MySQL, phpMyAdmin, Workbrench, Firebase</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}