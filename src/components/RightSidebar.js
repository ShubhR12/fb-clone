import { Image } from "@mui/icons-material";
import { ImageList } from "@mui/material";
import React from "react";
import "../css/Rightsidebar.css";

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const RightSidebar = () => {
  return (
    <div className="widget">
      <div className="widget_header">
        <div className="widget_headerLeft">
          <h4>Online Friends</h4>
        </div>
        <div className="widget__body">
          <div className="widget__bodyOptions">
          <AvatarGroup max={6}>
  <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3VUC8GpmFONZ1zHeX4inKMpyNNA7NUVNQw&usqp=CAU" />

  <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTT2bnfF3S4vfBRFr2S8Cq1eASDsxeDh6jswLE4_iOPINQP35oPDYjMw3dwhTHei8PZKo&usqp=CAU" />
  
  <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwIjMMGGKfEHrawR7b3xPPj1mCVe0UFwyjQ&usqp=CAU" />
  <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTIsZEneqayAwepuOs0p0JD76XY_kUhqn3w&usqp=CAU" />
  <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTIsZEneqayAwepuOs0p0JD76XY_kUhqn3w&usqp=CAU" />
</AvatarGroup>
          </div>
          <hr></hr>
          <h5>Sponsered</h5>
          <ImageList>
            <img
              style={{ width: "150px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlqC4ZZdkC6LoR3823iWAp_lz7hOjrs0bA6C1BkZ5OgNHnJs8QCCrqW1h3_-rwG3zLXBo&usqp=CAU"
            ></img>
            <img
              style={{ width: "150px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2VVDdCUVp_qbluxX4nV8Sv4ECtIyhnb15aA&usqp=CAU"
            ></img>
          </ImageList>
          <p>Labos Food</p>
          <hr></hr>
          <h5>Birthdays</h5>
          <div style={{display:"flex", alignItem:"center",justifyContent:"center"}}>
         
          <img style={{ width: "40px", height:"40px",marginTop:"16px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujvytr3yrpAxJN3jyoAJo8wh4DJlFz2_lRQ&usqp=CAU"></img>
          <p>Jessica, Erica and Two <br></br>
          others Have Birthday Today.</p>
             </div>
          <hr></hr>

          <h2>Market place</h2>
          <ImageList>
            <img
              style={{ width: "150px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-IGbg1nm6ubIdI-6bBIDgN2n_L64tjeP03uG0TLlDnefCk1ko8p7EOD42TUzL1y1q3E&usqp=CAU"
            ></img>
            <img
              style={{ width: "150px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_WvO7u7Rw-PDvii3sNUbpPUpZ6I-dd6QgQ&usqp=CAU"
            ></img>
          </ImageList>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
