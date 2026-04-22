import React, { useState } from 'react'
import './portfolioCard.css'
import { userData } from '../data/UserData.js'
import Header from './header/Header.jsx'
import SkillsList from './SkillsList/SkillsList.jsx'
import CardActions from './CardActions/CardActions.jsx'

const PortfolioCard = ({ isDarkMode, setisDarkMode }) => {
  const [isLiked, setisLiked] = useState(false)
  const [imageIndex, setimageIndex] = useState(1)

  return (
    <div className='portfolioCardContainer'>
      {userData.map((user, index) => (
        <div
          className={`portfolioCard ${isDarkMode ? 'bgDark' : 'bgLight'} `}
          key={index}
        >
          <Header
            name={user.name}
            imageIndex={imageIndex}
            tagline={user.tagline}
          />
          <p className='desc'>{user.desc}</p>
          <SkillsList skills={user.skills} />
          <CardActions
            setisLiked={setisLiked}
            isDarkMode={isDarkMode}
            imageIndex={imageIndex}
            setimageIndex={setimageIndex}
            isLiked={isLiked}
            likes={user.likes}
            setisDarkMode={setisDarkMode}
          />
        </div>
      ))}
    </div>
  )
}

export default PortfolioCard
