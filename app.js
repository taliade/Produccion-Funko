const express = require('express');
const multer = require('multer');
const dotenv= require('dotenv');
const cookieParser = require('cookie-parser')
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });


//Config la carpeta public
app.set(express.static('public'));

// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));


//para procesar datos enviados desde el formulario
app.use(express.urlencoded({ extended: true}))
app.use(express.json()) 

//seteamos las variables de entorno
dotenv.config({path: './.env/.env'}); 

//cookieParser.set
app.set('cookieParser', 'dev');

//Ruta base para probar todo
app.get('/holamundo', (req, res) => {
  res.render('Hola Mundo');
});

app.get('/homee', (req, res) => {
  res.render(__dirname + '/home');
});





// Ruta para mostrar el formulario de carga de archivos
// app.get('/home', (req, res) => {
//   res.render('home');
// });

// // Ruta para manejar la carga de archivos
// app.post('/upload', upload.single('archivo'), (req, res) => {
//   if (!req.file) {
//     res.send('Error: NO se seleccionó el archivo');
//     console.log('No confirmos de archivo');
//   } else {
//     res.send('Archivo subido exitosamente');
//   }
// });


// // Ruta para manejar la carga de archivos
// app.post('/upload', upload.single('archivo'), (req, res) => {
//     if (!req.file) {
//       res.send('Error:  se seleccionó ningún archivo');
//     } else {
//       // Acceder a los detalles del archivo subido
//       const nombreArchivo = req.file.filename;
//       const tamañoArchivo = req.file.size;
  
//       res.send(`Archivo subido exitosamente<br>
//                 Nombre: ${nombreArchivo}<br>
//                 consolo.log('mensaje')  <br>
//                 Tamaño: ${tamañoArchivo} bytes`);
//     }
//   });
  



  

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
