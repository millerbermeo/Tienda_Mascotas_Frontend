import "../estilos/screen.css";

function Inicio() {


  const left = () =>{
    document.querySelector('.left').classList.remove('active')
    document.querySelector('.right').classList.remove('active')
    document.querySelector('.img-1').classList.remove('active')
    document.querySelector('.img-2').classList.remove('active')
  } 

  const right = () => {
    document.querySelector('.left').classList.add('active')
    document.querySelector('.right').classList.add('active')
    document.querySelector('.img-1').classList.add('active')
    document.querySelector('.img-2').classList.add('active')
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="btn-flotante">
            <a href="/dashboard"><img src="chevron-right.svg" alt="" /></a>
          </div>
          <div className="puntos">
            <div className="left" onClick={left}></div>
            <div className="right" onClick={right}></div>
          </div>

          <div className="title">
            <h1>Tu mejor amigo</h1>
            <p>en casa!</p>
          </div>

          <div className="txt">
            <p>
              Adoptar la mascota perfecta de mas<br></br> de 700 refugios de
              animales
            </p>
          </div>

          <div className="flotantes">
            <img className="img-1" src="slide1.png" alt="" />
            <img className="img-2" src="slide2.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
