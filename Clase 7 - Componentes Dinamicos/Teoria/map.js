const tripulantes = [
    { nombre: "Mr. Poindibags", esImpostor: true },
    { nombre: "Bombom", esImpostor: false },
    { nombre: "Tito", esImpostor: false },
    { nombre: "X-Ray", esImpostor: false },
    { nombre: "Fixfox", esImpostor: false },
  ];

  estosSonLosTripulantes = [];

  for (let i = 0; i < tripulantes.length; i++) {
      console.log("Tripulante  : "+ tripulantes[i].nombre+", "+ (tripulantes[i].esImpostor ? "es un impostor" : "no es impostor"));
     
  }


var personajesAmon = tripulantes.map(function(colorsitos) {
    //console.log(colorsitos);
    return "Tripulante  "+colorsitos.nombre+", "+(colorsitos.esImpostor ? "es un impostor" : "no es impostor");
});

console.log(personajesAmon);

var personajesAmon2 = tripulantes.map((colorsitos) => {
    //console.log(colorsitos);
    return "Tripulante  "+colorsitos.nombre+", "+(colorsitos.esImpostor ? "es un impostor" : "no es impostor");
});

console.log(personajesAmon2);