import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({children})=>{

    const [termekLista, setTermekLista]=useState([])
    const [kategoriaLista, setKategoriaLista]=useState([])

    /* axiosszal aszinkron módon GET kérést indítunk el a végpont felé */

    const getAdat = async (vegpont, callbackFv) => {
        try {
            const response = await myAxios.get(vegpont);
            //console.log("adat: ", response.data)
            callbackFv(response.data)
        }catch(err){
            console.log("Hiba történt az adat elküldésekor!");
        }finally{

        }
    };

    const postAdat = async (vegpont, adat) => {
        try {
            const response = await myAxios.post(vegpont, adat);
            console.log("adat: ", response.data)
        }catch(err){
            console.log("Hiba történt az adat elküldésekor!");
        }finally{

        }
    };
    

    const deleteAdat = async (vegpont, id) => {
        try {
            const response = await myAxios.delete(vegpont+"/"+id);
            console.log("törölve: ", response.data)
        }catch(err){
            console.log("Hiba történt az adat törlésekor!");
        }finally{

        }
    };

    /*
    const modositAdat = async (vegpont, id, adat) => {
        try {
            const response = await myAxios.patch(vegpont+"/"+id, adat);
            console.log("Módosítva: ", response.data)
        }catch(err){
            console.log("Hiba történt az adat módosításákor!");
        }finally{

        }
    };
    */
    // useEffect hook segítségével hívjuk meg az aszinkron get kéréseket
    // aszinkron hívások esetén ne végtelen sokszor fusson le a kérés hanem csak akkor ha a függőség listában változás történik

    useEffect(()=>{
        getAdat("/products", setTermekLista)
        getAdat("/products/categories", setKategoriaLista)
    },[])
            
    return(
        <ApiContext.Provider value={{termekLista, kategoriaLista, postAdat, deleteAdat /*modositAdat*/}}>
            {children}
        </ApiContext.Provider>
    )
        
    
}