let firstName = "Andre";

// Expresion de Funcion
let primeraFuncion = function () {
  let school = "Codeable";
};

// Declaracion de Funcion
function segundaFuncion() {
  const firstName = "Luis";
  console.log(firstName);
}

// Parametros
function saludar(nombre = "Anónimo") {
  console.log("¡Hola, " + nombre + "!");
}

function crearUsuario(nombre = "desconocido", edad = 18) {
  console.log(nombre, edad);
}

function sumar(a, b) {
  return a + b;
}

let resultado = sumar(10, 20);
console.log(resultado);

// calcular el area de un triangulo
function multiplicar(a, b) {
  return a * b;
}

let resultadoMultiplicacion = multiplicar(100, 20);
let areaTriangulo = resultadoMultiplicacion / 2;

function crearSaludo(nombre) {
  return "Hola " + nombre + ". Qué gusto verte";

  console.log("Ojalá me devuelvas el libro que te presté"); // No se ejecuta
  return "Quiero mi libro!!!!"; // No se ejecuta
}

// crearUsuario("Jose");
// primeraFuncion();
// segundaFuncion();
// Argumentos:
// saludar("Carlos");
// saludar(99);
// saludar(true);
// saludar(null);
// saludar({ edad: 30 });
// saludar(); // undefined
// console.log(nombre);

// console.log(firstName);
// console.log(school);
