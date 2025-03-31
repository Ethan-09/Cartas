import React from 'react';
import './Cartas.css';
import cartasData from './cartas.json';

function Cartas({ carta, onClick }) {
    
    const barajarMazo = (mazo) => {
        return [...mazo].sort(() => Math.random() - 0.5);
    };
    
    const [mazo, setMazo] = useState(barajarMazo(cartasData.cartas));
    return (
        <div className="carta">
            <img src={carta.imagen_cara} alt={`${carta.numero} de ${carta.palo}`} />
            <p>{`${carta.numero} de ${carta.palo}`}</p>
        </div>
    //   import React, { useState } from 'react';
    //   import Cartas from './Cartas';
    //   import './Game.css';
    //   import cartasData from './cartas.json'; // Importa el archivo JSON
      
    //   function Game() {
    //       const [mazo, setMazo] = useState(cartasData.cartas); // Usa las cartas del JSON como estado inicial
    //       const [cartasRobadas, setCartasRobadas] = useState([]);
      
    //       const robarCarta = () => {
    //           if (mazo.length > 0) {
    //               const carta = mazo[0]; // Toma la primera carta del mazo
    //               setCartasRobadas([...cartasRobadas, carta]); // Agrega la carta robada al estado
    //               setMazo(mazo.slice(1)); // Elimina la carta robada del mazo
    //           }
    //       };
      
    //       return (
    //           <div className="game">
    //               <h1>Juego de Cartas</h1>
    //               <button onClick={robarCarta} disabled={mazo.length === 0}>
    //                   Robar Carta
    //               </button>
    //               <div className="mazo">
    //                   <h2>Mazo</h2>
    //                   <p>Cartas restantes: {mazo.length}</p>
    //               </div>
    //               <div className="cartas-robadas">
    //                   <h2>Cartas Robadas</h2>
    //                   {cartasRobadas.map((carta, index) => (
    //                       <Cartas
    //                           key={`${carta.numero}-${carta.palo}-${index}`}
    //                           carta={carta}
    //                       />
    //                   ))}
    //               </div>
    //           </div>
    //       );
    );
}

export default Cartas;