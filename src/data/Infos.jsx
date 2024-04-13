import React from 'react'
import { FaCalendar } from "react-icons/fa";
import { MdOutlineViewKanban } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export const links=[
    {
        title : 'dashboard' , 
        icon:<MdDashboard />,
        linkss :[
            {
                name:"Product",
                icons : <MdOutlineProductionQuantityLimits />


            }
        ]
    },
    {
        title : 'informations', 
        icon:<BsInfoSquareFill />
        ,
        linkss : [
            {
                name : "calendar",
                icons : <FaCalendar />


            },
            {
                name : 'Kanban',
                icons :<MdOutlineViewKanban />

            }

        ]
    },
    
]
const Infos = () => {
    
  return (
    <div>
        
    </div>
  )
}

export default Infos