import React from 'react'
import { Link } from 'react-router-dom'
import './Content4.css'

export default function Content4() {
  return (
    <div className='con4' style={{ gridArea: 'con4' }}>
      <div className='heading4'>
        <span >
          <p className='head41'>iPhone 14</p>
          <br />
          <p className='head42'>Wonderfull.</p>
          <br />
          <span className='head43'><Link className='link4'>Learn more</Link> {`>`}</span>
          <span className='head44'><Link className='link4'>Buy</Link> {`>`}</span>
        </span>
      </div>
    </div>
  )
}
