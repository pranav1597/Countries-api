import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Countries from './components/Countries'
import Header from './components/Header'
import Country from './components/Country'

function App() {
  const [darkMode,setDarkMode] = useState(false)

  const switchMode = () => {
    
      setDarkMode(prevState => !prevState)
  }

  // console.log(darkMode)

  return (
    <div className={`App ${darkMode ? 'darkMode' : ''}`}>
      <Router>
        <Header onClick={switchMode} darkMode={darkMode}/>

        <Route exact path="/">
        
        <Countries darkMode={darkMode}/>
        </Route>
        <Route path='/countries/:name' children={<Country darkMode={darkMode}/>}></Route>
      </Router>
    </div>
  );
}

export default App;
