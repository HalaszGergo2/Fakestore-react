import React, { useContext } from 'react'
import { ApiContext } from '../../contexts/ApiContext'

function TablazatSor(props) {
    const {deleteAdat /*modositAdat*/} = useContext(ApiContext)
  return (

            <tr>
                <td>{props.elem.title}</td>
                <td>{props.elem.price}$</td>

                <td>{props.elem.category}</td>
                <td onClick={()=> deleteAdat("/products", props.elem.id)}>🗑️ </td>
                <td /*onClick={()=> modositAdat("/products", props.elem.id, "WAAAAAAAAAAAAAA")}*/>🖊️</td>
            </tr>
  )
}
//<td>{props.elem.description}</td>
export default TablazatSor