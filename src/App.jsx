
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
import Static from './pages/Static'
import {Route , Routes} from 'react-router-dom';
import { useState ,useContext} from 'react';
import {StateContext} from './context/Context-Provider.jsx';
import {CustomKanban} from './pages/kanban/components'
import Calendar from './pages/calendar/calendar.jsx';
function App() {
  const {activeMenu , setActiveMenu} = useContext(StateContext); 
  
  return (

    <>
    {/* sidebar */}
      {
        activeMenu ?(
          <div className='fixed h-full bg-red-500 mt-14 '>
              <Sidebar  />
              
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
      
      {activeMenu ?<div className='pl-52 pt-16'>
    <Routes>
      <Route path="/Kanban" element={<CustomKanban />} />
      <Route path='/calendar' element={<Calendar/>}/>

    </Routes>
  </div> :
  <div className='pl-16 pt-16'>
  <Routes>
    <Route path="/Kanban" element={<CustomKanban />} />
    <Route path='/calendar' element={<Calendar/>}/>
  </Routes>
</div> }
      
       </>
  )
}

export default App
