import React from 'react'

export default function Loginform() {
  return (
    <div  style={{ marginTop: '20px', paddingTop: '40px' }}>
        <div className="container  data-aos=fade-up"
            data-aos-anchor-placement="top-center">
            <center><h2>PLEASE LOGIN TO RBW!</h2></center>
            <div className="row">
                <div className="col-md-4"> </div>    
            <div className="col-md-4">
            <form action="/action_page.php">
                    <div className="form-floating mt-3 mb-3">
                        <input type="text" className="form-control" id="name" placeholder="Enter name" name="name"/>
                        <label for="name">Name</label>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <input type="text" className="form-control" id="email" placeholder="Enter email" name="email"/>
                        <label for="email">Email</label>
                    </div>
                    <div className="form-floating mt-3 mb-3">
                        <input type="text" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                        <label for="pwd">Password</label>
                    </div>
                <center><button type="submit" className="btn btn-success">Submit</button></center>
                </form>
            </div>
            <div className="col-md-4">

            </div>
            </div>
            </div>
    </div>
  )
}
