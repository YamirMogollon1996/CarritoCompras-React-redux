import React, { useContext } from 'react'
import { contextoglobal2 } from './Contextoglobal'

const Boleta = () => {
    
    const  {  state , dispatch , total,setotal}  = useContext(contextoglobal2)
    const  hableimprimir = ()=>{
      alert("imprmir y mandarbolata")

   }
   

  return (


            <>
            <div  className='boleta_factura'>
                        
                                <p>Title : <strong>  Facturacion </strong>  </p>
            <strong>

                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                
            </strong>
            <hr></hr>
            <h1>Total :{total}  </h1>
            <h2>IGV :{18 *  total / 100} </h2>
            <h1>Monto a pagar :  {  total   - (  18 *  total / 100 ) }  </h1>
            <button   onClick={ hableimprimir } >Imprimir</button>
            </div>


            </>
  )
}

export default Boleta