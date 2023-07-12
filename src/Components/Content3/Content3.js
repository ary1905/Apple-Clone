import React from 'react'
import { Link } from 'react-router-dom'
import './Content3.css'

export default function Content3() {
  return (
    <div className='con3' style={{gridArea:'con3'}}>
      <div className='heading3'>
        <span >
          <p className='head31'>iPhone 14 Pro</p>
          <br />
          <p className='head32'>Pro.Beyond.</p>
          <br />
          <span className='head33'><Link className='link3'>Learn more</Link> {`>`}</span>
          <span className='head34'><Link className='link3'>Buy</Link> {`>`}</span>
        </span>
      </div>
    </div>
  )
}
