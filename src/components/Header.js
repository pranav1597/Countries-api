import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
// import Toggle from './Toggle'
// import {useState} from 'react'

export default function Header({ onClick, darkMode }){

    // console.log("Header", darkMode)
                      
    return (
        <header className={`header ${darkMode ? 'darkMode' : ''}`} >
            <div className="header-flex">
                <h1>Where in the world?</h1>
                <div className="toggle-flex"  onClick={onClick}>
                       {darkMode ?  <FontAwesomeIcon icon={faMoon} className='fas fa-moon fa-s'></FontAwesomeIcon> : <FontAwesomeIcon icon={faSun} className='fas fa-sun fa-s'></FontAwesomeIcon>} 
                    <span className='toggle-mode'>{darkMode ? 'Dark' : 'Light'} Mode</span>
                </div>
            </div>
        </header>
    )
}