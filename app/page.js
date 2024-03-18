"use client"
import styles from './page.module.css'
import 'animate.css';
import ButtonLink from './components/ButtonLink/ButtonLink';
import MyLayout from './MyLayout';


export default function Home() {
	let urlProyectos = '/Proyectos';

	return (
		<MyLayout>
			<div className={styles.contenedor}>
				<div className={`container`}>
					<h1 className={`${styles.titulohome} animate__animated animate__fadeIn animate__slow`}>Hola! <br />
						Soy Tomás Barrientos.
					</h1><br />
					<h2 className={`animate__animated animate__fadeInLeft ${styles.subtitulo} mb-5`}>Programador Web</h2>
					<ButtonLink className={`animate__animated animate__fadeInUpBig animate__slow`} url={urlProyectos} />
				</div>
			</div>
		</MyLayout>
	)
}
