import React from 'react'
import Button from './Button'

function Subscribe() {
  return (
    <div className='flex flex-col md:flex-row w-[75%] mx-auto justify-center gap-10 px-5 bg-subscribe-background py-10 mb-20'>

        <div>
            <h3 className='text-3xl font-bold mb-5'> Subscribe to Our Newsletter For <br></br> Weekly Article Update.</h3>

            <p className='text-gray-500'>Passages of lorem ipsum available, but the majority have suffered alteration, by injected words.</p>
        </div>

        <hr className='border border-gray-700 h-auto' />


        <Button text="Get Started" />

    </div>
  )
}

export default Subscribe