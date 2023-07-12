import React from 'react'
import { Link } from 'react-router-dom'
import './Content2.css'

export default function Content2() {
  return (
    <div className='con2' style={{ gridArea: 'con2' }}>
      <div className='heading2'>
        <span >
          <span className='head21'>Save on Mac or iPad</span>
          <br/>
          <p className='head22'>for college.</p>
          <br />
          <p className='head23'> Plus get a gift card upto $150.<span style={{fontSize:'smaller', verticalAlign: 'super'}}>1</span></p>
          <br />
          <p className='head24'><Link className='link1'>Shop now</Link> {`>`}</p>
        </span>
      </div>
    </div>
  )
}
