import "./Game.css"
import { useState } from 'react';
import cartiatas from "./imagenes/cartiatas.png";
import carta1 from "./imagenes/espadas_1.png";
import carta2 from "./imagenes/espadas_2.png";
import carta3 from "./imagenes/espadas_3.png";
import carta4 from "./imagenes/espadas_4.png";
import carta5 from "./imagenes/espadas_5.png";
import carta6 from "./imagenes/espadas_6.png";
import carta7 from "./imagenes/espadas_7.png";
import carta10 from "./imagenes/espadas_10.png";
import carta11 from "./imagenes/espadas_11.png";
import carta12 from "./imagenes/espadas_12.png";

function Game() {
    const [nombre, setNombre] = useState('');
    const [mostrarPopup, setMostrarPopup] = useState(true); 
    const cartas = [
        carta1,
        carta2,
        carta3,
        carta4,
        carta5,
        carta6,
        carta7,
        carta10,
        carta11,
        carta12,
    ];
    const handleConfirmar = () => {
        if (nombre.trim() !== '') {
            setMostrarPopup(false); 
        }
    };
    

    return (
        
        <div>
            {mostrarPopup && (
                <div className='popup'>
                    <h1>¿Quieres ver mis cartitas de baraja española echas con el dedo to cutres?</h1>
                    <div className='popup2'>
                    <img src={cartiatas} alt="Juego de cartas" className="titulo" />
                    <h2>Introduce tu nombre:</h2>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleConfirmar();
                            }}}
                    />
                    <button className="botonPopUp" onClick={handleConfirmar}>Confirmar</button>
                    </div>
                </div>
            )}

            {!mostrarPopup && (
                <div className="game-container">
                    <img src={cartiatas} alt="Juego de cartas" className="titulo2" />
                    <h1>Hola {nombre} !!</h1>
                    <h2>Cartas de espadas:</h2>
                    <div className="carta-container">
                         {cartas.map((carta, index) => (
                         <img key={index} src={carta} alt={`Carta ${index + 1}`} className="carta" />
                             ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Game;
