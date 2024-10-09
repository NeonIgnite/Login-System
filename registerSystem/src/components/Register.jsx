import React from 'react';

import { faFacebookF , faGoogle,faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Register() {
  return (
    <div className='m-5 d-flex flex-column gap-3 col-5'>
      <div className="socialMediaLogin d-flex flex-column text-center gap-3">
          <h2 className='fs-5 text-primary'>Sign Up with:</h2>
          <div className="socialMediaIcons d-flex justify-content-center gap-5">
              <a href=""><FontAwesomeIcon icon={faFacebookF}/></a>
              <a href=""><FontAwesomeIcon icon={faGoogle}/></a>
              <a href=""><FontAwesomeIcon icon={faTwitter}/></a>
              <a href=""><FontAwesomeIcon icon={faGithub}/></a> 
          </div>
          <h1 className='fs-6'>or:</h1>
      </div>
      <input className='form-control' type="text" placeholder='Name..' name="name"/>
      <input className='form-control' type="text" placeholder='Username..'  name="username"/>
      <input className='form-control' type="text" placeholder='Email..'  name="email"/>
      <input className='form-control' type="text" placeholder='Password..'  name="password"/>
      <input className='form-control' type="text" placeholder='Repeat Password..'  name="Rpassword"/>
      <div className="terms d-flex justify-content-center gap-1">
        <input type="checkbox" name='privacy'/>
        <label htmlFor="privacy">I have read and agree to the terms</label>
      </div>

      <input type="submit" className='btn btn-primary'/>
    </div>
  )
}
