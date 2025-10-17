import React from 'react'
import img1 from '../book images/IMG1.9.webp';
import img2 from '../book images/IMG1.10.webp';
import img3 from '../book images/IMG1.11.webp';
import img4 from '../book images/IMG1.12.webp';
import img5 from '../book images/IMG1.3.webp';
import img6 from '../book images/IMG1.4.webp';
import img7 from '../book images/IMG1.13.webp';
import img8 from '../book images/IMG1.14.webp';


export default function Book() {
  return (
    <div>

         <div className="container mt-5 pt-3 data-aos=zoom-out-up">
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                <div className="card-header"><img src={img1} className="img-fluid" alt=''/></div>
                <div className="card-footer"><button type="button" className="btn btn-success">Buy Now</button></div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
               <div className="card-header"><img src={img2} className="img-fluid" alt=''/></div>
               <div className="card-footer"><button type="button" className="btn btn-success">Buy Now</button></div>
               </div>
               </div>

               <div className="col-md-3">
                <div className="card">
               <div className="card-header"><img src={img3} className="img-fluid" alt=''/></div>
               <div className="card-footer"><button type="button" className="btn btn-success">Buy Now</button></div>
               </div>
               </div>

               <div className="col-md-3">
                <div className="card">
               <div className="card-header"><img src={img4} className="img-fluid" alt=''/></div>
               <div className="card-footer"><button type="button" className="btn btn-success">Buy Now</button></div>
               </div>
            </div>
            </div>
            </div>

               <div className="container mt-5 pt-3 data-aos=zoom-out-up">
                 <div className="row">
            <div className="col-md-3">
                <div className="card">
                <div className="card-header"><img src={img5} className="img-fluid" alt=''/></div>
                <div className="card-footer"><button type="button" className="btn btn-success">Buy Now</button></div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
               <div className="card-header"><img src={img6} className="img-fluid" alt=''/></div>
               <div className="card-footer"><button type="button" className="btn btn-success">Buy Now</button></div>
               </div>
               </div>

                <div className="col-md-3">
                <div className="card">
               <div className="card-header"><img src={img7} className="img-fluid" alt=''/></div>
               <div className="card-footer"><button type="button" className="btn btn-success">Buy Now</button></div>
               </div>
               </div>


               <div className="col-md-3">
                <div className="card">
               <div className="card-header"><img src={img8} className="img-fluid" alt=''/></div>
               <div className="card-footer"><button type="button" className="btn btn-success">Buy Now</button></div>
            </div>
            </div>
            </div>
            </div>
    </div>
  )
}
