import React from 'react'
import { Link } from 'react-router-dom'
import { LuShoppingCart } from "react-icons/lu";
import { IoIosChatboxes } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 h-full items-center text-2xl '>
      <h1 className='cursor-pointer text-4xl'><IoLogoGithub />
      </h1>
      <div className='flex gap-4 cursor-pointer'>
        <Link to='./cart'>
          <LuShoppingCart />

        </Link>
        <Link to='./userProfile'>
        <IoIosChatboxes />

        </Link>
      </div>
    </div>
  )
}

export default Navbar