// function saludar(nombre = "mundo") {
//   console.log("Hola " + nombre);
// }

// setTimeout(saludar, 3000, "Andre");
// setTimeout(() => saludar("Andre"), 2000);

// let contador = 0;

// let timerId = setInterval(() => console.log(contador++), 2000);
// console.log(`Imprimiendo el ID: ${timerId}`);

// clearInterval(timerId);
// setTimeout(() => clearInterval(timerId), 10000);

console.log("Antes de la planificación");

setTimeout(() => console.log("Tarea programada"), 1000);

console.log("Después de la planificación");

console.log("Mucho después de la planificación");
