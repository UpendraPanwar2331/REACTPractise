import React from 'react'
import { Link } from 'react-router-dom'

const Routing = () => {
  return (
    <div>
      <Link to="/counter">Counter &nbsp;</Link>
      <Link to="/todo">TODO &nbsp;</Link>
      <Link to="/prop">PROP &nbsp;</Link>
      <Link to="/prac">PRAC &nbsp;</Link>
   
    </div>
  )
}

export default Routing
