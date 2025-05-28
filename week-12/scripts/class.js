class Animal {
  constructor(nombre, energia) {
    this.nombre = nombre;
    this.energia = energia;
  }

  // Métodos estáticos
  static siguienteAComer(animales) {
    const ordenadoPorMenorEnergia = animales.sort((a, b) => {
      return a.energia - b.energia;
    });

    return ordenadoPorMenorEnergia[0].nombre;
  }

  // Métodos compartidos
  comer(cantidad) {
    console.log(`${this.nombre} está comiendo.`);
    this.energia += cantidad;
  }

  dormir(tiempo) {
    console.log(`${this.nombre} está durmiendo.`);
    this.energia += tiempo;
  }

  jugar(tiempo) {
    console.log(`${this.nombre} está jugando.`);
    this.energia -= tiempo;
  }

  get status() {
    return `${this.nombre} tiene ${this.energia} de energía`;
  }

  set status(energia) {
    if (energia >= 0) {
      this.energia = energia;
    }
  }
}

class Perro extends Animal {
  constructor(nombre, energia, raza) {
    super(nombre, energia);
    this.raza = raza;
  }
}

const lazy = new Perro("Lazy", 100, "Collie");
