/* eslint-disable no-unused-vars */
import './App.css';
import {useState, useEffect, useRef} from 'react';
import {Preloader, Ripple} from './preloader.mjs';
import { dashboard } from './dashboard.mjs';

const Divgen = (props) => {
  return (
    <div className={props.label}></div>
  )
};

const Profilegen = () => {
  let items = ['header', 'profile', 'exp', 'stat1', 'stat2', 'stat3', 'char'];
  let rows = [];

  items.forEach(el => {
    rows.push(<Divgen key={el} label={el} />);
  });

  return (
    <section>
      {rows}
    </section>
  )
};

function App() {

  let formRef = useRef();

  return (
    <div className="App">

      <div id="login" onClick={dashboard}>
        <div className='preloader'></div>
        <div className='preloader'></div>
  
        <div className='input'>
  
          <div className='form'  ref={formRef} >
            <input autoComplete="off" name='username' type='text' placeholder='Enter Your Username' required />
            <input autoComplete="off" name='pwd' type='password' placeholder='Enter Your Password' required />
            <button name='submit' onClick={Ripple}>Login</button>
          </div>
          
          <img className='loaderImg' src={process.env.PUBLIC_URL + 'images/logo1.jpg'} alt='si' />
  
        </div>
      </div>
      <div id='dashboard' onClick={dashboard}>
        <section id='sidebar'>
          <div className='title'>
            <h1>S</h1>
            <span>c</span>
            <h3>i</h3>
            <span>sco</span>
          </div>
          <div className='logout'>
            <img src={process.env.PUBLIC_URL + 'images/logout.svg'} alt='logout' />
            <span>Logout</span>
          </div>
          <div className='change'>
            <img src={process.env.PUBLIC_URL + 'images/change.svg'} alt='logout' />
            <span>Change User</span>
          </div>
        </section>
        <section id='profile'>
          <div className='header'>
            <img src={process.env.PUBLIC_URL + 'images/right-arrow.png'} alt='right-arrow' />
            Welcome!
          </div>
          <div className='profile'>
            <div id='pic'>
              <span></span>
            </div>
            <div id="info">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className='exp'>
              <div className='head'>
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div>
                  <span></span>
                </div>
              </div>

              <div className='head'>
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div>
                  <span></span>
                </div>
              </div>
          </div>
          <div className='stat1'>
            <div className='head'>
              <div>
                <span></span>
                <span></span>
              </div>
              <div>
                <span></span>
              </div>
            </div>
          </div>
          <div className='stat2'>
            <div className='head'>
              <div>
                <span></span>
                <span></span>
              </div>
              <div>
                <span></span>
              </div>
            </div>
          </div>
          <div className='stat3'>
            <div className='head'>
              <div>
                <span></span>
                <span></span>
              </div>
              <div>
                <span></span>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

export default App;
