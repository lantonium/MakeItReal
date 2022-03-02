asistentes = ["Gina", "Juan", "Luz", "Michael"];
asistencia = [true, true, false, true];
for (let index = 0; index < asistencia.length; index++){
  if (asistencia[index]) console.log (`${asistentes[index]} asistió`);
  else console.log (`${asistentes[index]} no asistió`);
}