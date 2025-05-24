// let frutas = ["Manzana", "Banana", "Naranja"];
// Metodo Mutables
// frutas.push("Piña", "Fresa");

// Metodos Inmutables
// frutas = frutas.slice(1, 4);

// console.log(frutas); // ['Banana', 'Naranja', 'Piña']

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const nuevoArray = arr1.concat(arr2);
// const nuevoArray2 = arr2.concat(arr1);

// console.log(nuevoArray);
// console.log(nuevoArray2);

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = [91, 92, 93, 94, 95, 96, 97];

// const combinado = [...arr1, ...arr2];

// console.log(combinado);

// Verificacion

// evaluación y filtrado
// const nums = [5, 12, 8, 130];
// 1
// const numEncontrado = nums.find((n, i, a) => n > 10);
// console.log(numEncontrado);

// 2
// console.log(nums.findIndex((n) => n > 10));

// 3
// const esMenorQue10 = [1, 5, 8].every((n) => n < 10);
// console.log(esMenorQue10);

// 4
// const hayMayoresQue10 = [1, 5, 8].some((n) => n > 10);

// 5
// const pares = nums.filter((n) => n % 2 === 0);

// Iteracion

const nombres = ["Ana", "Luis", "Carlos"];

// console.log("forEach:");
// nombres.forEach((nombre) => console.log(nombre));

// console.log("for:");
// for (let pos = 0; pos < nombres.length; pos++) {
//   console.log(nombres[pos]);
// }

const numeros = ["ana", "luis", "carlos"];
const duplicados = numeros.map((n) => n + "@codeable.la");

console.log(duplicados); // [2, 4, 6]
