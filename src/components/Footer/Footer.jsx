import React from 'react'
const soy2 = './soy2.jpg'

export default function Footer() {
  return (
    <footer className="container mx-auto">
      <div className="logo"> 
        <img className='logo2' src={soy2} /> 
        <div className="footer-content">
          <p>&copy; 2011-2024. Esta empresa es ficticia. Si tiene algún tipo de duda, favor Json.</p>
          <nav className="footer-nav">
            <ul>
              <li><a href="https://policies.google.com/privacy?hl=es">Política de Privacidad</a></li>
              <li><a href="https://policies.google.com/terms?hl=es">Términos y Condiciones</a></li>
              <li><a href="https://digital.gob.cl/contactanos/">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
