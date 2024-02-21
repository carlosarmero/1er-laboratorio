import React, {useState} from 'react';
import '../estilos/perfil.css'

export default function Contador(){
    const [numero, setNumero] = useState(0);

    const aumentar = () =>{
        setNumero(numero + 1);
    };

    const disminuir = () =>{
        setNumero(numero - 1);
    };
    return(
        <div className='contador'>
            <h1>Contador</h1>
            <p> Número actual: {numero} </p>
            <button onClick={aumentar}>Aumentar </button>
            <button onClick={disminuir}>Disminuir </button>
        </div>);
    };
