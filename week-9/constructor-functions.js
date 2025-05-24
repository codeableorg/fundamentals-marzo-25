// Instanciación Prototípica

// function Animal(nombre, energia) {
//   let animal = Object.create(Animal.prototype);

//   animal.nombre = nombre;
//   animal.energia = energia;

//   return animal;
// }

// Instanciación Pseudoclásica o Instanciación de Pseudoclase

function Animal(nombre, energia) {
  this.nombre = nombre;
  this.energia = energia;
}

Animal.prototype.comer = function (cantidad) {
  console.log(`${this.nombre} está comiendo.`);
  this.energia += cantidad;
};

Animal.prototype.dormir = function (duracion) {
  console.log(`${this.nombre} está durmiendo.`);
  this.energia += duracion;
};

Animal.prototype.jugar = function (duracion) {
  console.log(`${this.nombre} está jugando.`);
  this.energia -= duracion;
};

const leo = new Animal("Leo", 7);
const lazy = new Animal("Lazy", 10);

// Concepto #1:
// let animal = {};
// animal.__proto__ = metodosAnimal;

// Es equivalente a:

// let animal = Object.create(metodosAnimal); // linea 36 y 37

// Concepto #2:
// function cualquierFuncion() {}
// console.log(cualquierFuncion.prototype); // {constructor: ƒ cualquierFuncion()}

// let andre = new Humano("André");
