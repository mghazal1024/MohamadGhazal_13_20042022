import React, { useRef, useState } from 'react'
import './pages.scss';
import Axios from '../services/axios';
import { profile } from '../slices/User'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'


const SigninPage = () => {

    const email = useRef();
    const password = useRef();
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setUserData = (userData) => {
        dispatch(profile({...userData}));
        localStorage.setItem('token', JSON.stringify(userData.token));
        navigate('/profile');
    };

    const signInSubmit = (e) => {
        e.preventDefault();
        const dataForm = {
            email: email.current.value,
            password: password.current.value,
        };
        Axios('login', dataForm)
            .then((userData) => {
                setUserData(userData);
            })
            .catch(() => {
                setError(true);
            })
    }

   

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
                        ref={email}
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
                        ref={password}
                        required
                    />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                { error && (
                    <p>Username or password is incorrect</p>
                )}
                {/* <input
                    type="submit"
                    value="Sign In"
                    className="signin-button"
                /> */}
                <button className='sign-in-button' onClick={signInSubmit}>Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default SigninPage











// import { useRef, useState } from 'react';
// import Axios from '../services/axios';
// import { useDispatch } from 'react-redux';
// import { profile } from '../slices/User';
// import { useNavigate } from 'react-router-dom';
// import './pages.scss';

// /**
//  *  FormSignIn component smart
//  *  login form
//  */
// const SigninPage = () => {
//     const email = useRef();
//     const password = useRef();
//     const [error, setError] = useState(false);
//     const dispatch = useDispatch();
//     const history = useNavigate();

//     /**
//      *  SetUserData send data to Slice
//      * @param  {Object} userData this is the data received by Axios
//      */
//     const SetUserData = (userData) => {
//         dispatch(profile({ ...userData }));
//         localStorage.setItem('token', JSON.stringify(userData.token));
//         history.push('/profile');
//     };

//     const SignInSubmit = (e) => {
//         e.preventDefault();
//         const dataForm = {
//             email: email.current.value,
//             password: password.current.value,
//         };
//         Axios('login', dataForm)
//             .then((userData) => {
//                 SetUserData(userData);
//             })
//             .catch(() => {
//                 setError(true);
//             });
//     };

//     return (
//         <main className='main bg-dark'>
//             <div className="sign-in-content">
//                 {error && (
//                     <span style={{ color: 'red' }}>
//                         Your username or password is incorrect !
//                     </span>
//                 )}
//                 <i className="fa fa-user-circle sign-in-icon"></i>
//                 <h1>Sign In</h1>
//                 <form onSubmit={SignInSubmit}>
//                     <div className="input-wrapper">
//                         <label htmlFor="username">Email</label>
//                         <input type="email" id="email" ref={email} required />
//                     </div>
//                     <div className="input-wrapper">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             ref={password}
//                             required
//                         />
//                     </div>
//                     <div className="input-remember">
//                         <input type="checkbox" id="remember-me"/>
//                         <label htmlFor="remember-me">Remember me</label>
//                     </div>
//                     <input
//                         type="submit"
//                         value="Sign In"
//                         className="sign-in-button"
//                     />
//                 </form>
//             </div>
//         </main>
//     );
// };


// export default SigninPage