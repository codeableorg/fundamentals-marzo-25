// if (condición) {
//   Bloque de código que se ejecuta si la condición es "truthy"
// }

// "si es que" condicional -> if
// "sí" afirmativo -> yes

// let llueve = false;

// if (llueve) {
//   console.log("¡Lleva un paraguas!");
// } else {
//   console.log("El dia esta despejado");
// }

// Operador ternario:

// condición ? expresiónSiTruthy : expresiónSiFalsy;

// let rain = true;
// let mensaje = rain ? "¡Lleva un paraguas!" : "No necesitas un paraguas.";
// console.log(mensaje);

let llueve = true;
let mensaje; // undefined

if (llueve) {
  mensaje = "¡Lleva un paraguas!";
} else {
  mensaje = "No necesitas un paraguas.";
}

console.log(mensaje);

// let edad = 24;

// // si es que la edad es por lo menos 18 años
// if (edad >= 18) {

// } else {

// }

// let temperatura = 32;

// if (temperatura > 30) {
//   console.log("Hace mucho calor.");
// } else if (temperatura < 10) {
//   console.log("Hace mucho frío.");
// } else {
//   console.log("El clima es agradable.");
// }

// if ("code" + "able" === "codeable") {
//   console.log("Cualquier expresión truthy funciona");
// }

// let condicion = undefined || "funciona";

// if (condicion) {
//   console.log("Una variable también es una expresión");
// }

/*
Valores falsy:
- false
- 0 ó -0
- null
- NaN
- ""
- undefined
*/
