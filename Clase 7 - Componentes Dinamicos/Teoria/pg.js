const tripulantes = [
  { nombre: "Mr. Poindibags", esImpostor: true },
  { nombre: "Bombom", esImpostor: false },
  { nombre: "Tito", esImpostor: false },
  { nombre: "X-Ray", esImpostor: false },
  { nombre: "Fixfox", esImpostor: false },
];

// Creamos un nuevo array
let tripulacion = [];

// Iteramos sobre cada elemento en el array tripulantes
for(let i=0; i<tripulantes.length; ++i) {
let tripulante =
`${ tripulantes[i].nombre} ${tripulantes[i].esImpostor ? '' : 'no ' }era el impostor`;

// Metemos cada tripulante en el nuevo array
tripulacion.push(tripulante);
}

console.log(tripulacion);


// Ejemplo con map :

let tripulacionV2 = tripulantes.map(tripulante =>
    `${ tripulante.nombre} ${tripulante.esImpostor ? '' : 'no ' }era el impostor`
    );

console.log(tripulacionV2);
