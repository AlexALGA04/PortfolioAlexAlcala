import React from 'react'
import Cohete from '../images/cohete.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


function Presentation() {
  return (
    <div className='flex justify-center mt-20'>
        <div className="w-[80%]">
            <h1 className='text-white text-center text-5xl font-bold lg:text-left lg:text-6xl'>Soy <span className='text-[#A855F7]'>Àlex Alcalá</span><span className="saludando">👋</span></h1>
            <h2 className='text-white text-center text-3xl my-10 lg:text-left lg:text-4xl'>Desarrollador Fullstack</h2>
            <p style={{ fontFamily: 'Quicksand, sans-serif' }} className='text-[#9CA3AF] mt-15 text-[18px] w-[90%] text-justify mx-auto lg:mx-0 lg:text-[25px] lg:w-[60%]'>
                Soy un desarrollador web motivado con experiencia en diversas tecnologías, 
                adaptable y con facilidad para el trabajo en equipo. 
                Aspiro a crecer en un entorno dinámico donde pueda aplicar y expandir mis conocimientos.
            </p>
            <div className='flex items-center justify-around mt-30 lg:justify-start'>
                <button type="button" className='bg-white px-5 py-3 rounded-[15px] text-2xl lg:px-20'>Currículum</button>
                <button type="button" className='flex items-center border-1 border-white rounded-full text-white h-10 px-5 lg:px-15 lg:h-12 lg:ml-15'><FontAwesomeIcon className='mr-1' icon={faPaperPlane} />Contactame</button>
            </div>
        </div>
        <div className="items-center hidden lg:flex">
          <img id="coheteImg" src={Cohete} className='object-contain flotando'/>
        </div>
    </div>
  )
}

export default Presentation