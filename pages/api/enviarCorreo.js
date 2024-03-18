// Enviar el formulario por correo electrónico utilizando nodemailer (instala nodemailer previamente: npm install nodemailer)
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nombre, apellido, mail, telefono } = req.body;

        // Configura el transporter de nodemailer con tus credenciales de correo
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Puedes usar otros proveedores de correo también
            host: 'http://webmail.tomasbarrientos.com.ar',
            port: 25,
            auth: {
                user: 'info@tomasbarrientos.com.ar',
                pass: 'limemce8',
            },
        });

        // Configura el correo que se enviará
        const correoOptions = {
            from: 'mail.depcsuite.com',
            to: 'barrientostomas98@gmail.com', // El correo de destino
            subject: 'Nuevo formulario de contacto',
            text: `
            Nombre: ${nombre}
            Apellido: ${apellido}
            Correo electrónico: ${mail}
            Teléfono: ${telefono}
        `,
        };

        try {
            // Envía el correo
            await transporter.sendMail(correoOptions);
            res.status(200).json({ message: 'Formulario enviado con éxito' });
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).json({ error: 'Ocurrió un error al enviar el formulario' });
        }
    } else {
        res.status(405).json({ error: 'Método no permitido' });
    }
}


// export async function GET(request) {
//   return new Response('Hello, Next.js!')
// }