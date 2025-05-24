// al ert("Hola Mundo!"); // SyntaxError

// try {
//   console.log("Antes del saludo");
//   console.log("Después del saludo");
//   console.log(saludo);
// } catch (error) {
//   console.log(error.message);
//   // console.error(error.message);
// }

// console.log("Fin del programa");

// console.log("Antes del saludo");

// setTimeout(() => {
//   try {
//     console.log(saludo);
//   } catch (e) {
//     alert(e.message);
//   }
// }, 1000);

// console.log("Después del saludo");

// let error1 = new Error("mi propio mensaje de erro");
// let error2 = new SyntaxError("mi propio mensaje de erro");
// let error3 = new ReferenceError("mi propio mensaje de erro");
// let error4 = new TypeError("mi propio mensaje de erro");

class AlumnoNoMatriculadoError extends Error {}

// throw new TypeError("El parámetro 'nombre' es requerido.");

// function saludar(nombre) {
//   if (nombre === undefined) {
//     throw new TypeError("El parámetro 'nombre' es requerido.");
//   }

//   console.log("Hola " + nombre);
// }

// let numeroIntentos = 0;

// try {
//   login("andre@mail.com", "123456");
// } catch (e) {
//   alert("Credenciales invalidas");
// } finally {
//     numeroIntentos++;
// }

function realizarTrabajo() {
  try {
    console.log("Empezar trabajo peligroso");

    // retorno explicito
    return "Material radioactivo encontrado";
  } catch (error) {
    console.log("Manejo el error:", error.message);
  } finally {
    console.log("Finalizar trabajo peligroso");
  }
}

realizarTrabajo();
