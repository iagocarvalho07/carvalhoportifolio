import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Myfooter = () => {
  return (
    <div id='myFooter' className='h-80 flex flex-col items-center mt-10'>
      <h1 className='heading lg:max-w-[45vw] text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'>Proto para trazer <span className='text-purple'>sua</span>  presença digital para o proximo nivel?</h1>
      <p className='text-white-100 text-center'> </p>
      <a href="https://www.linkedin.com/in/iagoscarvalho/">
      <MagicButton title="Entre Em contato" icon={<FaLocationArrow/>} positon="right"/>
      
      </a>
    </div>
  )
}

export default Myfooter