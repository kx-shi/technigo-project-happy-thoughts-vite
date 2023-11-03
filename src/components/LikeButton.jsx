// Component that handles like
// POST <https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like>
import React, { useState, useEffect } from "react";
import "../styles/LikeButton.css";
import "../styles/MessageComponent.css";

export const LikeButton = ({props, handleLikeButtonClickFunc}) => { 
    return(
            <div className="like-info">
                <button className="likebutton" onClick={handleLikeButtonClickFunc(props._id)}>❤️</button>
                <span className="numberoflikes">x{props.hearts}</span>
            </div>
    )
}