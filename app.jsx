import { useState } from 'react'
import './App.css'
import Head from './Head'
import './css/Head.css'
import {courses} from './Data'
import Course from './Course'
import './css/Main.css'

function App() {
  

  return (
    
      
      <div>
        <Head/>
        <div className='main'>
        { courses?.map((course)=>(
          <Course key={course.id} course={course}/>
         ))
        }
        </div>
      </div>
        
    
  )
}

export default App
