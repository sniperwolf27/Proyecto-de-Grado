let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  const nodemailer = require('nodemailer');

  // Crear un objeto de transporte SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'tu_correo@gmail.com',
      pass: 'Vasilica2827'
    }
  });
  
  // Configurar el correo electrónico del destinatario
  const mailOptions = {
    from: 'tu_correo@gmail.com',
    to: 'dayanpr2728@gmail.com',
    subject: 'Nuevo mensaje de contacto',
    text: 'Hola,\n\nHas recibido un nuevo mensaje de contacto de tu sitio web:\n\nNombre: ' + req.body.name + '\nEmail: ' + req.body.email + '\nTeléfono: ' + req.body.phone + '\nMensaje:\n' + req.body.message
  };
  
  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
    }
  });
  

