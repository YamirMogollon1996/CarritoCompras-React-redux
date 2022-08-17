import acuaman from "./../Compoentes/Heroes/acuman.jpg"
import angel from "./../Compoentes/Heroes/angel.jpg"
import antman from "./../Compoentes/Heroes/antman.jpg"
import flash from "./../Compoentes/Heroes/flash.jpg"
import iroman from "./../Compoentes/Heroes/iroman.jpg"
import loki from "./../Compoentes/Heroes/loki.jpg"



export const  types   = {
 
        show : "show - producto",
        add: "add - producto",
        eliminar : "eliminar - producto",
        aumentar:"aumentar",
        disminuir:"disminuir"


}


export const initalSatatesecond = {    

   
    productos :  [
      
        {id:1 , nombre :"Acuaman"  , cantidad:0  , precio:12  , imagen :  acuaman } , 
        {id:2 , nombre :"Angel"  , cantidad:0  , precio:15 , imagen: angel }, 
        {id:3 , nombre :"Antman"  , cantidad:0 ,precio : 100, imagen:antman},
        {id:4 , nombre :"Flash"  , cantidad:0 ,precio : 40 , imagen:flash},
        {id:5 , nombre :"Iroman"  , cantidad:0 ,precio : 84 , imagen:iroman},
        {id:6 , nombre :"Loki"  , cantidad:0 ,precio : 122, imagen:loki},
        
],
    carrito : [],
    accion :        {id:1 , nombre :"Acuaman"  , cantidad:0  , precio:12  , imagen :  acuaman } 

}


export const funcionesreductora =  ( state , action )=>{

        if (action.type ===  types.show){
                return { 
                    ...state,
                    accion :  action.payload
                }
        }
        if (action.type === types.add){

            const encontrar = state.carrito.find(item => item.id == action.payload.id)
            if (!encontrar)  {
                    
                return {

                    ...state , 
                    carrito:  [...state.carrito ,  action.payload]
                }
            }
        }
        if (action.type === types.eliminar)  {

            return {
                ...state , 
                carrito : state.carrito.filter(item => item.id != action.payload.id)
            }

        }
        if (action.type === types.aumentar){
                
            return {
                    ...state,
                    carrito: state.carrito.map(item => (
                            item.id === action.payload.id  ?
                                { ...item ,cantidad: item.cantidad + 1 ,  total : (item.precio * item.cantidad) +item.precio   }
                            :item


                    ))
                }

        }

        if (action.type === types.disminuir){
                
                const value =  action.payload
                if (value.cantidad >  0 ){
                    return { 

                        ...state,
                        carrito :  state.carrito.map( item =>   (
                                item.id  ===  action.payload.id
                                ?
                                    { ...item ,  cantidad:  item.cantidad  - 1 ,  total : (item.precio * item.cantidad) - item.precio}
                                :item

                        ))
                    }
                }

        }

    return state


}
