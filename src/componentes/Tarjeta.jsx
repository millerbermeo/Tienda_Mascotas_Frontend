import React from 'react'

function Tarjeta({img, nombre, rasa, presio, color, ruta}) {
  return (
    <>
        <div className="tarjeta">
        <div className="img-animal" style={{ backgroundColor: color }}>
                <a href={ruta}><img src={img} alt="" /></a>
            </div>
            <div className='info-mascota'>
                <h2>{nombre}</h2>
                <p>{rasa}</p>
            </div>
            <div className="final">
                <h3>${presio}</h3>
                <img src="sm-heart.svg" alt="" />
            </div>
        </div>
    </>
  )
}

export default Tarjeta