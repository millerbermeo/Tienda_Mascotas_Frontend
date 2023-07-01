import React from 'react'
import '../estilos/dashboard.css'
import Tarjeta from '../componentes/Tarjeta'

function Dashboard() {

    function btn1() {
        let btn1 = document.querySelector('.btn-left')
        let btn2 = document.querySelector('.btn-right')
        let img1 = document.querySelector('.img1')
        let img2 = document.querySelector('.img2')
        let perros = document.querySelector('.section-perros')
        let gatos = document.querySelector('.section-gatos')

        gatos.style.display="grid"
        perros.style.display="none"
        img1.style.backgroundColor="#dbeff9"
        img2.style.backgroundColor="#fff"
    
        btn1.classList.add('active')
        btn2.classList.add('active')
    }

    function btn2() {
        let btn1 = document.querySelector('.btn-left')
        let btn2 = document.querySelector('.btn-right')
        let img1 = document.querySelector('.img1')
        let img2 = document.querySelector('.img2')
        let perros = document.querySelector('.section-perros')
        let gatos = document.querySelector('.section-gatos')

        perros.style.display="grid"
        gatos.style.display="none"


        img2.style.backgroundColor="#dbeff9"
        img1.style.backgroundColor="#fff"
        
        btn2.classList.remove('active')
        btn1.classList.remove('active')
    }

  return (
    <>
      <div className="container">
        <div className="card">
            <div className="head">
                <a href="/"><img className='atras' src="chevron-left.svg" alt="" /></a>
                <p>Buscar</p>
            </div>

            <div className="busqueda">
                <img src="search.svg" alt="" />
                <input type="search"/>
            </div>

            <div className="botones">
                <div className="btn-left" onClick={btn2}>
                    <img className='img1' src="fa-solid_dog.svg" alt="" />
                    <p>Perros</p>
                </div>
                <div className="btn-right" onClick={btn1}>
                <img className='img2' src="fa-solid_cat.svg" alt="" />
                    <p>Gatos</p>
                </div>
            </div>

            <div className="section-perros">
                <Tarjeta img='ivana.png' nombre='Ivanna' rasa='Corgi' presio='400'color='#e3c069' />
                <Tarjeta img='alvan.png' nombre='Alvan' rasa='Corgi' presio='300' color='#d1723f' />
                <Tarjeta img='karsten.png' nombre='Karsten' rasa='Corgi' presio='200' color='#488db3' ruta='/karsten' />
                <Tarjeta img='reigner.png' nombre='Reigner' rasa='Corgi' presio='240'color='#58c084' />
            </div>

            <div className="section-gatos">
                <Tarjeta img='ariana.png' nombre='Ariana' rasa='Craycat' presio='40'color='#58c084' />
                <Tarjeta img='remi.png' nombre='Remp' rasa='Whitecat' presio='70' color='#488db3'/>
                <Tarjeta img='alex.png' nombre='Alex' rasa='Siamese' presio='100' color='#d1723f' ruta='/alex'/>
                <Tarjeta img='zoe.png' nombre='Zoe' rasa='Persian' presio='80' color='#e3c069' />
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Dashboard