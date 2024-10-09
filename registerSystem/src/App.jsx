import React from 'react';
import { useState ,useEffect } from 'react';
import Register from './components/Register'
import Login from './components/Login'


function App() {
  const [active , setActive] = useState('');

  useEffect(()=>{
      console.log('active Btn changed to :' + active);
  },[active])

  return (
    <div className="col-12 d-flex flex-column justify-content-center align-items-center my-5">
      <div className="operationBtn d-flex gap-3">
          <button className='btn btn-info p-3' onClick={()=>{setActive('Login')}}>Login</button>
          <button className='btn btn-light p-3' onClick={()=>{setActive('Register')}}>Register</button>
      </div>
      <div>
        {
          active == 'Login' ? <h1>{active}</h1> : <h1>{active}</h1>
        }
      </div>

      {/* <Register></Register>
      <Login></Login> */}
    </div>
  )
}

export default App