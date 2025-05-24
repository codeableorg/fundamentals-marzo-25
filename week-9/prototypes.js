// let spiderman = {};
// let serVivo = {
//   ojos: 2,
// };

// let humano = {
//   corazon: true,
// };

// let maryJean = {
//   pelo: "rojo",
// };

// let andre = {
//   nombre: "André",
// };

// // El prototipo de maryJean va a ser el objeto humano
// maryJean.__proto__ = humano;
// andre.__proto__ = humano;

// console.log(andre.nombre);
// console.log(andre.corazon);
// console.log(maryJean.pelo);
// console.log(maryJean.corazon);

// andre.__proto__ = maryJean;

// console.log(andre.nombre);
// console.log(andre.pelo);
// console.log(andre.corazon);
// console.log(andre.ojos);

let humano = {
  corazon: true,
};

let maryJean = {
  pelo: "rojo",
};

maryJean.__proto__ = humano;
// Object.setPrototypeOf(maryJean, humano);

// // * antes de asignación

// maryJean.corazon = false;

// // ** después de asignación

// console.log(humano.corazon); // true
// console.log(maryJean.corazon); // false

let spiderman = {};
spiderman.__proto__.identidad = "Peter Parker";

let batman = {};

console.log(spiderman.identidad); // "Peter Parker"
console.log(batman.identidad); // "Peter Parker" 😅

let superman = new Object();
