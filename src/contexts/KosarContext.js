import { createContext, useState } from "react";

export const KosarContext = createContext("");
export const KosarProvider =  ({children})=>{

    const [kosarLista, setLista]=useState([])

    function kosarba(obj){
        const segedLista = [...kosarLista]
        segedLista.push(obj)
        setLista([...segedLista])
    }

    return( 
    <KosarContext.Provider value={{kosarLista, kosarba}}>
        {children}
    </KosarContext.Provider>
    )
}