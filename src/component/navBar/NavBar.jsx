import React from 'react'
import Icon from '../../tracketIcon/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faPlane, faTrain, faUser } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
    return (
        <nav className='navbar'>
            <ul className='nav-menu'>
                <li>
                    <i className="tracket-icon">
                        <Icon />
                    </i>
                </li>
                <li className='nav-item'>
                    <a href='#' className="plane-text">
                        پرواز
                    </a>
                    <span className="plane-icon">
                        <FontAwesomeIcon icon={faPlane} />
                    </span>
                </li>
                <li className='nav-item'>
                    <a href='#' className="train-text">
                        قطار
                    </a>
                    <span className="train-icon">
                        <FontAwesomeIcon icon={faTrain} />
                    </span>
                </li>
                <li className='nav-item'>
                    <a href='#' className="bus-text">
                        اتوبوس
                    </a>
                    <span className="bus-icon">
                        <FontAwesomeIcon icon={faBus} />
                    </span>
                </li>
                <li className="login-register">
                    <span className='user-icon'>
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <a href="#" className="">
                        ورود/ثبت نام
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar