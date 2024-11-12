import React, { useContext } from 'react'
import TablazatSor from './TablazatSor'
import { ApiContext } from '../../contexts/ApiContext'

function Tablazat() {
    const {termekLista} = useContext(ApiContext)

    return (
        <table className='table table-stripped'>
            <thead className='thead-dark'>
                <th>Név</th>
                <th>Ár</th>
                <th>Kategória</th>
                <th>Törlés</th>
                <th>Módosítás</th>
            </thead>
            <tbody>
                {
                    termekLista.map((elem, index)=>{
                        return <TablazatSor elem={elem} key={index}/>
                    }
                )}
            </tbody>
        </table>
      )
}

export default Tablazat