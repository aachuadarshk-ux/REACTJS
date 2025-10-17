import React from 'react'
import './Aboutservice.css';
import { Link } from 'react-router-dom';

export default function Aboutservice() {
  return (
    <div>

        <div className="sld">
<div className="blog-card">
    <div className="meta">
      <div className="photo vv img-fluid"></div>
      <ul className="details">
        <li className="author"><Link to="#">Linta</Link></li>
        <li className="date">Aug. 24, 2015</li>
        <li className="tags">
          <ul>
            <li><Link to="#">Learn</Link></li>
            <li><Link to="#">Read</Link></li>
            
            
          </ul>
        </li>
      </ul>
    </div>
    <div className="description">
      <h1>Learning & Reading</h1>
      <h2>Opening a door to the future</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className="read-more">
        <Link to="#">Read More</Link>
      </p>
    </div>
  </div>
  <div className="blog-card alt">
    <div className="meta">
      <div className="photo mm img-fluid"></div>
      <ul className="details">
        <li className="author"><Link to="#">Jane Doe</Link></li>
        <li className="date">July. 15, 2015</li>
        <li className="tags">
          <ul>
            <li><Link to="#">Write</Link></li>
            <li><Link to="#">Convert</Link></li>
            
          </ul>
        </li>
      </ul>
    </div>
    <div className="description">
      <h1>Write & Convert</h1>
      <h2>Its Simple Too Beee..</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className="read-more">
        <Link to="#">Read More</Link>
      </p>
    </div>
  </div>
  </div>

        
    </div>
  )
}
