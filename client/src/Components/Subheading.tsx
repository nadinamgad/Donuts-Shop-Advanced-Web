import React from 'react'
import { useState } from 'react'
import '../Style/Subheading.css'

// import pic from '../assets/images-removebg-preview.png'


function Subheading() {
  


  return (
    <div className='containor-reviews'>
      <div className='blur'>
      <div className='top-reviews'>
            {/* <h1 className='text-reviews' >Reviews</h1>  */}
            {/* <h4 className='logo-reviews'>Donutopia</h4> */}
            {/* <img src={pic} className='logo-img-reviews' /> */}
            {/* <div className='star-reviews'>
              <Rate style={{color:'purple'}} tooltips={["Bad","Normal","Good","Very good","Excellent"]}/>
            </div> */}

        </div>
      
     

      <div className='bottom-reviews'>
                <div className='border-reviews'>
                  <span className='profile'></span>
                 

                 {/* <textarea className='box-reviews'id='box2-reviews' placeholder='What your feedback ?'/>
                 {/* <textarea className='box-reviews' placeholder='What your feedback ?'/> */}
                 {/* <textarea className='box-reviews' placeholder='What your feedback ?'/> */} 
                 

                
                </div>
               
      </div>
        
      </div>
       
    </div>
  )
}

export default Subheading
