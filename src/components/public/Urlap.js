import React, { useContext, useState } from 'react'
import { ApiContext } from '../contexts/ApiContext'

function Urlap() {
    // saját belső state:
    const {postAdat, kategoriaLista} = useContext(ApiContext)
    const [adat, setAdat] = useState(
        {
            title: '',
            price: 0,
            category: '',
            description: '',
            image: ''
            
        }
    )


    function adatKuld(event){
        event.preventDefault()
        /* Összegyűjtjük az űrlap input mezőiből az adatokat, összeállítunk egy objektumot, post kéréssel elküldjük a megfelelő végpontra. */
        console.log("Küldés", adat)
        // validálás után- formai ellenőrzés
        postAdat("/products", adat)
    }

    function valtozasKezeles(event){
        // Itt frissítem a state értékét
        const sv={...adat};
        sv[event.target.id]=event.target.value
        setAdat({...sv})
    }

  return (
    <div>
        <form onSubmit={adatKuld}>
            <div className="mb-3">
                <label htmlFor="title" class="form-label">
                    Termék neve
                </label>
                <input type="text" pattern='^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüűA-ZÁÉÍÓÖŐÚÜŰ ]{2,}$' value={adat.title} onChange={valtozasKezeles} class="form-control" id="title"/>
            </div>

            <div className="mb-3">
                <label htmlFor="price" class="form-label">
                    Termék ára
                </label>
                <input type="number" min="1000" max="100000" value={adat.price} onChange={valtozasKezeles} class="form-control" id="price"/>
            </div>

            <div className="mb-3">
                <label htmlFor="category" class="form-label">
                    Termék kategóriája
                </label>
                <select  class="form-select" value={adat.category} onChange={valtozasKezeles} id="category">
                    <option selected>Válassz kategóriát</option>
                        {
                            kategoriaLista.map((elem, index)=>{
                            return <option key={index} value={elem}>
                                        {elem}
                                   </option>
                            }
                        )}
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="description" class="form-label">
                    Termék leírása
                </label>
                <textarea type="text" value={adat.description} onChange={valtozasKezeles} class="form-control" id="description"/>
            </div>

            <div className="mb-3">
                <label htmlFor="image" class="form-label">
                    Termék kép
                </label>
                <input className="form-control"  type="file" onChange={valtozasKezeles} id="image"/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Urlap