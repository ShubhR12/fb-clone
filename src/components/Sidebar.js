import React from 'react'
import '../css/Sidebar.css'
import Sidebaroption from '../reusable/Sidebaroption'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from '@mui/material';
import { useStateValue } from "../Stateprovider";

const Sidebar = () => {
  const[{user},dispatch]=useStateValue();
  return (
    <div>
        <Sidebaroption icon={  <Avatar  sx={{ width: 55, height: 50 }} alt="Cindy Baker" src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/free-Whatsapp-Dp-Boys-Stylish-Girls-Cute-Images-pics.jpg" />}></Sidebaroption>
        <div style={{fontWeight:'bold', marginTop:"-15px", marginLeft:"-25px"}}>

        {user.displayName}
        </div>
        <Sidebaroption  icon={<PeopleIcon sx={{color:"red"}}/>}  title="Friends"></Sidebaroption>
        <Sidebaroption icon={<LiveTvIcon sx={{color:"red"}}/>}  title="Watch"></Sidebaroption>
        <Sidebaroption icon={<GroupsIcon sx={{color:"Purple"}}/>}  title="Groups"></Sidebaroption>
        <Sidebaroption icon={<WatchLaterIcon sx={{color:"tomato"}}/>}  title="Memories"></Sidebaroption>
        <Sidebaroption icon={<EventIcon sx={{color:"tomato"}} />}title="Events"></Sidebaroption>
        <Sidebaroption  icon={<SettingsIcon sx={{color:"Blue"}}/>}title="Setting"></Sidebaroption>
    </div>
  )
}

export default Sidebar