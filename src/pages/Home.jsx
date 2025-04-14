import React from 'react'
import Header from '../components/Header.jsx'
import Presentation from '../components/Presentation.jsx'
import '../App.css'

const Home = () => {
    return (
        <main id="inicio" className='mx-5 mt-10 lg:mx-35'>
            <Header></Header>
            <Presentation></Presentation>
        </main>
    )
}

export default Home