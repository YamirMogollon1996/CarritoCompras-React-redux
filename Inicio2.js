import React, { useContext } from 'react'
import  { contextoglobal2 } from './Contextoglobal'
import { types } from './Reductoras'


const Inicio2 = () => {

  const {  state, dispatch  } =   useContext(  contextoglobal2 )
  console.log("yamir mogollon")

  return (

            <>            
            <h1  style={{ textAlign:"center",

          }} >MANGA COLECTION</h1>
          <br></br>
                  <div  className='Obtener' >

                                    
                    {
                          state.productos.length>  0 ?
                        state.productos.map(item => <div className='obtener-session' > 
                          

                            <h1>{item.nombre}</h1>
                            <img className='imagen'   src={item.imagen} />

                             <div></div>
                            <button  className='butonrender' >Eliminar</button>
                            <button className='butonrender'  onClick={()=> dispatch({
                                  type  : types.add,
                                  payload:  item
                            })} >add</button>
                            <button  className='butonrender' onClick={()=>dispatch({
                                  type: types.show  ,
                                  payload:  item

                            })} >Mostrar</button>
                        </div>):<h1>Espernado</h1>

                    }


                  </div>
                  
                    <hr></hr>
                    <div className='section_div' >

                    {
                          <img
                            className='section'
                            src={state.accion.imagen}
                          >
                            
                          </img>
                     
                    }

                    </div>
                  
            </>

  )
}

export default Inicio2