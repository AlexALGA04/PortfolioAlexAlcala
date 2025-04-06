import React from 'react'
import Cohete from '../images/cohete.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


function Presentation() {
  return (
    <div className='flex mt-30'>
        <div className='w-[40%]'>
            <h1 className='text-white text-5xl font-bold'>Soy <span className='text-[#A855F7]'>Àlex Alcalá</span><span>👋</span></h1>
            <h2 className='text-white text-3xl my-10'>Desarrollador Fullstack</h2>
            <p style={{ fontFamily: 'Quicksand, sans-serif' }} className='text-[#9CA3AF] mt-15 text-[18px]'>
                Soy un desarrollador web motivado con experiencia en diversas tecnologías, 
                adaptable y con facilidad para el trabajo en equipo. 
                Aspiro a crecer en un entorno dinámico donde pueda aplicar y expandir mis conocimientos.
            </p>
            <div className='flex'>
                <button type="button" className='bg-white px-5 py-3 rounded-[15px] text-2xl'>Currículum</button>
                <button type="button" className='flex border-1 border-white rounded-full text-white'><FontAwesomeIcon icon={faPaperPlane} />Contactame</button>

            </div>
        </div>
        <img src={Cohete} className='w-[615px] h-[615px]'/>
    </div>
  )
}

export default Presentation