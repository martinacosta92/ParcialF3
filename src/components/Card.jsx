
import React, { useState } from 'react'


export const Card = () => {
    const [hincha, setHincha] = useState({
        nombre: '',
        equipo: '',
    })
    
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)


const handleSubmit = (event) => {

    event.preventDefault()
        if (hincha.nombre.length >3 && hincha.equipo.length > 6)
    { setShow(true)
    setError(false)
} else 
setError (true)

}
console.log(hincha)
return (
    <form className='card'>
        <label htmlFor="Nombre" className='form'> <h4>Ingrese Nombre</h4></label>
        <input type="text" onChange={(event) => setHincha({...hincha, nombre: event.target.value})}/>
        <label htmlFor="Ciudad" className='form'> <h4>Ingrese Equipo Favorito</h4></label>
        <input type="text" onChange={(event)=> setHincha({...hincha, equipo: event.target.value})}/>
        <br></br>
        <button onClick= {handleSubmit} className='boton'> Enviar </button>
{error && <h4>Por favor chequea que la informacion seae correcta</h4> }
{show ? <> <h2 className='gracias'> Gracias {hincha.nombre} por ser hincha de {hincha.equipo} </h2>
            </>
            : null }

    </form>
    
)
} 