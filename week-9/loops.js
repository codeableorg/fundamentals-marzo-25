// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (inicialización; condición; paso) {
//     console.log();
// }

// console.log("Aqui empieza el for");

// for (let i = 1; i < 11; i++) {
//   console.log(i); // Imprimirá los números del 0 al 4
// }

// inicia el for
// se crea la variable i, esta apunta al numero 1
// se evalua la condicion: 1 < 5 da true
// se imprime el valor de i, se imprime el 1
// la variable i aumenta su valor a 2
// se evalua la condicion: 2 < 5 da true
// se imprime el valor de i, se imprime el 2
// la variable i aumenta su valor a 3
// se evalua la condicion: 3 < 5 da true
// se imprime el valor de i, se imprime el 3
// la variable i aumenta su valor a 4
// se evalua la condicion: 4 < 5 da true
// se imprime el valor de i, se imprime el 4
// la variable i aumenta su valor a 5
// se evalua la condicion: 5 < 5 da false
// termina el for

// let i = 6;

// while (i < 5) {
//   console.log(i); // Imprimirá los números del 0 al 4
//   i++;
// }

// let i = 6;

// do {
//   console.log(i); // Imprimirá los números del 0 al 4
//   i++;
// } while (i < 5);

// let texto = "Codeable";
// let letraObjetivo = "e";

// for (let posicion = 0; texto[posicion] !== undefined; posicion++) {
//   if (texto[posicion] === letraObjetivo) {
//     console.log(`¡Letra encontrada en la posición ${posicion}!`);
//     break; // Termina el bucle inmediatamente
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 4 || i === 7) {
//     continue;
//   }
//   console.log(i);
// }

// for-of

// const cadena = "987654321";

// for (const letra of cadena) {
//   console.log(letra);
// }

// function mostrarArgumentos() {
//   // console.log(arguments); // <- imprimimos el valor del objeto arguments
//   for (const value of arguments) {
//     console.log(value);
//   }
// }

// mostrarArgumentos(1, "hola", true, { escuela: "Codeable" });

// const frutas = ["manzana", "plátano", "cereza"];

// for (const fruta of frutas) {
//   console.log(fruta);
// }

// for-in

const persona = {
  nombre: "Angélica",
  edad: 30,
  profesion: "Desarrolladora",
};

for (const propiedad in persona) {
  // console.log(propiedad);
  // console.log(persona[propiedad]);
  // console.log(persona["nombre"]);
  // console.log(persona["edad"]);
  // console.log(persona["profesion"]);
}
