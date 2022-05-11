import React, { useEffect, useState } from 'react'
import './pages.scss';
import { Link } from 'react-router-dom'


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
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder='Password'
                        name="password"
                        type="password"
                        id="password"
                        required
                    />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                <Link to="/user">Sign In</Link>
                </form>
            </section>
        </main>
    )
}

export default SigninPage
