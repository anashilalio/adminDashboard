import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Static from '../pages/Static.jsx';
import {links} from '../data/Infos';
import { GiHamburgerMenu } from "react-icons/gi";

import {StateContext} from '../context/Context-Provider.jsx'
const Sidebar = () => {
  const {activeMenu , setActiveMenu} = useContext(StateContext); 
  return (
    <>
    <div className='w-full ps-4 text-2xl' >

    <GiHamburgerMenu  className='cursor-pointer mt-4 mb-4' 
    onClick={()=>{setActiveMenu((prev)=>!prev)}}/>

    </div>
    <div className='flex flex-col gap-8'>
        {links.map((item)=>(
           activeMenu ?
            <div className='ps-4 pr-4'>
              <div className='flex items-center gap-2 text-2xl cursor-pointer text-gray-300 hover:text-white'>
                {item.icon}
              {item.title}
              </div>
              {item.linkss.map((itemss)=>(
                
              
               <Link to={`/${itemss.name}`} className='flex items-center gap-2 text-xl ml-4 mt-2 text-gray-300 hover:text-white'>
                {itemss.icons}
               {itemss.name}
               
               </Link>
              ))}
          </div>
          
           :

            <div className='p-4'>
              <div className='flex items-center gap-2 text-2xl mt-2 text-gray-300  hover:text-white '>

              {item.icon}
              </div>
              {item.linkss.map((itemss)=>(
                
              
                <Link to={`/${itemss.name}  `}className='flex items-center gap-2 text-xl mt-2 text-gray-300 hover:text-white'>
                 {itemss.icons}
                
                
                </Link>
               ))}
            </div>
          
              
        ))}
    </div>
    </>
  )
}

export default Sidebar