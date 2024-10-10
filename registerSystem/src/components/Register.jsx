import React, { useEffect } from 'react';
import { useState ,useRef } from 'react';
import { faFacebookF , faGoogle,faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Register() {
  const [error , setError] = useState({})
  const [users,  setUsers] = useState({})
  const [isChecked , setIsChecked] = useState(false);
  const newUser= {}
  const newError={}

  useEffect(()=>{
    console.log(error);
    console.log(users);
  },[error,users])

  const inputNameRef = useRef('');
  const inputUsernameRef = useRef('');
  const inputEmailRef = useRef('');
  const inputPasswordRef = useRef('');
  const inputRePasswordRef = useRef('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handelSubmit = (event)=>{
    event.preventDefault();
    const nameValue = inputNameRef.current.value;
    const usernameValue = inputUsernameRef.current.value;
    const emailValue =inputEmailRef.current.value;
    const passwordValue = inputPasswordRef.current.value;
    const rePasswordValue = inputRePasswordRef.current.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z0-9._-]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const rePasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%_*?&])[A-Za-z\d@$!%_*?&]{8,}$/;


    if(nameValue == '' || usernameValue == '' || emailValue == '' || passwordValue == '' || rePasswordValue == '' ){
      alert('you must enter a value');
    }
    else{
      if(passwordValue != rePasswordValue){
        newError.password = `Passwords don't Match`;
        newError.rePassword = `Passwords don't Match`;
        setError(newError);
      }else{
        nameRegex.test(nameValue) ? newUser.name=nameValue: newError.name='name invalid';
        emailRegex.test(emailValue) ? newUser.email=emailValue : newError.email='email invalid'; 
        nameRegex.test(usernameValue) ? newUser.username=usernameValue: newError.username='username invalid';
        passwordRegex.test(passwordValue) ? newUser.password=passwordValue : newError.password='password invalid';
        rePasswordRegex.test(rePasswordValue) ? newUser.rePassword=rePasswordValue : newError.rePassword='rePassword invalid';
        setError(newError);
        setUsers(newUser);
      }
    }
    alert('User Added');
    inputNameRef.current.value = '';
    inputUsernameRef.current.value = '';
    inputEmailRef.current.value = '';
    inputPasswordRef.current.value = '';
    inputRePasswordRef.current.value = '';
  }
  
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
      <form className='d-flex flex-column gap-2' onSubmit={handelSubmit}>
        <input className='form-control' type="text" placeholder='JohnDoe' name="name" ref={inputNameRef} />
        {error.name ? <p className='text-danger fw-bolder fst-italic'>{error.name}</p>: null}
        <input className='form-control' type="text" placeholder='john_Doe'  name="username" ref={inputUsernameRef}  />
        {error.username ? <p className='text-danger fw-bolder fst-italic '>{error.username}</p>: null}
        <input className='form-control' type="email" placeholder='me@anything.com..'  name="email" ref={inputEmailRef} />
        {error.email ? <p className='text-danger fw-bolder fst-italic'>{error.email}</p>: null}
        <input className='form-control' type="password" placeholder='Password..'  name="password" ref={inputPasswordRef} />
        {error.password ? <p className='text-danger fw-bolder fst-italic'>{error.password}</p>: null}
        <input className='form-control' type="password" placeholder='Confirm Password..'  name="Rpassword" ref={inputRePasswordRef} />
        {error.rePassword ? <p className='text-danger fw-bolder fst-italic'>{error.password}</p>: null}
        <div className="terms d-flex justify-content-center gap-1">
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} name='privacy'/>
          <label htmlFor="privacy">I have read and agree to the terms</label>
        </div>
        <input type="submit" className='btn btn-primary' disabled={!isChecked}/>
      </form>
    </div>
  )
}
