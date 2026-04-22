import React from 'react'

const SkillsList = ({ skills }) => {
  return (
    <div>
      <p className='skillsHeading'>Skills</p>
      <div className='skills'>
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default SkillsList
