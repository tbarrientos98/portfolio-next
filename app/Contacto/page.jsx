"use client"
import styles from './Contacto.module.css'
import Formlario from './Formulario/Formulario';
import 'animate.css';

const Contacto = () => {
    return (
        <div className='container py-5'>
            <h1 className={`${styles.titulohome} animate__animated animate__fadeIn mb-5`}>¡Trabajemos Juntos!</h1>
            <h3 className={`animate__animated animate__fadeInLeft ${styles.subtituloContacto}`}>
                Para más detalles sobre mi trabajo podés ver mi <a href='https://www.linkedin.com/in/tom%C3%A1s-barrientos-672020176/' className={styles.linkContacto}>Linkedin</a>, descargar mi <a href="/cvtbarrientos.pdf" download={'CV Tomas Barrientos'}  className={styles.linkContacto}>CV</a> o mandarme un mensaje.
            </h3>
            {/* <Formlario /> */}
            <div className='mt-5 d-flex justify-content-start align-center' style={{gap: "120px"}}>
                <div>
                    <h4><strong>Tel</strong></h4>
                    <h5><a className={styles.linkContacto} href="https://api.whatsapp.com/send?phone=541151757695&text=Hola+Tomás">+541151757695</a></h5>
                </div>
                <div >
                    <h4><strong>Email</strong></h4>
                    <h5><a className={styles.linkContacto} href="mailto:barrientostomas98@gmail.com">barrientostomas98@gmail.com</a></h5>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
