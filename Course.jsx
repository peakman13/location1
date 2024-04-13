import React from 'react'

function Course({course}) {
   const {id,title,description,price,link,image} = course;
  return (
    <div >
       <div className='course'>
        <img src={image} width={250}  height={150} className='image' />
        <h4 className='titles'>{title}</h4>
        <h5>{description}</h5>
        <h3 className='price'> {price} EU</h3>
        <a href='https://github.com/peakman13' className='link'>{link} </a>


       </div>
      
    </div>
  )
}

export default Course
