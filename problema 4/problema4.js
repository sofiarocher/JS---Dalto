// ACA ES PARA PREGUNTAR LA CANTIDAD DE ALUMNOS Y GUARDAR ESE DATO EN ARRAY

let quantity = prompt ("Cuantos alumnos son?")
let totalAlumns = []


// ACA PREGUNTAMOS EL NOMBRE DEL ALUMNO Y LO GUARDAMOS EN EL ARRAY
for (i = 0; i < quantity; i++) {
    totalAlumns[i] = [prompt("Nombre del alumno " + (i + 1)),0]
}


// ACA DECLARAMOS LA FUNCION PARA TOMAR PRESENTE
const takeAsistence = (nombre, p) => {
    let presence = prompt(nombre);
        if (presence == "p" || presence == "P") {
            totalAlumns[p][1]++;
        }
}

// ACA EJECUTAMOS LA FUNCION Y TOMAMOS PRESENCIA
for (i = 0; i < 10; i++) {
    for (alumno in totalAlumns) {
       takeAsistence(totalAlumns[alumno][0],alumno)
    }
}


// ACA ES DONDE MOSTRAMOS EL RESULTADO EXACTAMENTE
for (alumno in totalAlumns) {
    let resultado = `${totalAlumns[alumno][0]}:<br>
    Presencias: <b>${totalAlumns[alumno][1]}</b><br>
    Ausencias: <b>${10 - totalAlumns[alumno][1]}</b>`;
        if (10 - totalAlumns[alumno][1] > 2) {
            resultado+= " <b style='color:red'> <br> REPROBADO POR INASISTENCIAS </b><br><br>" 
        }    else {
                resultado+= "<br><br>"
            }
    document.write(resultado)
}
