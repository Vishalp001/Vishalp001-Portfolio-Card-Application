import { useState } from 'react'
import './App.css'
import PortfolioCard from './components/PortfolioCard'
import { LuMoonStar, LuSun } from 'react-icons/lu'

function App() {
  const [isDarkMode, setisDarkMode] = useState(false)
  return (
    <div className='App'>
      <div className='cardContainer'>
        <div
          onClick={() => setisDarkMode(!isDarkMode)}
          className='lightDarkMain'
        >
          {isDarkMode ? <LuSun /> : <LuMoonStar />} <span>Toggle Theme</span>
        </div>
        <PortfolioCard isDarkMode={isDarkMode} setisDarkMode={setisDarkMode} />
      </div>
    </div>
  )
}

export default App
