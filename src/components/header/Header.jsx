import React, { useState } from 'react'

const Header = ({ name, tagline, imageIndex }) => {
  return (
    <div className='header'>
      <img
        src={`https://randomuser.me/api/portraits/men/${imageIndex}.jpg`}
        alt=''
      />
      <div className='nameAndDesc'>
        <h2 className='name'>{name}</h2>
        <p className='tagline'>{tagline}</p>
      </div>
    </div>
  )
}

export default Header
