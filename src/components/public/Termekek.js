import React, { useContext } from 'react'
import Termek from './Termek' 
import { ApiContext } from '../../contexts/ApiContext' 

function Termekek() {
    const {termekLista} = useContext(ApiContext)
  return (
    <>
        {
            termekLista.map((elem, index)=>{
                return <Termek elem={elem} key={index}/>
            }
        )}
    </>
  )
}

export default Termekek