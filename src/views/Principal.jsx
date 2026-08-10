import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Principal.css'

import Espera from '/public/yo/Esperando.png'
import Golpe_1 from '/public/yo/Golpe_1.png'
import Golpe_2 from '/public/yo/Golpe_2.png'
import Muelto from '/public/yo/Muelto.png'

export default function Principal() {

    const navigate = useNavigate()

    const fechaCumple = new Date('2026-08-15T00:00:00')

    const [tiempoRestante, setTiempoRestante] = useState(
        fechaCumple.getTime() - new Date().getTime()
    )

    const imagenes = [
        Golpe_1,
        Golpe_2
    ]

    const Mensajes = [
        "AUCH!!",
        "AUU!!",
        "OYE!!",
        "¡¿POR QUE ME PEGAS?!",
        "¡¿QUE TE HE HECHO?!"
    ]

    const [Golpes , setGolpes] = useState(0)
    const [imagenActual, setImagenActual] = useState(Espera)
    const [muerto, setMuerto] = useState(false)
    const [mensaje, setMensaje] = useState("Esperando tú Cumpleaños")

    const cambiarImagen = () => {
        const indiceAleatorio = Math.floor(Math.random() * imagenes.length)

        const indiceMensaje = Math.floor(Math.random() * Mensajes.length)

        setImagenActual(imagenes[indiceAleatorio])
        setMensaje(Mensajes[indiceMensaje])

        if(!muerto)
            setGolpes(Golpes + 1)
                
        if(Golpes + 1 >= 20){
            setImagenActual(Muelto)
            setMensaje("...")
            setMuerto(true)
        }
        else{
            // un pequeño tiempo
            setTimeout(() => {
                setImagenActual(Espera)
            }, 300)

            setTimeout(() => {
                setMensaje("Esperando tú Cumpleaños")
            }, 500)
        }

    }

    // const [hora,setHora] = useState(new Date())

    useEffect(()=>{

        // const intervalo = setInterval(() => {

        //     const diferencia = fechaCumple.getTime() - new Date().getTime()

        //     if(diferencia <= 0){
        //         clearInterval(intervalo)
        //         navigate('/Carta')
        //         return
        //     }

        //     setTimepoRestante(diferencia)

        // },1000)

        const actualizarContador = () =>{
            const diferencia = fechaCumple.getTime() - Date.now()

            if(diferencia <= 0){
                navigate('/Carta')
                return
            }

            setTiempoRestante(diferencia)

        }

        actualizarContador()

        const intervalo = setInterval(actualizarContador,1000)

        return () => clearInterval(intervalo)

    },[navigate])

    // const horaFormateada = hora.toLocaleTimeString('es-MX',{
    //     hour:'2-digit',
    //     minute:'2-digit',
    //     second:'2-digit',
    //     hour12: true
    // })

    const segundosTotales = Math.floor(tiempoRestante / 1000)

    const dias = Math.floor(segundosTotales / 86400)

    const horas = Math.floor(
        (segundosTotales % 86400) / 3600
    )

    const minutos = Math.floor(
        (segundosTotales % 3600) / 60
    )

    const segundos = segundosTotales % 60

    const horaFormateada = `${dias}d ${horas}h ${minutos}m ${segundos}s`

    return(
        <div className={`principal ${muerto ? 'muerto': ''}`}>
            <div className="principal-container">
                <div id="reloj" className="reloj">{horaFormateada}</div>  
                
                <div className='Character'>
                    <img src={imagenActual} alt="esperando..." onClick={cambiarImagen} draggable="false"/>
                </div>

                <h2 className="Mensaje">"{mensaje}"</h2>
            </div>
        </div>
    )
}