import React from 'react'
import Navbar from './Navbar/page'
import Middle from './Middle/page'
// import Slider from './Sider/page'
import Retrangle from './Rectrangle/page'
import Button from './button/page'
import Booking from './Booking/page'
import Review from './Reviews/page'

const page = () => {
  return (
    <div className='h-200vh'>
      <Navbar/>
      <Middle/>
      
      <Retrangle/> 
 <Button/>
    <Booking/> 
      <Review/>   
    </div>
  )
}

export default page
