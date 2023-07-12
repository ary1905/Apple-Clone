import React, { useEffect, useState } from 'react';
import './Content10.css';
import img1 from './Con1001.png';
import img2 from './Con1002.png';
import img3 from './Con1003.png';
import img4 from './Con1004.png';
import img5 from './Con1005.png';
import img6 from './Con1006.png';
import img7 from './Con1007.png';
import img8 from './Con1008.png';
import img9 from './Con1009.png';
import img10 from './Con1010.png';
import img11 from './Con1011.png';

export default function Content10() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById('radio' + counter)?.click();
      setCounter((prevCounter) => (prevCounter % 11) + 1);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    slides.forEach((slide) => {
      observer.observe(slide);
    });
  }, []);


  return (
    <div className='con10' style={{ gridArea: 'con10' }}>
      <div className='slider'>
        <div className='slides'>
          <input type='radio' name='radio-btn' id='radio1' value='1' />
          <input type='radio' name='radio-btn' id='radio2' value='2' />
          <input type='radio' name='radio-btn' id='radio3' value='3' />
          <input type='radio' name='radio-btn' id='radio4' value='4' />
          <input type='radio' name='radio-btn' id='radio5' value='5' />
          <input type='radio' name='radio-btn' id='radio6' value='6' />
          <input type='radio' name='radio-btn' id='radio7' value='7' />
          <input type='radio' name='radio-btn' id='radio8' value='8' />
          <input type='radio' name='radio-btn' id='radio9' value='9' />
          <input type='radio' name='radio-btn' id='radio10' value='10' />
          <input type='radio' name='radio-btn' id='radio11' value='11' />
          <div className='slide first'>
            <div className='image-container'>
              <img src={img1} alt='Hijack series poster' />
              <button className='image-button'></button>
            </div>
          </div>
          <div className='slide'>
            <div className='image-container'>
              <img src={img2} alt='Silo series poster' />
              <button className='image-button' ></button>
            </div>
          </div>
          <div className='slide'>
            <div className='image-container'>
              <img src={img3} alt='Platonic series poster' />
              <button className='image-button' ></button>
            </div>
          </div>
          <div className='slide'>
            <div className='image-container'>
              <img src={img4} alt='The Crowded Room series poster' />
              <button className='image-button' ></button>
            </div>
          </div>
          <div className='slide'>
            <div className='image-container'>
              <img src={img5} alt='Baseball poster' />
              <button className='image-button' ></button>
            </div>
          </div>
          <div className='slide'>
            <div className='image-container'>
              <img src={img6} alt='Swagger series poster' />
              <button className='image-button' ></button>
            </div>
          </div>
          <div className='slide'>
            <div className='image-container'>
              <img src={img7} alt='Foundation series poster' />
              <button className='image-button' ></button>
            </div>
          </div>
          <div className='slide'>
            <div className='image-container'>
              <img src={img8} alt='The After Party series poster' />
              <button className='image-button' ></button>
            </div>
          </div>
          <div className='slide'>
            <div className='image-container'>
              <img src={img9} alt='Ted Lasso series poster' />
              <button className='image-button' ></button>
            </div>
          </div>
          <div className='slide'>
            <div className='image-container'>
              <img src={img10} alt='Shrinking series poster' />
              <button className='image-button' ></button>
            </div>
          </div>
          <div className='slide'>
            <div className='image-container'>
              <img src={img11} alt='The Snoopy Show series poster' />
              <button className='image-button' ></button>
            </div>
          </div>
          <div className='navigation-auto'>
            <label htmlFor="radio1" className="auto-btn" id='btn1' onClick={() => setCounter(1)}></label>
            <label htmlFor="radio2" className="auto-btn" id='btn2' onClick={() => setCounter(2)} ></label>
            <label htmlFor="radio3" className="auto-btn" id='btn3' onClick={() => setCounter(3)} ></label>
            <label htmlFor="radio4" className="auto-btn" id='btn4' onClick={() => setCounter(4)} ></label>
            <label htmlFor="radio5" className="auto-btn" id='btn5' onClick={() => setCounter(5)} ></label>
            <label htmlFor="radio6" className="auto-btn" id='btn6' onClick={() => setCounter(6)} ></label>
            <label htmlFor="radio7" className="auto-btn" id='btn7' onClick={() => setCounter(7)} ></label>
            <label htmlFor="radio8" className="auto-btn" id='btn8' onClick={() => setCounter(8)} ></label>
            <label htmlFor="radio9" className="auto-btn" id='btn9' onClick={() => setCounter(9)} ></label>
            <label htmlFor="radio10" className="auto-btn" id='btn10' onClick={() => setCounter(10)}></label>
            <label htmlFor="radio11" className="auto-btn" id='btn11' onClick={() => setCounter(11)}></label>
          </div>
        </div>
      </div>
    </div>
  );
}
