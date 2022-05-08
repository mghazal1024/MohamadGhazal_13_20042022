import React, { useEffect, useState } from 'react'
import './pages.scss';


const SigninPage = () => {
   

    return (
        <main className='main bg-dark'>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                <div className="input-wrapper">
                    <label htmlFor="email">email</label>
                    <input
                        placeholder='Email'
                        name='Email'
                        type="email"
                        id="email"
                        // value={email}
                        // onChange={(e) => setState((prevState) => ({
                        //     ...prevState,
                        //     email: e.target.value
                        // }))}
                    />
                    {/* { emailError ? <p className='error-text'>{emailError}</p> : null} */}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder='Password'
                        name="password"
                        type="password"
                        id="password"
                        // value={password}
                        // onChange={(e) => setState((prevState) => ({
                        //     ...prevState,
                        //     password: e.target.value
                        // }))}
                    />
                    {/* { passwordError ?  <p className='error-text'>{passwordError}</p> : null } */}
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                <button className='sign-in-button' type='submit'>Sign In</button>
                </form>
                {/* {status && status !== 200 ? <h3 className='login-error'>{message}</h3> : null} */}
            </section>
        </main>
    )
}

export default SigninPage
