import React from 'react'
import { useLocation } from 'react-router-dom'

function NewsDetails() {

    const location = useLocation()

    console.log(location)

  return (
    <div style={{padding:"30px"}}>
      <h1>Title : {location.state.data.title}</h1>
      <h3>Description : {location.state.data.description}</h3>
      <h4>Author : {location.state.data.author}</h4>
      <h6>Sourcs : {location.state.data.source.name}</h6>
    </div>
  )
}

export default NewsDetails
