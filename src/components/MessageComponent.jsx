// Component for rendering messages
import React, { useState, useEffect } from "react";
import "../styles/MessageComponent.css";
import { LikeButton } from "./LikeButton";

export const MessageComponent = ({props}) => {
    return(
        <div className="message-container">
            <p>{props.message}</p>
            <div className="info-wrapper">
            <div className="like-info">
            <LikeButton props={props} handleLikeButtonClickFunc={handleLikeButtonClickFunc}/>
            <span className="numberoflikes">x{props.hearts}</span>
            </div>
            <div className="time-info">
            <p>{props.createdAt}</p>
            </div>
            </div>
        </div>
    );
};