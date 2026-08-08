import { useEffect, useState } from 'react'
import '../style/Principal.css'

import Espera from '/public/Sonic.gif'
import Baile from '/public/SonicBailando.gif'

export default function Principal() {

    const imagenes = [
        Espera,
        Baile
    ]

    const [imagenActual, setImagenActual] = useState(Espera)

    const cambiarImagen = () => {
        const indiceAleatorio = Math.floor(Math.random() * imagenes.length)

        setImagenActual(imagenes[indiceAleatorio])
    }

    const [hora,setHora] = useState(new Date())

    useEffect(()=>{

        const intervalo = setInterval(() => {
            setHora(new Date())
        },1000)

        return () => clearInterval(intervalo)

    },[])

    const horaFormateada = hora.toLocaleTimeString('es-MX',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: true
    })

    return(
        <div className="principal">
            <div className="principal-container">
                <div id="reloj" class="reloj">{horaFormateada}</div>  
                
                <div className='Character'>
                    <img src={imagenActual} alt="esperando..." onClick={cambiarImagen}/>
                </div>

            </div>
        </div>
    )
}