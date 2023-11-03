// Component for rendering messages
import React, { useState, useEffect } from "react";
import "../styles/MessageComponent.css";

export const MessageComponent = ({props}) => {
    return(
        <div className="message-container">
            <p>{props.message}</p>
            <div className="info-wrapper">
            <div className="time-info">
            <p>{props.createdAt}</p>
            </div>
            </div>
        </div>
    );
};