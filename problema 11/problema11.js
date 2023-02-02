let materias = {
    fisica:[65,8,4,"fisica"],
    matematica:[83,7,3,"matematica"],
    programacion:[100,9,4,"programacion"],
    quimica:[87,6,4,"quimica"],
    gimnasia:[93,8,2,"gimnasia"],
    algebra:[95,8,3,"algebra"],
    logica:[96,9,4,"logica"],
    biologia:[99,6,3,"biologia"],
}

const infoSemestre = () => {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let tp = materias[materia][2];
        if (asistencias >= 90 && promedio >= 7 && tp >= 3) {
            console.log(`${materias[materia][3]}`)
            console.log("%c   Aprobado.","color:green;")
        } else {
            console.log(`${materias[materia][3]}`)
                console.log("%c   Desaprobado.","color:red;")
        }
    } 
}

infoSemestre()