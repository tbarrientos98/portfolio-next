import Image from 'next/image'
import styles from './SobreMi.module.css'
import Tecnologias from './Tecnologias/Tecnologias';
import Experiencia from './Experiencia/Experiencia';
import 'animate.css';

export default function SobreMi() {
    return (
        <>
            <div className={`container-fluid ${styles.fondoSobreMi}`}>
                <div className="container">
                    <h1 className={`py-5 ${styles.titulohome} animate__animated animate__fadeIn`}>
                        Sobre mi!
                    </h1>
                    <div className={`${styles.sobremi}`}>
                        <h5 className={`animate__animated animate__fadeInLeft ${styles.subtituloSobreMi}`}>
                            Un programador prudente, responsable y altamente capaz, 
                            apasionado por la creación de soluciones innovadoras. 
                            Mi enfoque meticuloso en cada proyecto garantiza resultados sólidos y confiables. 
                            Siempre comprometido con el aprendizaje continuo y el perfeccionamiento de mis habilidades, 
                            busco desafíos que impulsen mi crecimiento profesional. Con un firme compromiso con la calidad y la eficiencia, 
                            estoy listo para afrontar cualquier desafío que se presente en el mundo del desarrollo web.
                        </h5>
                        <Image src="/fotocvsinfondo.png" className={`${styles.imgSobreMi} `} width={300} height={300} alt="" />
                    </div>
                </div>
            </div>
            <Tecnologias />
            <Experiencia />
        </>
    )
}