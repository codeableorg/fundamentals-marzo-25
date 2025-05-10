function diaDeLaSemana(numero) {
  if (numero === 1) {
    return "Lunes";
  } else if (numero === 2) {
    return "Martes";
  } else if (numero === 3) {
    return "Miércoles";
  } else if (numero === 4) {
    return "Jueves";
  } else if (numero === 5) {
    return "Viernes";
  } else if (numero === 6) {
    return "Sábado";
  } else if (numero === 7) {
    return "Domingo";
  } else {
    return "Número inválido";
  }
}

function diaDeLaSemanaVersionSwitch(numero) {
  switch (numero) {
    case 1:
      return "Lunes";
    case 2:
      return "Martes";
    case 3:
      return "Miércoles";
    case 4:
      return "Jueves";
    case 5:
      return "Viernes";
    case 6:
      return "Sábado";
    case 7:
      return "Domingo";
    default:
      return "Número inválido";
  }
}

// console.log(diaDeLaSemanaVersionSwitch(10));

let dia = "martes";

switch (dia) {
  case "lunes":
    console.log("¡Es lunes! Vamos a planificar la semana.");
    break;
  case "martes":
    console.log("Hoy es martes...");
  case "miércoles":
  case "jueves":
    console.log("Un día para seguir aprendiendo.");
    break;
  case "viernes":
    console.log("Casi fin de semana... ¡Vamos a relajarnos un poco!");
    break;
  case "sábado":
  case "domingo":
    console.log("¡Es fin de semana! Tiempo para descansar.");
    break;
  default:
    console.log("No es un día válido!");
}
