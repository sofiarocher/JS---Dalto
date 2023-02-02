// HERMOSA MINI CALCULADORA

const suma = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const resta = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

const raizCuadrada = (num1) => {
    return Math.sqrt(parseInt(num1));
}

const raizCubica = (num1) => {
    return Math.cbrt(parseInt(num1));
}

const potencia = (num1, exp) => {
    return parseInt(num1) ** parseInt(exp);
}

alert("Que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: multiplicar, 4: dividir, 5: raíz cuadrada, 6: raíz cúbica, 7: potencia");

if (operacion == 1) {
    let num1 = prompt ("Primer numero para sumar");
    let num2 = prompt ("Segundo numero para sumar");
    let resultado = suma(num1, num2);
    alert(`El resultado es ${resultado}`);
} else if (operacion == 2) {
    let num1 = prompt ("Primer numero para restar");
    let num2 = prompt ("Segundo numero para restar");
    let resultado = resta(num1, num2);
    alert(`El resultado es ${resultado}`);
}  else if (operacion == 3) {
    let num1 = prompt ("Primer numero para multiplicar");
    let num2 = prompt ("Segundo numero para multiplicar");
    let resultado = multiplicar(num1, num2);
    alert(`El resultado es ${resultado}`);
}  else if (operacion == 4) {
    let num1 = prompt ("Primer numero para dividir");
    let num2 = prompt ("Segundo numero para dividir");
    let resultado = dividir(num1, num2);
    alert(`El resultado es ${resultado}`);
} else if (operacion == 5){
    let num1 = prompt("Numero para saber su raiz cuadrada")
    let resultado = raizCuadrada(num1);
    alert(`El resultado es ${resultado}`);
} else if (operacion == 6){
    let num1 = prompt("Numero para saber su raiz cubica")
    let resultado = raizCubica(num1);
    alert(`El resultado es ${resultado}`);
} else if (operacion == 7){ 
    let num1 = prompt ("Numero");
    let exp = prompt ("Exponente");
    let resultado = potencia(num1, exp);
    alert(`El resultado es ${resultado}`);
} else {
    alert("No se ha encontrado la operacion que deseas realizar. Intenta de nuevo.");
}