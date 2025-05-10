const sherlock = {
  apellido: "Holmes",
  direccion: { ciudad: "Londres" },
};

const pokemon = {
  especie: "Pikachu",
  tipo: "Electrico",
  numeroPokedex: 25,
  entrenador: null,
  tieneEvolucion: true,
  saludar: function () {
    console.log("Pika pika!");
  },
  comer() {
    console.log("ñam ñam ñam");
  },
};

pokemon.entrenador = sherlock;

const masticar = function () {
  console.log("ñam ñam ñam");
};

function descansar() {
  console.log("Zzzz...");
}

const person = {
  nombre: "Luis",
  saludar: function () {
    console.log("¡Hola!");
  },
  comer: masticar,
  dormir: descansar,
};

// persona.comer();
// persona.dormir();

// const persona2 = {
//   nombre: "Simon",
//   imprimeThis() {
//     console.log(this);
//   },
// };

// const persona3 = {
//   nombre: "Mateo",
//   imprimeThis() {
//     console.log(this);
//   },
// };

// persona2.imprimeThis(); // ???
// persona3.imprimeThis(); // ???

const persona = {
  nombre: "Andre",
  apellido: "Tavara",
  presentarse() {
    console.log(`Hola, me llamo ${this.nombre}! Como estas?`);
  },
  obtenerNombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
  get obtenerNombre() {
    return this.nombre;
  },
  get obtenerApellido() {
    return this.apellido;
  },
  set nombreCompleto(valor) {
    if (typeof valor !== "string") return; // solo aceptamos strings

    const partes = valor.split(" "); // ['Peter', 'Parker']
    this.nombre = partes[0]; // "Peter"
    this.apellido = partes[1]; // "Parker"
  },
  set setNombre(nombre) {
    this.nombre = nombre;
  },
  set setApellido(apellido) {
    this.apellido = apellido;
  },
};

persona.nombreCompleto = "Peter Parker";

// console.log(persona.nombre);
// console.log(persona.obtenerNombre);
// console.log(persona.obtenerApellido);

// persona.presentarse();
// const mensaje = persona.obtenerNombreCompleto();
// console.log(mensaje);

// getter es un metodo que nos permite obtener valores de un objeto
// console.log(persona.nombre);
// setter es un metodo que nos permite cambiar el valor de una propiedad
// persona.nombre = "Mateo";
