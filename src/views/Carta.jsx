import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

import '../style/Carta.css'
import CartaData from "../Data/CARTA.json"

import Paso_1 from '/public/yo/Baile_1.png'
import Paso_2 from '/public/yo/Baile_2.png'
import Paso_3 from '/public/yo/Baile_3.png'
import Paso_4 from '/public/yo/Baile_4.png'


export default function Carta(){

    const [frame,setFrame] = useState(0)
    const [brincando, setBrincando] = useState(false)

    const baile = [Paso_1,Paso_2,Paso_3,Paso_4]

    //Baile
    useEffect(() => {

        const intervalo = setInterval(() => {
            setFrame(prev => (prev + 1) % baile.length)
        },180)

        return () => clearInterval(intervalo)

    },[])

    //Jumping jeje
    useEffect(() => {

        const intervalo = setInterval(() =>{
            setBrincando(true)

            setTimeout(() => {
                setBrincando(false)
            }, 250)
        },350)

        return () => clearInterval(intervalo)
    }, [])

    // Confeti
    useEffect(()=>{
        confetti({
            particleCount: 250,
            spread: 70,
            origin:{
                x:0,
                y:0.6
            }
        })

        confetti({
            particleCount: 250,
            spread: 100,
            origin:{
                y:0.3
            }
        })

        confetti({
            particleCount: 250,
            spread: 100,
            origin:{
                x:1,
                y:0.6
            }
        })

    },[])

    return(
        <>
            <div className="Carta">
                <div className='NotaBonita'>
                    <h1>{CartaData.Titulo}</h1>
                    
                    <p>{CartaData.Mensaje}</p>
                </div>
            </div>

            <div className={`Monito ${brincando ? 'brincando' : ''}`}>
                <img src={baile[frame]} alt="Monito Bailando" />
            </div>
        </>
    )
}