import React from 'react'
import { Link } from 'react-router-dom'
import './Content7.css'
import M2 from './M2.jpg'

export default function Content7() {
  return (
    <div className='con7' style={{ gridArea: 'con7' }}>
      <div className='heading7'>
        <span style={{ width: '100%', height: '40%' }}>
          <p className='head71'>iPad Pro</p>
          <p className='head72'>Supercharged by<img className='logo7' src={M2} alt='M2 Chip'></img></p>
          <p className='head73'>
            <Link className='link7'>Learn more</Link> {`>`}
            <span style={{ marginLeft: '20px' }}></span>
            <Link className='link7'>Buy</Link> {`>`}
          </p>
        </span>
      </div>
    </div>
  )
}
