import React from 'react'
import { Link } from 'react-router-dom'
import './Content8.css'
import logo from './apple-logo.png'

export default function Content8() {
  return (
    <div className='con8' style={{ gridArea: 'con8' }}>
      <div className='heading8'>
        <span style={{ width: '100%', height: '40%' }}>
          <p className='head81'><img className='logo5' src={logo} alt='logo' style={{ marginTop: '-1%' }}></img>Trade In</p>
          <p className='head82'>Upgrade and save. It's that easy</p>
          <p className='head83'><Link className='link8'>See what your device is worth</Link> {`>`}</p>
        </span>
      </div>
    </div>
  )
}
