import React from 'react'
import Logo from '../assets/img/logo.png'
import Socal from '../assets/img/social.png'


function Footer() {
  return (
    <div className='flex flex-col lg:flex-row justify-start lg:justify-center gap-14 lg:gap-32 bg-bg-main text-white p-14'>

        <div className='flex flex-col justify-between gap-4'>
            <img className='h-10 w-24' src={Logo} />
            <p>2021 Award winning Vaccination and Lorem ipsum dolor sit amet</p>

            <img className='h-12 w-52' src={Socal} />
        </div>
        <div>
            <h3 className='text-lg mb-5 font-bold'> Location </h3>
            <ul className='flex flex-col gap-3 text-gray-400'>
                <li> America </li>
                <li> Asia  </li>
                <li> Europe </li>
                <li> Africa </li>
            </ul>
        </div>

        <div>
            <h3 className='text-lg mb-5 font-bold'> Contact </h3>
            <ul className='flex flex-col gap-3 text-gray-400'>
                <li> About me </li>
                <li> Teams  </li>
                <li> Profile </li>
                <li> FAQ </li>
            </ul>
        </div>

        <div>
            <h3 className='text-lg mb-5 font-bold'> Legals </h3>
            <ul className='flex flex-col gap-3 text-gray-400'>
                <li> Privacy </li>
                <li> Disclaimer  </li>
                <li> Terms </li>
                <li> company </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer