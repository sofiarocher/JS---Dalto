//crear una funcion para preguntarle a cofla a que materia quiere inscribirse, si hay mas de 20 alumnos, negarle la inscripicion, sino, sumarlo a la lista

let materias = {
        fisica: ["pedro","maria","martin","sofia","croissant","camila","santiago"],
        programacion:  ["pedro","maria","martin","sofia","croissant","santiago"],
        matematica:[ "pedro","maria","sofia","croissant","camila"],
    }


    const inscribir = (alumno,materia) => {
        alumnos = materias[materia];

        if (alumnos.length >= 20) {
            document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas.<br>`)
        } else {
            alumnos.push(alumno);
            if (materia == "fisica"){
                materias = {
                    fisica: alumnos,
                    programacion:  materias['programacion'],
                    matematica: materias['matematicas'],
                }
            }
         else if (materia == "programacion"){
            materias = {
                fisica: materias['fisica'],
                programacion: alumnos,
                matematica: materias['matematicas'],
            }
        } else if (materia == "matematica"){
            materias = {
                fisica: materias['fisica'],
                programacion:  materias['programacion'],
                matematica: alumnos,
            }
        }
    
            document.write(`Felicitaciones <b>${alumno}</b>, ya estas inscripto en <b>${materia}</b><br><br>`)
     }
    }

document.write(materias['programacion'] + "<br><br>");

inscribir("cofla","programacion");
inscribir("dario","programacion");
inscribir("lorena","programacion");
inscribir("camila","programacion");
inscribir("pedrito","programacion");
inscribir("spreen","programacion");
inscribir("justin","programacion");
inscribir("ibai","programacion");
inscribir("grefg","programacion");
inscribir("dalto","programacion");
inscribir("lucho","programacion");
inscribir("ivan","programacion");
inscribir("more","programacion");
inscribir("sonia","programacion");
inscribir("babu","programacion");

document.write("<br>" + materias['programacion']);



