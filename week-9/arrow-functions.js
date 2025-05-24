// Function Declaration
// function suma(a, b, c = 0) {
//   return a + b + c;
// }

// Function Expression
// let suma = function (a, b) {
//   return a + b;
// };

// Arrow Function
// let suma = (a, b) => a + b;
// let mulplitaPor3 = (numero) => numero * 3;
// let mulplitaPor5 = () => 10 * 5;

// Arrow Functions
// let nombreFuncion1 = (arg1, arg2, ..., argN) => expresión;

// let operar = (operacion, a, b) => {
//   switch(operacion) {
//     case "suma": return a + b;
//     case "resta": return a - b;
//     case "multiplicacion": return a * b;
//     case "division": return a / b;
//     default: return "Operacion invalida"
//   }
// }

// const escuela = {
//   nombre: "Codeable",
//   mostrarNombre: function () {
//     const mensaje = () => this.nombre;
//     console.log(mensaje());
//   },
// };

// const escuela2 = {
//   nombre: "Codeable",
//   mostrarNombre: function () {
//     const funcionInterna = () => {
//       console.log(this.nombre);
//     };

//     funcionInterna();
//   },
// };

// function mostrarArgumentos() {
//   console.log(typeof arguments);
//   console.log(arguments.length);
//   console.log(arguments);
// }

// bind()
// function saludar() {
//   console.log(`¡Hola! Mi nombre es ${this.nombre}.`);
// }

// // saludar();

// const saludo = saludar.bind({ nombre: "Juan" });
// const saludoEstudiante = saludar.bind({ nombre: "Oscar" });
// saludo(); // ¡Hola! Mi nombre es Juan.
// saludoEstudiante();

// objeto.metodo = saludar;
// objeto.metodo();

// call()
// function presentar(titulo, ciudad) {
//   console.log(`${titulo} ${this.nombre}, de ${ciudad}.`);
// }

// const persona = { nombre: "Juan" };
// presentar.call(persona, "Sr.", "Lima"); // Sr. Juan, de Lima.
// presentar.apply(persona, ["Sr.", "Lima"]);

// function sumarTodos(...numeros) {
//   let result = 0;

//   for (let i = 0; i < numeros.length; i++) {
//     result += numeros[i];
//   }
//   return result;
// }

// console.log(sumarTodos(10, 20, 30, 40, 50)); // 150

// function matrcularAlumnos (...param) {

// }

// function ejemplo(a, b, c = 0, ...resto) {
//   console.log("Requeridos: ", a, b);
//   console.log("Opcional: ", c);
//   console.log("Resto: ", resto);
// }

// ejemplo(10, 20, 30, 40, 50);

// Spread Syntax, Spread Operador

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];

// let suma = (a, b) => a + b;

// const nums = [10, 30];
// console.log(suma(...nums));
// console.log(suma(nums[0], nums[1]));

// const datos1 = { nombre: "Juan", apellido: "Perez" };
// const persona = { ...datos1, pais: "Mexico", ciudad: "Guadalajara" };
// // const persona = { nombre: "Juan", apellido: "Perez", pais: "Mexico", ciudad: "Guadalajara" }

// console.log(persona);

// const objeto = { nombre: "André" };
// const objetoClon = { ...objeto };
