import React from 'react';
import LogInput from './components/LogInput.js';
import LampHeader from './components/LampHeader.js';
import Registration from './components/registration.js';


function Login() {
    return(
        <div className="Login-page">
            <div className='LoginLogo'>
                <LampHeader />
            </div>
            <div className="">
                <div className='login-script'>
                    <h1>Welcome to Honors Library</h1>
                     <h3>We are an open source library database that allows you to search for relative materials for different course works.</h3>
                </div>
                <div className='Login'>
                    <LogInput />
                </div>
                <div className="Registration">
                    <Registration />
                </div>
            </div>
        </div>
    )
}

export default Login