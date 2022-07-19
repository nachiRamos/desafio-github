// let nombre = ""

// nombre = prompt("Cual es tu nombre?")

// alert("Bienvenido a la pagina, " + nombre + "!") 


// let numero1 = parseInt(prompt("Ingrese el primer numero para sumar"));
// let suma = 0;
// for (let i = 0; i < 5; i++) {
//     let numero2 = parseInt(prompt("Ingrese el segundo numero para sumar"));
//     suma = numero1 + numero2;
//     console.log ("Tu numero es " + suma);
//  }

let nota1 = parseInt(prompt("Ingrese la primer nota"))
let nota2 = parseInt(prompt("Ingrese la segunda nota"))
let nota3 = parseInt(prompt("Ingrese la tercer nota"))

let promedio = (nota1+nota2+nota3)/3
parseInt(promedio)

if(promedio>=0 && promedio<=5){
    alert(`Lo siento, tu nota es ${promedio}, estas Desaprobado`)
}
else if(promedio>=6 && promedio<=10){
    alert(`Felicidades, tu nota es ${promedio}, estas Aprobado !!`)
}
else{
    alert("Tu nota final no puede ser más de 10 (diez)")
}