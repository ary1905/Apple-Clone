import React from 'react'
import { Link } from 'react-router-dom'
import './Content9.css'
import logo from './apple-logo.png'

export default function Content9() {
  return (
    <div className='con9' style={{ gridArea: 'con9' }}>
      <div className='heading9'>
        <span style={{ width: '100%', height: '40%' }}>
          <p className='head91'><img className='logo9' src={logo} alt='logo'></img>Card</p>
          <p className='head92'>Get up to 3% Daily Cash back</p>
          <p className='head93'>with every purchase.</p>
          <p className='head94'>
            <Link className='link9'>Learn more</Link> {`>`}
            <span style={{ marginLeft: '20px' }}></span>
            <Link className='link9'>Apply now</Link> {`>`}
          </p>
        </span>
      </div>
    </div>
  )
}
