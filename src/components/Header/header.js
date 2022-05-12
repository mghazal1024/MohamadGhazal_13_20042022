import React, {useEffect} from 'react'
import './header.scss'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser, faSignOut, faSignIn,} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../slices/User';


const Header = ( props ) => {

    const { isConnect } = props 

    const name = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signOut = () => {
        dispatch(logout());
        localStorage.clear();
        navigate('/');
        console.log('sup')
    };
    
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            { isConnect 
            ? 
            <div className='main-nav__submenu'>
                <Link
                    to="/profile" className='main-nav-item'
                >
                    <FontAwesomeIcon icon={faCircleUser} />
                    {name.user.firstName}
                </Link>
                <a
                    className='main-nav-item' onClick={signOut}
                >
                    <FontAwesomeIcon icon={faSignOut} />
                    Sign Out
                </a>
            </div>
            :
            <Link
                exact to="/login" className='main-nav-item'
            >
                <FontAwesomeIcon icon={faSignIn} />
                Sign In
            </Link>
            }
        </nav>
    )
}

export default Header


