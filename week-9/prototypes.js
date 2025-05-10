// let spiderman = {};
let serVivo = {
  ojos: 2,
};

let humano = {
  corazon: true,
};

let maryJean = {
  pelo: "rojo",
};

let andre = {
  nombre: "André",
};

// El prototipo de maryJean va a ser el objeto humano
maryJean.__proto__ = humano;
andre.__proto__ = humano;

console.log(andre.nombre);
console.log(andre.corazon);
console.log(maryJean.pelo);
console.log(maryJean.corazon);

andre.__proto__ = maryJean;

console.log(andre.nombre);
console.log(andre.pelo);
console.log(andre.corazon);
console.log(andre.ojos);
