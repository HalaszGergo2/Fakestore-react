import React, { useState } from 'react'

function Urlap() {
    // saját belső state:
    const [adat, setAdat] = useState(
        {
            title: '...',
            price: 1000,
            category: '...',
            description: '...',
            image: '...'
            
        }
    )


    function adatKuld(event){
        event.preventDefault()
        /* Összegyűjtjük az űrlap input mezőiből az adatokat, összeállítunk egy objektumot, post kéréssel elküldjük a megfelelő végpontra. */
        console.log("Küldés", adat)
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
                <input type="text" value={adat.title} onChange={valtozasKezeles} class="form-control" id="title" aria-describedby="titleHelp"/>
            </div>

            <div className="mb-3">
                <label htmlFor="price" class="form-label">
                    Termék ára
                </label>
                <input type="number" min="1000" max="100000" value={adat.price} onChange={valtozasKezeles} class="form-control" id="price" aria-describedby="titleHelp"/>
            </div>

            <div className="mb-3">
                <label htmlFor="category" class="form-label">
                    Termék kategóriája
                </label>
                <input type="text" value={adat.category} onChange={valtozasKezeles} class="form-control" id="category" aria-describedby="titleHelp"/>
            </div>

            <div className="mb-3">
                <label htmlFor="description" class="form-label">
                    Termék leírása
                </label>
                <input type="text" value={adat.description} onChange={valtozasKezeles} class="form-control" id="description" aria-describedby="titleHelp"/>
            </div>

            <div className="mb-3">
                <label htmlFor="image" class="form-label">
                    Termék képe
                </label>
                <input type="image" value={adat.image} onChange={valtozasKezeles} class="form-control" id="image" aria-describedby="titleHelp"/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Urlap