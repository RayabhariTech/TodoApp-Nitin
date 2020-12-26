import React from 'react'
import loginImage from './images/account.svg'

function LoginPage(props) {
    return (
        <div>
             <div className='login-container'>
                    <div className="form-login-heading">
                    <p>Login to your account</p>
                    </div>
                    <div className='form-container'>
                        <form className='login-form' onSubmit={(event) =>props.handleLoginFormSubmit(event)}>
                            <div className='input-box-position'>
                            <div className='userInput-box'>
                            <input 
                            type='text' 
                            className='login-input'
                            placeholder='Username'/>
                            </div>
                            <span className='form-error-message'>{props.stateData.userName}</span>
                            </div>
                            <div className='password-box'>
                            <input 
                            type='password' 
                            className='login-password'
                            placeholder='Password'/>
                            </div>
                            <span className='form-error-message'>{props.stateData.password}</span>
                            <button className='login-button'>Login</button>
                            <p className='forgot-password-link'>Forgot password?</p>
                        </form>
                        <p className='create-account-link'>Create Account</p>
                    </div>
                    <div className='image-position'>
                    <figure>
                        <img src={loginImage} alt='Login-image'/>
                    </figure>
                    </div>
            </div>
        </div>
    )
}

export default LoginPage
