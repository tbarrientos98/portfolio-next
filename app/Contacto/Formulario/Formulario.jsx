import React, { useState } from 'react';
import styles from '../Contacto.module.css'
import stylesButton from '../../components/ButtonLink/ButtonLink.module.css'
import 'animate.css';

export default function Formlario(){
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        mail: '',
        telefono: '',
        mensaje: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Enviar los datos a tu correo usando el cliente de correo electrónico de tu servidor
            await fetch('/api/enviarCorreo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            // Opcional: mostrar un mensaje de éxito al usuario
            alert('¡Formulario enviado exitosamente!');
        } catch (error) {
            // Manejo de errores en caso de que falle el envío del formulario
            console.error('Error al enviar el formulario:', error);
            alert('Ocurrió un error al enviar el formulario. Inténtalo nuevamente.');
        }
    };
    return(
        <form onSubmit={handleSubmit} id={styles.form} className='mt-5 animate__animated animate__fadeIn'>
                <div className={styles.contenedorForm}>
                    <label className={styles.labelContact}>
                        
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className={styles.input} placeholder='NOMBRE'/>
                    </label>
                    <label className={styles.labelContact}>
                        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required className={styles.input} placeholder='APELLIDO'/>
                    </label>
                    <label className={styles.labelContact}>
                        <input type="email" name="mail" value={formData.mail} onChange={handleChange} required className={styles.input} placeholder='EMAIL'/>
                    </label>
                    <label className={styles.labelContact}>
                        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required className={styles.input} placeholder='TELEFONO'/>
                    </label>
                    <label className={styles.labelMensaje}>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required className={`${styles.inputMensaje}`} placeholder='MENSAJE'/>
                    </label>
                </div>
                <button className={`${stylesButton.buttonHome} ${stylesButton.slideInFwdBottom}`} type="submit">Enviar formulario</button>
            </form>
    )
}