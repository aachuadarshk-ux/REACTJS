import React from 'react'

export default function Contactenquery() {
  return (
    <div>
        <div className="container mt-3  data-aos=zoom-in">
            <div className="row">
                <div className="col-md-5" style={{
                       boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                         }}>
                     
                     <div className="font-size-bold text-black text-center pt-5">
                        <ul type="none">
                               <li><i className="fa fa-envelope-o" aria-hidden="true" style={{color: 'lightseagreen'}}></i>&nbsp;&nbsp;rbw1234@gmail.com</li>
                        
            
                           
                            </ul>
                     </div><br/>
                     <div className="font-size-bold text-center">
                             <ul type="none">
                            <li><i className="fa fa-address-card" style={{color: 'bisque'}}></i>&nbsp;&nbsp;2nd floor high building white link road,</li>
                             
                             <li>near KYC kerala kozhikode</li>
                             <li>-673002</li>
                             
                            </ul>
                        
                     </div><br/>
                     <div className="font-size-bold text-center ">
                        <ul type="none">
                       <li> <i className="fa fa-phone" aria-hidden="true" style={{color: 'green'}}></i>&nbsp;&nbsp;+91 9087654311</li>
                       </ul>
                     </div>
                     <div className="font-size-bold text-center">
                        <ul type="none">
                            <li>You Can Always Contact With Us,</li>
                            <li>While Regarding Any Query -</li>
                            <li>Related with RBW .</li>
                        </ul>
                     </div>

    
                    </div>
                    <div className="col-md-1">

                    </div>
                    
                    <div className="col-md-6">
        <form action="">
            <div className="mb-5 mt-5">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Your Name" name="name"/>
            </div>
            <div className="mb-3">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Your Email" name="email"/>
            </div>
            <div className="mb-5 mt-5">
                <label for="message">Message</label>
                <input type="text" className="form-control" id="mess" placeholder="Type Your Query" name="message"/>
            </div>
            <div className="form-check mb-3">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember"/>Remember Me
                </label>
            </div>
            <center><button type="submit" className="btn btn-primary">Submit</button></center>

        </form>
    </div>
    </div>
    </div>
    </div>
  )
}
