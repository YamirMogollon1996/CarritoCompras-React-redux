import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Boleta from './Boleta'
import { contextoglobal2 } from './Contextoglobal'
import { types } from './Reductoras'

const Cart = () => {

const navegar  =  useNavigate()
  const {  state, dispatch , total,setotal}  =  useContext(contextoglobal2)
  const { productos , carrito , accion }  =  state

  const totalviewContainer = ()=>{

   setotal(carrito.map(item => item.total).reduce((acum , item) => acum +item , 0))

  }


  useEffect(()=>{
        totalviewContainer()

  },[carrito])

  const mandar = ()=>{
            navegar("/boleta")

  }
  return (

        <>
          <h1 style={ {  textAlign:"center" }} >Cart Description</h1>
                    {
                        carrito.length === 0   
                                        ? <h1>Cart Vacio</h1>
                                        :  carrito.map(item => <div  className='sesion' >
                                              <img className='centro_div' src={item.imagen} />
                                              <p>{item.nombre}</p>
                                              <p>{item.precio}</p>
                                              <p>{item.cantidad}</p>
                                              <p>{item.total}</p>
                                              <div className='Oso' >
                                        
                                                <button     onClick={()=> dispatch({
                                                    type: types.eliminar,
                                                    payload:  item

                                                })} className='butonrender' >Eliminar</button>
                                                <button  onClick={ ()=> dispatch({

                                                      type : types.aumentar,
                                                      payload: item
                                                }) } className='butonrender' >+</button>
                                                <button 
                                                  onClick={ ()=>dispatch({
                                                        type : types.disminuir,
                                                        payload: item

                                                  })}
                                                className='butonrender' >-</button> 
                                              </div>
                                        </div> )
                    }    
                    <div className='center_total' >
                    {
                        carrito.length >  0  && <h1>  Total :  {total ||  0} $ </h1>

                              
                    }
                    <button onClick={ ()=> mandar() }  >Go Description</button> 
                          </div>    
                   
                    
        </>
  )
}

export default Cart