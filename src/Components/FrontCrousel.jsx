import React from 'react'
import "./FrontCrousel.css"

export const FrontCrousel = () => {
  return (
    <div style={{marginBottom:"20px"}}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?w=2000" className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1520635343069-34072f52080f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/originals/28/be/1c/28be1c01d38b6da0e4c42c1952fa28f0.jpg" className="d-block w-100" alt=""/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
