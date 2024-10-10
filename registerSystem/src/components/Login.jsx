import React from 'react'
import { useState, useRef } from 'react';

import { faFacebookF, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login() {
  const inputUsernameRef = useRef('');
  const inputPasswordRef = useRef('');

  const [error, setError] = useState({})
  const [users, setUsers] = useState({})
  const [isChecked , setIsChecked] = useState(false);

  const newUser = {}
  const newError = {}
  
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    const usernameValue = inputUsernameRef.current.value;
    const passwordValue = inputPasswordRef.current.value;

    const nameRegex = /^[a-zA-Z0-9._-]+$/;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    if (usernameValue == '' || passwordValue == '') {
      alert('you must enter a value');
    } else {
      nameRegex.test(usernameValue) ? newUser.username = usernameValue : newError.username = 'name invalid';
      passwordRegex.test(passwordValue) ? newUser.password = passwordValue : newError.password = 'password invalid';
      setUsers(newUser)
      setError(newError)
    }
  }
  return (
    <div className='m-5 d-flex flex-column gap-3 col-5'>
      <div className="socialMediaLogin d-flex flex-column text-center gap-3">
        <h2 className='fs-5 text-primary'>Sign Up with:</h2>
        <div className="socialMediaIcons d-flex justify-content-center gap-5">
          <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href=""><FontAwesomeIcon icon={faGoogle} /></a>
          <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
          <a href=""><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <h1 className='fs-6'>or:</h1>
      </div>
      <form className='d-flex flex-column gap-2' onSubmit={handelSubmit}>
        <input className='form-control' type="text" placeholder='Username..' name="username" ref={inputUsernameRef} />
        {error.username ? <p className='text-danger fw-bolder fst-italic '>{error.username}</p>: null}

        <input className='form-control' type="text" placeholder='Password..' name="password" ref={inputPasswordRef} />
        {error.password ? <p className='text-danger fw-bolder fst-italic'>{error.password}</p>: null}

        <div className="terms d-flex justify-content-center gap-1">
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} name='privacy'/>
          <label htmlFor="privacy">I have read and agree to the terms</label>
        </div>
        <input type="submit" className='btn btn-primary' disabled={!isChecked}/>

      </form>

    </div>
  )
}