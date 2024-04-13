
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
import Static from './pages/Static'
import {Route , Routes} from 'react-router-dom';
import { useState ,useContext} from 'react';
import {StateContext} from './context/Context-Provider.jsx';

function App() {
  const {activeMenu , setActiveMenu} = useContext(StateContext); 
  
  return (

    <>
    {/* sidebar */}
      {
        activeMenu ?(
          <div className='fixed h-full bg-red-500 mt-14'>
              <Sidebar />
          </div>
        ):
        (
          <div className='fixed bg-red-500 h-full mt-14'>
              <Sidebar />
          </div>
        )
      }
       <div className='fixed w-full bg-blue-500 h-14'>
        <Navbar />
       </div>
       <Routes>
         <Route  path="/Static" element={<Static/>}/>

       </Routes>
       </>
  )
}

export default App
