import React from 'react'
import img9 from '../Images/IMG_AD29.JPG';
import img10 from '../Images/IMG_AD28.JPG';


export default function carousel() {
  return (
    <div  style={{ marginTop: '20px', paddingTop: '40px' }}>

          <div id="demo" className="carousel slide" data-bs-ride="carousel data-aos=zoom-out-down">

        <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            
        </div>

        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={img9} alt="lap" className="img-fluid"/>
            </div>

            <div className="carousel-item">
                <img src={img10} alt="lap" className="img-fluid"/>
            </div>
            
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
        </button>

    </div>

 
    </div>
  )
}
