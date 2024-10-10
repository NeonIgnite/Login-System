import React from 'react';
import { useState ,useEffect } from 'react';
import Register from './components/Register'
import Login from './components/Login'


function App() {
  const [active , setActive] = useState('Login');

  useEffect(()=>{
      console.log('active Btn changed to :' + active);
  },[active])

  return (
    <div className="wrapper col-12 m-0 p-2">
      <div className="col-12 d-flex flex-column justify-content-center align-items-center p-2">
        <div className="operationBtn d-flex gap-3 col-6 justify-content-center">
            <button className='btn btn-primary p-3 w-25' onClick={()=>{setActive('Login')}}>Login</button>
            <button className='btn btn-primary p-3 w-25' onClick={()=>{setActive('Register')}}>Register</button>
        </div>
        <div className='col-8 d-flex justify-content-center'>
          {
            active == 'Login' ? <Login/> : <Register/> 
          }
        </div>

      </div>
    </div>
    
  )
}

export default App