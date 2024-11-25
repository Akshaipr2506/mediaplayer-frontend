import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faInstagram,faLinkedin,faWhatsapp,faXTwitter} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='py-5 px-5'>
      <div className='container-fluid'>
        <div className='row' >
          <div className="col-md-4 bg-transparent">
            <h4 className='text-warning'> <FontAwesomeIcon icon={faVideo} className='me-3'/> Media Player</h4>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nisi placeat nesciunt blanditiis unde esse vel facilis quos enim, nemo est suscipit porro animi quod id possimus corrupti, veritatis harum.</p>
          </div>
          <div className="col-md-2 d-md-flex justify-content-center mt-md-0 mt-4">
            <div>
              <h4>Links</h4>
              <Link to={'/'}><p className='mt-3'>Landing page</p></Link>
              <Link to={'/home'}><p>Home page</p></Link>
              <Link to={'/watchhistory'}><p>Watch history</p></Link>
            </div>
          </div>
          <div className="col-md-2 d-md-flex justify-content-center mt-md-0 mt-4">
            <div>
              <h4>Guides</h4>
              <p className='mt-3'>React</p>
              <p>React Bootstrap</p>
              <p>Bootswitch</p>
            </div>
          </div>
          <div className="col-md-4 mt-md-0 px-md-5">
            <h4>Contact Us</h4>
            <div className='d-flex mt-3'>
              <input type="text" placeholder='Email id' className='form-control' />
              <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-between mt-3'>
            <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
            <FontAwesomeIcon icon={faXTwitter} className='fa-2x' />
            <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
            <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>
            <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Footer