import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const SocialLinks = () => {

  const links=[
    {
      id: 1,
      child: (
        <>
          LinkedIn<FaLinkedin size={30}/>
        </>
      ),
      href: 'https://linkedin.com/in/nitesh-louvanshi-0b1b44250',
      style:'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          GitHub<FaGithub size={30}/>
        </>
      ),
      href: 'https://github.com/niteshlouvanshi122'
      
    },
    {
      id: 3,
      child: (
        <>
          Mail<HiOutlineMail size={30}/>
        </>
      ),
      href: 'mailto:niteshlovanshi109@gmail.com'
      
    },
    {
      id: 4,
      child: (
        <>
          Resume<BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: 'https://drive.google.com/file/d/1PXvuqcFSEi9dcvfW0wI6C0G5DoyGLC1F/view',
      
    },
  ]

  return (
    <div className='hidden  lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

          {links.map(({id,child,href,style})=>(
              <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'+" "+style}>
              <a href={href} className='flex justify-between items-center w-full text-white'>
                {child}
              </a>
            </li>
          ))}

          
        </ul>
    </div>
  )
}

export default SocialLinks