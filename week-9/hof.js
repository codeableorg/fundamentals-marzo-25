// function miFuncion(a, b, c, d, e, f) {
//   console.log(a, b, c, d, e, f);
// }

// miFuncion("string", 100, true, null, undefined, {});

// function miHOF(otraFuncion) {
//   //   console.log(otraFuncion);
//   otraFuncion();
// }

// function miFuncionArgumento() {
//   console.log("Función como argumento");
// }

// miHOF(miFuncionArgumento);

// // const correr = function () {
// //     console.log("Estoy corriendo!");
// // }

// miFuncionArgumento();

// function suma(a, b) {
//   return a + b;
// }

// let resultado = suma(10, 20);

function crearMultiplicador(multiplicador) {
  return function (numero) {
    console.log(numero * multiplicador);
  };
}

let multiplicaPor3 = crearMultiplicador(3);
let multiplicaPor5 = crearMultiplicador(5);

// console.log(multiplicaPor3); // ??
// console.log(multiplicaPor5); // ??

multiplicaPor3(10);
multiplicaPor5(10);
