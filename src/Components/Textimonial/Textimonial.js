import React from 'react'
import img12 from '../Images/IMG.AD.10';
import img13 from '../Images/IMG.AD.12';
import img14 from '../Images/IMG.AD.11';
import '../Textimonial/Textimonial.css';

export default function Textimonial() {
  return (
    <div>

        <section className="testimonial text-center mt-5 pt-3">
        <div className="container">

            <div className="heading white-heading">
                Testimonial
            </div>
            <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
             
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="testimonial4_slide">
                            <img src={img12} className="img-circle img-responsive" alt='img12'/>
                            <h4>WIKKY</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial4_slide">
                            <img src={img13} className="img-circle img-responsive" alt='img13'/>
                             <h4>LIYA</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial4_slide">
                            <img src={img14} className="img-circle img-responsive" alt='im14'/>
                             <h4>ANTONY OP</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#testimonial4" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    </section>
    </div>
  )
}
