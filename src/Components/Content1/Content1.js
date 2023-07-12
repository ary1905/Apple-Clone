import React from 'react'
import { Link } from 'react-router-dom'
import './Content1.css'

export default function Content1() {
  return (
    <div className='con1' style={{ gridArea: 'con1' }}>
      <div className='heading1'>
        <span >
          <span className='head11'>MacBook Air 15"</span>
          <br />
          <p className='head12'> Impressively big. Impossibly thin.</p>
          <br />
          <span className='head13'><Link className='link1'>Learn more</Link> {`>`}</span>
          <span className='head14'><Link className='link1'>Buy</Link> {`>`}</span>
        </span>
      </div>
    </div>
  )
}
