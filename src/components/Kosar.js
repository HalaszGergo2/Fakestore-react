import React, { useContext } from 'react'
import { KosarContext } from '../contexts/KosarContext'
import KosarElem from './KosarElem'

function Kosar() {
    const {kosarLista} = useContext(KosarContext)
  return (
    <>
        {
            kosarLista.map((elem, index)=>{
                return <KosarElem elem={elem} key={index}/>
            }
        )
        }
    </>
  )
}

export default Kosar