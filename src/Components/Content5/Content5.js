import React from 'react'
import { Link } from 'react-router-dom'
import './Content5.css'
import logo from './apple-logo.png'

export default function Content5() {
  return (
    <div className='con5' style={{ gridArea: 'con5' }}>
      <div className='heading5'>
        <span style={{width:'100%', height:'40%'}}>
          <p className='head51'><img className='logo5' src={logo} alt='logo' style={{marginTop:'-1%'}}></img>Vision Pro</p>
          <p className='head52'>Welcome to the era of spatial computing.</p>
          <p className='head53'>Available early next year in the U.S.</p>
          <p className='head54'><Link className='link5'>Learn more</Link> {`>`}</p>
        </span>
      </div>
    </div>
  )
}
