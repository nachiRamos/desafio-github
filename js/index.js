let nombre = ""

nombre = prompt("Cual es tu nombre?")

alert("Bienvenido a la pagina, " + nombre + "!")


let numero1 = parseInt(prompt("Ingrese el primer numero para sumar"));
let suma = 0;
for (let i = 0; i < 5; i++) {
    let numero2 = parseInt(prompt("Ingrese el segundo numero para sumar"));
    suma = numero1 + numero2;
    console.log ("Tu numero es " + suma);
 }

