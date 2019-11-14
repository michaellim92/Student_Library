import React from 'react';

export default function popUp() {
    return(
        <div className='popUp'>
            <h3>Registration</h3>

            <label htmlFor="firstName">First Name: </label>
            <input type="text" id='firstName' className='register'/><br />

            <label htmlFor="lastName">Last Name: </label>
            <input type="text" id='lastName' className='register'/><br />

            <label htmlFor="email">Email: </label>
            <input type="email" id='email' className='register'/><br />

            <label htmlFor="psw">Password: </label>
            <input type="psw" id='psw' className='register'/><br />

            <label htmlFor="confPsw">Confirm Password: </label>
            <input type="confPsw" id='confPsw' className='register'/><br />

            <button id='register-button'>Register Now</button>
        </div>
    )
}