import React from 'react'
import '../css/Sidebar.css'

const Sidebaroption = ({src, icon, title}) => {
  return (
    <div className='sidebarrow'>
    {icon}
    {src}
   <p>{title}</p> 
    </div>
  )
}

export default Sidebaroption