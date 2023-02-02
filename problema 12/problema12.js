// dividir esto en 14 dias
// trabajar ; 56 horas / 4 hs x dia
// cosas de casa ; 8 horas/ 40 min x dia
// estudiar ; 24 horas / 2hs x dia
// tps ; 24 horas/ 2 hs x dia

let trabajo = "240 minutos por dia de trabajo";
let casa = "30 minutos por dia de tareas de la casa";
let estudiar = "120 minutos por dia de estudio";
let tps = "120 minutos por dia de trabajos practicos";
let descanso = "30 minutos por dia de descanso";

console.log("TAREAS");

for (i = 0; i < 14; i++){
    if (i == 0){
        console.group("SEMANA UNO");
    }
    console.groupCollapsed("DIA " + (i+1));
    console.log(trabajo);
    console.log(casa);
    console.log(estudiar);
    console.log(descanso);
    console.log(tps);
    console.groupEnd();

    if (i == 6){
            console.groupEnd();
            console.groupCollapsed("SEMANA DOS");
        }
}

console.groupEnd();
console.groupEnd();