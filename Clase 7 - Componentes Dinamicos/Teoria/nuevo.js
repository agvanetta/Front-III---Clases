const ListaDeAnimales = [
  {
    nombre: "Apollo",
    edad: 5,
    color: "Negro",
    raza: "Cocker",
  },
  {
    nombre: "Nei",
    edad: 9,
    color: "Gris",
    raza: "Mestizo",
  },
  {
    nombre: "Sami",
    edad: 8,
    color: "Blanco",
    raza: "Caniche",
  },
];

const Animal2 = (props) => {
    props.perritos.map((perrito, i) => {
      return (
        <React.Fragment key={perrito.id}>
          <h2>{perrito.nombre}</h2>
          <ul>
            <li key={i}>Edad: {perrito.edad} </li>
            <li key={i}>Sexo: {perrito.sexo}</li>
            <li key={i}>Raza: {perrito.raza}</li>
            <li key={i}>Tamaño: {perrito.tamanio}</li>
          </ul>
        </React.Fragment>
      );
    });
  };