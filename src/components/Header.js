import React from 'react'
import Typewriter from "./Typewriter";
import '../App.css';
const Header = () => {
  return (
    <div className='text-center' style={{ marginTop: "8px" }}>
      <span className='head1'>NewsHub </span>
      <span className='head2'><Typewriter text="- Daily Headlines" delay={180} infinite /></span>

    </div>
  )
}

export default Header