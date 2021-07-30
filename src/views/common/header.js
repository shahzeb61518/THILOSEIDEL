import React, { Component } from 'react'
import { Navbar } from 'reactstrap'

class Header extends Component {
  render () {
    return (
      <div
        color='light'
        //  className='d-flex justify-content-center'
      >
        {/* <!-- Navigation--> */}
        <nav
          // class='navbar navbar-expand-lg navbar-light fixed-top'
          id='mainNav'
        >
          <div style={{ background: 'black' }}>
            <div className='row' style={{ width: '100%' }}>
              <div class='d-flex bd-highlight mb-0 mt-0 pt-4 pb-2'>
                <div class='p-2 bd-highlight'>
                  <img
                    className='ml-3'
                    style={{ width: '100px', height: '70px' }}
                    src='https://www.pngkit.com/png/full/253-2538387_mobile-phone-png-transparent-hd-photo-mobile-images.png'
                  />
                </div>
                <div class='p-2 bd-highlight pt-3'>
                  <h1 style={{ color: 'white', fontFamily: 'cursive' }}>
                   Onnjo
                  </h1>
                </div>
                <div class='ml-auto p-0 bd-highlight mr-5 mt-4'>
                  <div class='input-group'>
                    <div class='form-outline'>
                      <input
                        style={{ color: 'white', background: 'black' }}
                        type='search'
                        id='form1'
                        class='form-control'
                        placeholder='Search...'
                      />
                      {/* <label class='form-label' for='form1'>
                        Search
                      </label> */}
                    </div>
                    <button
                      type='button'
                      class='btn btn-light'
                      style={{ height: '39px' }}
                    >
                      <i class='fas fa-search'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row' style={{ width: '100%' }}>
              <hr
                style={{
                  height: '3px',
                  width: '90%',
                  marginBottom: '0px',
                  marginTop: '0px',
                  color: 'orange',
                  marginLeft: '5%',
                  borderRadius: '5px',
                  marginTop: '0px',
                  color: '#fb780c',
                  opacity: 'inherit'
                }}
              />
            </div>
            <div className='row' className='pb-3 pt-3' style={{ width: '100%' }}>
              <div class='container px-4 px-lg-5'>
                <div class='dropdown'>
                  <button class='dropbtn'>PRODUCT</button>
                  <div class='dropdown-content'>
                    <a href='#'>Phone Cases</a>
                    <a href='#'>Tablet Cases</a>
                    <a href='#'>Screen Protectors</a>
                  </div>
                </div>
                <div class='dropdown'>
                  <button class='dropbtn'>SOLUTION</button>
                  <div class='dropdown-content'>
                    <a href='#'>Health Care</a>
                    <a href='#'>Transportation</a>
                    <a href='#'>Field Service</a>
                    <a href='#'>First Responder</a>
                    <a href='#'>Energy, Oil and Gas</a>
                    <a href='#'>Education</a>
                  </div>
                </div>
                <div class='dropdown'>
                  <button class='dropbtn'>COMPANY</button>
                  <div class='dropdown-content'>
                    <a href='#'>Contact Us</a>
                    <a href='#'>About Us</a>
                  </div>
                </div>

                <div class='dropdown'>
                  <button class='dropbtn'>PARTNERS</button>
                  <div class='dropdown-content'>
                    <a href='#'>Partners</a>
                    <a href='#'>Partners Login</a>
                    <a href='#'>Deal Registration</a>
                  </div>
                </div>

                <div class='dropdown'>
                  <button class='dropbtn'>WHERE TO BUY</button>
                  <div class='dropdown-content'>
                    <a href='#'>Where to Buy</a>
                  </div>
                </div>

                <div class='dropdown'>
                  <button class='dropbtn'>SUPPORT</button>
                  <div class='dropdown-content'>
                    <a href='#'>Register your product</a>
                    <a href='#'>Support</a>
                    <a href='#'>Warrent Info</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
