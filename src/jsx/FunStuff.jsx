import { useState, useRef } from 'react';

import catPic from '../images/Asa.jpg';


function Cat() {
  const [peeking, setPeeking] = useState('cat-hidden');

  function handleClick() {
    switch (peeking) {
      case 'cat-hidden':
      case 'cat-hide': setPeeking('cat-show'); break;
      case 'cat-show': setPeeking('cat-hide'); break;
      default: console.log('error');
    }
  }

  return (
    <div id='cat-btn'>
      <button onClick={handleClick}>meow</button>
      <img className={peeking} src={catPic} />
    </div>
  )
}


function Torch() {
  const [isLit, setIsLit] = useState(false);
  let torchRef = useRef(null);
  let torchStyle = {
    animation: isLit ? 'torch 4s' : 'none'
  };

  function handleClick() {
    torchRef.current.getAnimations().length
    ? setIsLit(false)
    : setIsLit(true)
  }

  return (
    <button ref={torchRef} className='torch' onClick={handleClick} onAnimationEnd={() => setIsLit(false)} style={torchStyle}>Torch</button>
  )
}


function Firework() {
  const [isShooting, setIsShooting] = useState(false);
  let firework = useRef(null);
  let fireworkClass = isShooting ? 'shoot-firework' : '';
  let btnStyle = {
    boxShadow: isShooting ? '0 0 5px 2px pink' : 'none'
  };

  function handleClick() {
    firework.current.getAnimations().length
    ? setIsShooting(false)
    : setIsShooting(true)
  }

  return (
    <div id='firework-div'>
      <div ref={firework} id='firework' className={fireworkClass} onAnimationEnd={() => setIsShooting(false)}></div>
      <button id='launcher' onClick={handleClick} style={btnStyle}>Firework</button>
    </div>
  )
}


export default function FunStuff() {
  
  return (
    <section id='fun-stuff'>
      <div id="banner">
        <p>FUN STUFF</p>
      </div>
      <div id='fun-buttons'>
        <Cat />
        <Torch />
        <Firework />
      </div>
    </section>
  )
}