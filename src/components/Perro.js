function Perro(props){
    return(
        <div>
            <h2>Nombre: {props.nombre}</h2>
            <ul>
                <li key={props.id.toString()}>Edad: {props.edad}</li>
                <li key={props.id.toString()}>Sexo: {props.sexo}</li>
                <li key={props.id.toString()}>Raza: {props.raza}</li>
                <li key={props.id.toString()}>Tamaño: {props.tamaño}</li>
            </ul>
        </div>
    );
}

export default Perro;