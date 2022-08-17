import React from 'react'
import { Link } from 'react-router-dom'

const Barrita = () => {
    
  return (

            <>
              <div className='render-op' >

                  <Link  to="/carrito" > Carrito </Link>
                  <Link  to="/Home" > Home </Link>
                  <Link  to="/productos" > Render </Link>


              </div>
                
            </>
  )
}

export default Barrita