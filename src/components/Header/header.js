import React, {useEffect} from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import logo from '../../images/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser, faSignOut, faSignIn} from '@fortawesome/free-solid-svg-icons'


const UserHeader = () => {
    return (
        <div className='userHeader'>
        <p><FontAwesomeIcon icon={faCircleUser}/> Tony</p>
        <Link className='main-nav-item'to="/">
            <FontAwesomeIcon icon={faSignOut} />
            Sign Out
        </Link>
        </div>
    )
}

const Header = () => {

    useEffect(() => {

    })

    
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
            <div className='main-nav__submenu'>
                { window.location.href.indexOf('user') > -1 ? <UserHeader /> :
                <Link className='main-nav-item'to="/sign-in/">
                    <FontAwesomeIcon icon={faSignIn} />
                    Sign In
                </Link>
                }
            </div>
        </nav>
    )
}

export default Header


if (window.location.href.indexOf("mystring") > -1) {

}