import React from 'react'
import '../App.css'
const Corusel = () => {
  return (
    <div id="carouselSchool" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner carousel-size ">
            <div className="carousel-item ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWdwbsJyWQsQWFhckozF-MxyKHhBMJyhtsQLK1e3yEtg4KMCa4S9-5v9GR7Uy25MLaOU&usqp=CAU" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item ">
            <img src="https://misionadmision-assets.s3.amazonaws.com/img/website/misionadmision.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item active">
            <img src="https://estudiantes.ucontinental.edu.pe/wp-content/uploads/2019/02/mentoria-universitaria-1.jpg" className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselSchool" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselSchool" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Corusel