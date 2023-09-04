import React from 'react';
import rectangle from '../assets/img/Rectangle.png';
import Button from './Button';

function Consultation() {
  // Define a CSS style object to set the background image
  const backgroundStyle = {
    backgroundImage: `url(${rectangle})`, // Set the background image using the imported image
    backgroundSize: 'cover', // Adjust the background size as needed
    backgroundRepeat: 'no-repeat',
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${rectangle})`, // Fix the interpolation of the rectangle variable
    // You can also add more CSS properties to style the background further
  };

  return (
    <div className='flex justify-center relative text-white py-28 bg-gradient-to-b from-transparent via-black to-black' style={backgroundStyle}>
      {/* <div className='absolute inset-0 bg-black opacity-50'></div> */}
      <div className='flex flex-col md:flex-row w-[90%] md:w-[65%] gap-5 justify-between'>
        <p className='text-3xl'>
          Get Free Consultations! We’re <br></br> Ready to Work Together
        </p>
       <Button text='Get Free Consultation' />
      </div>
    </div>
  );
}

export default Consultation;
