import React, { createContext , useContext, useState } from 'react'

export const StateContext = createContext();

export const ContextProvider = ({ children }) => { // Add children as a prop
  const [activeMenu , setActiveMenu] = useState(true);
  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu }}> {/* Provide both activeMenu and setActiveMenu */}
      {children} 
    </StateContext.Provider>
  )
}

export default ContextProvider