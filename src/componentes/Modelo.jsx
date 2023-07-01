import React from "react";
import "../estilos/modelo.css";

function Modelo({ img, edad, largo, color, genero, nombre, presio, rasa, dueno, names, city, fondo }) {
  return (
    <div className="container">
      <div className="datos-mascota">
        <div>
          <h2>Edad</h2>
          <p>{edad}</p>
        </div>

        <div>
          <h2>Largo</h2>
          <p>{largo}</p>
        </div>

        <div>
          <h2>Color</h2>
          <p>{color}</p>
        </div>

        <div>
          <h2>Genero</h2>
          <p>{genero}</p>
        </div>
      </div>

      <div className="card">
        <div className="card-modelo" style={{ backgroundColor: fondo }}>
            
        <div className="cabezera">
            <a href="/dashboard"><img className="atras" src="chevron-left-white.svg" alt="" /></a>
            <img src="heart-white.svg" alt="" />
            </div>
          <img src={img} alt="" />
        </div>

        <div className="mascota">
            <h2>{nombre}</h2>
            <h2>${presio}</h2>
        </div>
        <div className="rasa">
             <p>{rasa}</p>
        </div>

        <div className="infodueno">
            <img src={dueno} alt="" />
            <div className="datos-dueno">
                <p className="names">{names}</p>
                <p id="city">{city}</p>
            </div>
        </div>

        <div className="btn-final">
            <button>Llevar a Casa</button>
        </div>

      </div>

      
    </div>
  );
}

export default Modelo;
