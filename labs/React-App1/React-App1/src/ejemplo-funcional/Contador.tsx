import { useState } from "react";

interface ContadorProps {
  titulo: string;
  subtitulo: string;
  valorInicial?: number; /* El ? es que no es obligatorio */
}

const Contador = ({titulo, subtitulo, valorInicial} : ContadorProps ) => {
    const [contador, setContador] = useState<number>(valorInicial || 0)
    /* Primer elemento el contador
     * Segundo elemento el setter
    */

    console.log("Paso por el render")

    return (
        <div>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        </div>
    )
}
export default Contador