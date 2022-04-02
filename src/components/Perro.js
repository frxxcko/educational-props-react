function Perro(props) {
  return (
    <div>
      <h2>Nombre: {props.nombre}</h2>
      <ul>
        <li>Edad: {props.edad}</li>
        <li>Sexo: {props.sexo}</li>
        <li>Raza: {props.raza}</li>
        <li>Tamaño: {props.tamaño}</li>
      </ul>
    </div>
  );
}

export default Perro;
