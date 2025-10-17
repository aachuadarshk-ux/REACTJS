import React from 'react'
import img1 from '../Images/IMG1.114';

export default function Signupform() {
  return (
    <div  style={{ marginTop: '20px', paddingTop: '40px' }}>
         <div className="container  data-aos=zoom-out">
        <h3 className="text-center">PLEASE SIGNIN !</h3>
        <div className="row">
            <div className="col-md-6">
        <img src={img1} className="img-fluid" alt=''/>
        </div>
        <div className="col-md-6">
        <form action="/action page .php">
            <div className="form-floating mb-3 mt-3">
                <input type="text" className="form-control" id="name" placeholder="Enter name" name="name"/>
                <label for="name">NAME:</label>
            </div>
            <div className="form-floating mt-3 mb-3">
                <input type="text" className="form-control" id="email" placeholder="Enter email" name="email"/>
                <label for="email">EMAIL:</label>
            </div>
            <div className="form-floating mt-3 mb-3">
                <input type="text" className="form-control" id="pwd" placeholder="Enter password" name="psw"/>
                <label for="pwd">PASSWORD:</label>
            </div>
            <center><button type="submit" className="btn btn-success">SUBMIT</button></center>
        </form>
     </div>
     </div>
     </div>  
    </div>
  )
}
