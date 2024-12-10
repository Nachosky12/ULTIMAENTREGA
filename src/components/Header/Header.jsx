
    import React from 'react'
    const soy = './soy.jpg'
    import Navbar from '../Navbar/NavBar'

    export default function Header() {
      return (
    <header className="header">
      <div className="logo">
        <img className='logo1' src={soy} />   
      </div>
        <div><Navbar/></div>  
    </header>
 )
}