import "./Game.css"
import { useState } from 'react';
import cartiatas from "./imagenes/cartiatas.png";

function Game() {
    const [nombre, setNombre] = useState('');
    const [mostrarPopup, setMostrarPopup] = useState(true); 

    const handleConfirmar = () => {
        if (nombre.trim() !== '') {
            setMostrarPopup(false); 
        }
    };

    return (
        
        <div>
            {mostrarPopup && (
                <div className='popup'>
                    
                    <div className='popup2'>
                    <img src={cartiatas} alt="Juego de cartas" className="titulo" />
                    <h2>Introduce tu nombre:</h2>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <button className="botonPopUp" onClick={handleConfirmar}>Confirmar</button>
                    </div>
                </div>
            )}

            {!mostrarPopup && (
                <div className="game-container">
                    <img src={cartiatas} alt="Juego de cartas" className="titulo2" />
                    <h2>Yeeee {nombre}</h2>
                    juego
                </div>
            )}
        </div>
    );
}

export default Game;
