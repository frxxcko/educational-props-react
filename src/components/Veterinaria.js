import Perro from "./Perro";
import data from "./data/ListaPerrosCliente"

const Veterinaria = () => {
    return(
        <>
            {data.map( perro => <Perro id={perro.id} nombre={perro.nombre} edad={perro.edad} sexo={perro.sexo} raza={perro.raza} tamaño={perro.tamaño} />)}
        </>
    )
}

export default Veterinaria;