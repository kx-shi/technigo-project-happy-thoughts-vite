// Component for rendering messages
import React, { useState, useEffect } from "react";
import "../styles/MessageComponent.css";
import { LikeButton } from "./LikeButton";
import moment from "moment";

export const MessageComponent = ({props, handleLikeButtonClick}) => {
    return(
        <div className="message-container">
            <p>{props.message}</p>
            <div className="info-wrapper">
                <div className="like-info">
                    <LikeButton props={props} handleLikeButtonClick={handleLikeButtonClick}/>
                    <span className="numberoflikes">x{props.hearts}</span>
                </div>
                <div className="time-info">
                    <p>{moment(props.createdAt).fromNow()}</p>
                </div>
            </div>
        </div>
    );
};