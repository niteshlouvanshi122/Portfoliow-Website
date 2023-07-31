import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import java from "../assets/java.png";
import springboot from "../assets/springboot.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mysql from "../assets/mysql.png";
import Nodejs from "../assets/icons8-nodejs-250.png"
import MongoDb from "../assets/icons8-mongodb-250.png"
import Express from "../assets/icons8-express-js-250.png"
import VScode from "../assets/icons8-vs-code-250.png"
import Python from "../assets/icons8-python-250.png"
import PostMan from "../assets/icons8-postman-api-250.png"

const Skills = () => {


  const techs=[
    {
      id:1,
      src: html,
      title:'HTML',
      style: 'shadow-red-400'
      
    },
    {
      id:2,
      src: css,
      title:'CSS',
      style: 'pt-6 shadow-green-300'
      
    },
    {
      id:3,
      src:javascript,
      title:"JavaScript",
      style:'pt-4 shadow-blue-500'
      
    },
    
    {
      id:4,
      src:reactImage,
      title:'React',
      style: 'shadow-orange-500'
    },
    {
      id:5,
      src:Nodejs,
      title:'Node Js',
      style: 'shadow-blue-500'
    },
    {
      id:6,
      src:Express,
      title:'Express Js',
      style: 'shadow-yellow-500'
    },
    {
      id:7,
      src:MongoDb,
      title:'MongoDb',
      style: 'shadow-blue-400'
    },
    {
      id:8,
      src: Python,
      title:'Python',
      style: 'shadow-yellow-500'
    },
    {
      id:9,
      src: PostMan,
      title:'Postman',
      style: 'shadow-red-400'
    },
    {
      id:10,
      src: github,
      title:'GitHub',
      style: 'shadow-sky-500'
    }
    
  ]

  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

          {
            techs.map(({id, src, title, style})=>(
              <div 
                key={id} 
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
            </div>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Skills