import React from 'react'
// import Toggle from './Toggle'
// import {useState} from 'react'

export default function Header({ onClick, darkMode }){

    // console.log("Header", darkMode)
                      
    return (
        <header className={`header ${darkMode ? 'darkMode' : ''}`} >
            <div className="header-flex">
                <h1>Where in the world?</h1>
                <div className="toggle-flex"  onClick={onClick}>
                       {darkMode ?  <i className='fas fa-moon fa-s'></i> : <i className='fas fa-sun fa-s'></i>} 
                    <span className='toggle-mode'>{darkMode ? 'Dark' : 'Light'} Mode</span>
                </div>
            </div>
        </header>
    )
}