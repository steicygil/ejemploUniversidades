// const express = require('express')
// const router = express.Router()
// const alumnosController = require('../Controllers/alumnoController.js')

// // Rutas de API 
// router.get('./obtenerAlumnos', alumnosController.obtenerAlumnos)
// router.post('/agregarAlumno', alumnosController.agregarAlumno)
// router.patch('/actualizarAlumno', alumnosController.actualizarAlumno)
// router.delete('/borrarAlumno', alumnosController.borrarAlumno)

// module.exports = router;

const express = require('express')
const router = express.Router()
const alumnoController = require('../Controllers/alumnoController');

// Estas son las rutas de mi API
router.get('/obtenerAlumnos', alumnoController.obtenerAlumnos);
router.post('/agregarAlumno', alumnoController.agregarAlumno);
router.patch('/actualizarAlumno', alumnoController.actualizarAlumno);
router.delete('/borrarAlumno', alumnoController.borrarAlumno);

module.exports = router;