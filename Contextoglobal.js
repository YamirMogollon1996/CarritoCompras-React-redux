import { createContext, useEffect, useReducer, useState } from "react";
import { funcionesreductora, initalSatatesecond } from "./Reductoras";
export const contextoglobal2 =  createContext()



const Conosumercontext = (  { children })=>{
    
    
    const [total , setotal] =  useState(0)
    const [state, dispatch] = useReducer( funcionesreductora , initalSatatesecond )
    const data = { state, dispatch  , total, setotal}

    
    useEffect(()=>{
                
            localStorage.setItem("productos" ,  JSON.stringify(state))

    },[state])

    return(


                <contextoglobal2.Provider value={ data }    >
                    {children}
                </contextoglobal2.Provider>
    
    
    )

}

export default Conosumercontext


