import React from "react";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';


import { Avatar } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useStateValue } from "../Stateprovider";


const Header = () => {
  const[{user},dispatch]=useStateValue();
  return (
    <div className="header">
      <div className="header-left">
        
        <img
          src="https://iconape.com/wp-content/png_logo_vector/facebook-icon-white.png"
          alt="fb-icon"
          style={{ width: "60px" }}
        ></img>
        <div className="header-search">
          <SearchIcon sx={{fontSize:"30px"}}></SearchIcon>
          <input type="text" placeholder="Search facebook"></input>
        </div>
      </div>

      <div className="header-middle">
        
       
        <HomeIcon className="effect effect--active" sx={{fontSize:"30px"}} />
        <OndemandVideoIcon className="effect effect--active"  sx={{fontSize:"30px"}}/>
        <GroupsIcon className="effect effect--active"  sx={{fontSize:"30px"}}/>
        <StorefrontOutlinedIcon className="effect effect--active"  sx={{fontSize:"30px"}}/>
        <SportsEsportsIcon className="effect effect--active"  sx={{fontSize:"30px"}} />
        

      </div>
      <div className="header-right">
      <Avatar  sx={{ width: 55, height: 50 }} alt="Cindy Baker" src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/free-Whatsapp-Dp-Boys-Stylish-Girls-Cute-Images-pics.jpg" />
    {user.displayName}
      <div className="left-icon">

      <AddCircleOutlineIcon  sx={{fontSize:"30px"}} />
      </div>
      <div className="left-icon">
        
      <ChatIcon sx={{fontSize:"30px"}}/>
      </div>
      <div className="left-icon">
        
      <CircleNotificationsIcon sx={{fontSize:"30px"}}/>
      </div>
      
        
      </div>
    </div>
  );
};

export default Header;
