const obtenerInfo = (materia)=>{
    materias = {
        fisica: ["Robert Kiyosaki","pedro","maria","martin","sofia","croissant","camila","santiago"],
        programacion:  ["SoyDalto", "pedro","maria","cofla","martin","sofia","croissant","santiago"],
        matematica:["Andrew Tate", "pedro","maria","sofia","croissant","camila"],
    }


    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInfo = (materia) => {
    let informacion = obtenerInfo(materia);

    if (informacion !== false){
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de ${informacion[1]} es: <b>${profesor}</b><br>
                        Los alumnos que cursan ${informacion[1]} son: <b>${alumnos}</b><br><br>`);
    }
}

mostrarInfo("fisica");
mostrarInfo("programacion");
mostrarInfo("matematica");

const clasesTotales = (alumno) => {
    let informacion = obtenerInfo();
    let cantidadTotal = 0;
    let clasesPresentes = [];
    
    for (info in informacion) {
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return (`<b>${alumno}</b> esta en: ${cantidadTotal} clase/s.<br> Esta cursando las clases: ${clasesPresentes}<br><br>`)
}

document.write(clasesTotales("pedro"))