import React from 'react'
import '../App.css'
import githubIcon  from '../images/icons/github_icon.png'
import linkedinIcon from '../images/icons/linkedin_icon.png'
import gmailIcon from '../images/icons/gmail_icon.png'

function Header() {
  return (
    <header className="">
        <nav>
            <ul className='flex text-white justify-center border-1 border-[#A855F7] p-3 px-5 rounded-full'>
              <li className='mr-6'><a href="#inicio">Inicio</a></li>
              <li className='mr-6'><a href="#habilidades">Habilidades</a></li>
              <li className='mr-6'><a href="#proyectos">Proyectos</a></li>
              <li><a href="#estudios">Estudios</a></li>
            </ul>
        </nav>
        {/*<div className='flex ml-auto px-10 text-white border-1 border-[#A855F7] p-3 rounded-full'>
            <a className='mr-10' href="https://github.com/AlexALGA04" target="_blank">
            <img className='w-[25px] h-[25px]' src={githubIcon} alt="GitHub"/>
            </a>
            <a className='mr-10' href="https://linkedin.com/in/tuusuario" target="_blank">
            <img className='w-[25px] h-[25px]' src={linkedinIcon} alt="LinkedIn"/>
            </a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank">
            <img className='w-[25px] h-[25px]' src={gmailIcon} alt="SendGmail"/>
            </a>
        </div>*/}
    </header>
  )
}

export default Header