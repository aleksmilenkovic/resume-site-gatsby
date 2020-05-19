import React from 'react'
import styled from 'styled-components'

export default styled(({ className, title = 'Skills', skills = [] }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <ul>
      {skills.map(skill => (
        <li key={skill.name}>{skill.name}</li> 
      ))}
      </ul>
    </div>
  )
})`
  width: 100%;
  ul{
   list-style:none;
   display:flex;
   flex-wrap:wrap;
   justify-content:flex-start;
   padding:10px;
   text-align:center;
   
  
   li{
     padding:10px;
     font-size:1.3rem;
     font-weight:600;
    }
  }


`