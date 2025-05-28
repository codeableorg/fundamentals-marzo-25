function Animal(nombre, energia) {
  this.nombre = nombre;
  this.energia = energia;
}

// Métodos compartidos
Animal.prototype.comer = function (cantidad) {
  console.log(`${this.nombre} está comiendo.`);
  this.energia += cantidad;
};
Animal.prototype.dormir = function (tiempo) {
  console.log(`${this.nombre} está durmiendo.`);
  this.energia += tiempo;
};
Animal.prototype.jugar = function (tiempo) {
  console.log(`${this.nombre} está jugando.`);
  this.energia -= tiempo;
};

// Metodo Estatico
Animal.siguienteAComer = function (animales) {
  const ordenadoPorMenorEnergia = animales.sort((a, b) => {
    return a.energia - b.energia;
  });

  return ordenadoPorMenorEnergia[0].nombre;
};

function Perro(nombre, energia, raza) {
  // this.nombre = nombre;
  // this.energia = energia;
  Animal.call(this, nombre, energia);

  this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

const lazy = new Perro("Lazy", 10, "Collie");
