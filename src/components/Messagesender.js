import React, { useState } from "react";
import VideoCameraFrontRoundedIcon from "@mui/icons-material/VideoCameraFrontRounded";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import "../css/Messagesender.css";
import { Avatar, IconButton, Modal } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Messagesender = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen=()=>{
  
        setOpen(true);

  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="modal_pop">
          <form>
            <div className="modalheading">
              <h3>Create Post</h3>
              <IconButton onClick={handleClose} >
                <CloseIcon />
              </IconButton>
            </div>
            <div className="modalHeader-top">
              <Avatar />
              <h5>John</h5>
            </div>
            <div className="modalBody">
              <textarea
                rows="5"
                placeholder="whats on your mind John?"
            
              ></textarea>
            </div>
            <div className="modalFooter">
              <div className="modalfooter-left">
                <h4>Add Your Post</h4>
              </div>
              <div className="modalfooter-right">
                <IconButton>
                  <AddAPhotoIcon sx={{ color: "green" }} />
                </IconButton>
                <IconButton>
                  <MusicVideoIcon sx={{ color: "tomato" }} />
                </IconButton>
                <IconButton>
                  <EmojiEmotionsIcon sx={{ color: "yellow" }} />
                </IconButton>
              </div>
            </div>
            <input type="submit" className="post_submit" value="post" ></input>
          </form>
        </div>
      </Modal>
      <div className="messagesender">
        <div className="message-bar">
          <Avatar src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/free-Whatsapp-Dp-Boys-Stylish-Girls-Cute-Images-pics.jpg"></Avatar>
          <form>
            <input type="text" placeholder="what's on yor mind?"     onClick={handleOpen}/>
          </form>
        </div>
        <div className="message-bottom">
          <div className="message-option">
            <p className="message-option--option">
              {" "}
              <VideoCameraFrontRoundedIcon
                sx={{ color: "tomato", fontSize: "30px", marginTop: "5px" }}
              />
              Video
            </p>
            <p className="message-option--option">
              <AddPhotoAlternateRoundedIcon
                sx={{ color: "lightgreen", fontSize: "30px" }}
              />{" "}
              Photo/video
            </p>
            <p className="message-option--option">
              <SentimentSatisfiedRoundedIcon
                sx={{ color: "coral", fontSize: "30px" }}
              />
              feeling
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messagesender;
