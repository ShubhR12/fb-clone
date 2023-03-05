import { Avatar, Card } from "@mui/material";
import React from "react";
import "../css/Post.css";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

import { Public } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from '@mui/icons-material/Share';

const Post = ({photoURL ,image ,username,timestamp, message}) => {
  return (
    <div className="post">
      <Card className="post-card" sx={{ width: "100%", height: "115vh" }}>
        <div className="postings">
          <Avatar src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/free-Whatsapp-Dp-Boys-Stylish-Girls-Cute-Images-pics.jpg"></Avatar>
          <div className="post-info">
            <h5>John Doe 12:45pm</h5>

            <Public sx={{ marginTop: "55px", fontSize: "small" }} />
          </div>

          <MoreHorizRoundedIcon style={{ marginLeft: "75%" }} />
        </div>
        <div className="post-middle">
          <p>This is message body</p>
          <img
            style={{ height: "80vh" }}
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&w=1000&q=80"
          ></img>
        </div>
        <hr></hr>
        <div className="post-bottom">
          <div className="post-bottom-option">
            <ThumbUpOffAltIcon />
            <p>Like</p>
          </div>

          <div className="post-bottom-option">
            <CommentIcon />
            <p>Comment</p>
          </div>
          <div className="post-bottom-option">
            <ShareIcon/>  <p>Share</p>
            <p></p>
          </div>
        </div>
      </Card>
      <Card className="post-card" sx={{ width: "100%", height: "115vh", marginTop:"10px" }}>
        <div className="postings">
          <Avatar src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/free-Whatsapp-Dp-Boys-Stylish-Girls-Cute-Images-pics.jpg"></Avatar>
          <div className="post-info">
            <h5>{username} {timestamp}</h5>

            <Public sx={{ marginTop: "55px", fontSize: "small" }} />
          </div>

          <MoreHorizRoundedIcon style={{ marginLeft: "75%" }} />
        </div>
        <div className="post-middle">
          <p>This is message body</p>
          <img
            style={{ height: "80vh" }}
            src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ></img>
        </div>
        <hr></hr>
        <div className="post-bottom">
          <div className="post-bottom-option">
            <ThumbUpOffAltIcon />
            <p>Like</p>
          </div>

          <div className="post-bottom-option">
            <CommentIcon />
            <p>Comment</p>
          </div>
          <div className="post-bottom-option">
            <ShareIcon/>  <p>Share</p>
            <p></p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Post;
