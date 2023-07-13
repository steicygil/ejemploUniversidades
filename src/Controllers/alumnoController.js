// const alumnosJson = require('../Models/alumnos.json')


// function obtenerAlumnos (req, res)  { // ENDPOINT
//     res.json(alumnosJson)
// }

// function agregarAlumno (req, res) {
//     alumnosJson.alumnos.push(req.body)
//     res.json(alumnosJson)
// }

// function actualizarAlumno (req, res) {

//     const index = alumnosJson.alumnos.findIndex(alumno => alumno.boleta === req.body.boleta)
//     console.log(index);

//     if (index >= 0) {
//         alumnosJson.alumnos[index] = req.body
//         return res.json(alumnosJson)
//     } else  {
//        return res.json({message:"No existe el alumno"})
//     }
    
// }

// function borrarAlumno (req, res) {
//     const index = alumnosJson.alumnos.findIndex(alumno => alumno.boleta === req.body.boleta)
//     console.log(index);

//     if (index >= 0) {
//         alumnosJson.alumnos.splice(index, 1)
//         return res.json(alumnosJson)
//     } else  {
//        return res.json({message:"No existe el alumno"})
//     }
// }

// module.exports = {
// obtenerAlumnos,
// agregarAlumno,
// actualizarAlumno,
// borrarAlumno
// }

const alumnosJson = require('../Models/alumnos.json');

function obtenerAlumnos(req, res) {
  res.json(alumnosJson);
}

function agregarAlumno(req, res) {
  alumnosJson.alumnos.push(req.body);
  res.json(alumnosJson);
}

function actualizarAlumno(req, res) {
  const index = alumnosJson.alumnos.findIndex(
    (alumno) => alumno.boleta === req.body.boleta
  );

  if (index >= 0) {
    alumnosJson.alumnos[index] = req.body;
    res.json(alumnosJson);
  } else {
    res.json({ message: 'No existe el alumno' });
  }
}

function borrarAlumno(req, res) {
  const index = alumnosJson.alumnos.findIndex(
    (alumno) => alumno.boleta === req.body.boleta
  );

  if (index >= 0) {
    alumnosJson.alumnos.splice(index, 1);
    res.json(alumnosJson);
  } else {
    res.json({ message: 'No existe el alumno' });
  }
}

module.exports = {
  obtenerAlumnos,
  agregarAlumno,
  actualizarAlumno,
  borrarAlumno,
};