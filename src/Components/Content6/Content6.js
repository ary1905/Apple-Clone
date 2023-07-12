import React from 'react'
import { Link } from 'react-router-dom'
import './Content6.css'
import logo from './logo.jpg'

export default function Content6() {
  return (
    <div className='con6' style={{ gridArea: 'con6' }}>
      <div className='heading6'>
        <span style={{ width: '100%', height: '40%' }}>
          <p className='head61'><img className='logo6' src={logo} alt='logo'></img>WATCH</p>
          <p className='head62'>SERIES 8</p>
          <p className='head63'>A healthy leap ahead.</p>
          <p className='head64'>
            <Link className='link6'>Learn more</Link> {`>`}
            <span style={{ marginLeft: '20px' }}></span>
            <Link className='link6'>Buy</Link> {`>`}
          </p>
        </span>
      </div>
    </div>
  )
}
