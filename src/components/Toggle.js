// import React, {useState} from 'react'

// const Toggle = () => {

//     const [darkMode, setDarkMode] = useState(false);


//     function themeChange(){
//         const theme = document.querySelector(".fa-moon")
//         const grid = document.querySelector('.grid')
//         const countries = document.querySelector('.countries')
//         const body = document.body
    
//         theme.addEventListener('click' , () =>{
//             if(darkMode === false){

//                 body.classList.add('light-theme')
//                 grid.classList.add('light-theme')
//                 countries.classList.add('light-theme')
//                 setDarkMode(!darkMode)
//             }
//             else if(darkMode === true){
//                 body.classList.add('dark-theme')
//                 grid.classList.add('dark-theme')
//                 countries.classList.add('dark-theme')
//                 setDarkMode(!darkMode)

//             }
//         })
//     }

//   return (
//     <></>
//   )
// }

// export default Toggle