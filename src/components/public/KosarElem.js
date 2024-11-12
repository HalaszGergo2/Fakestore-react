import React from 'react'

function KosarElem(props) {
  return (
    <div>
        <p>{props.elem.title}{props.elem.price}$</p>
    </div>
  )
}

export default KosarElem