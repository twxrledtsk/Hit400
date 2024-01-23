import React from 'react';
import "./style.css";


const Homepage = () => {
  return (
    <>
      <img className="background" src="https://via.placeholder.com/1930x1287" alt="Background" />
      <div className="container">
        <div className='header' >
          <div className="text">logo</div>
        </div>
        <div className="inputs">
          <div className="input">
            <img width="32" height="32" src="https://img.icons8.com/windows/32/user-male-circle.png" alt="user-male-circle" />
            <input type='text' placeholder='Username' />
          </div>

          <div className="input">
            <img width="32" height="32" src="https://img.icons8.com/windows/32/lock.png" alt="lock" />
            <input type='password' placeholder='Password' />
          </div>
        </div>
        <div className='submit-container'>
          <div className="submit"> Login </div>
        </div>
        <div className='submit-container2'>
          <div className="submit"> Don't have an account?</div>
        
        </div>
      </div>
    </>
  );
};

export default Homepage;