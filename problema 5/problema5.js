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

alert("Que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: multiplicar, 4: dividir");

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
} else {
    alert("No se ha encontrado la operacion que deseas realizar. Intenta de nuevo.");
}