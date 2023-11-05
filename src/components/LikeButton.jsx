// Component that handles like
// POST <https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like>
import React, { useState, useEffect } from "react";
import "../styles/LikeButton.css";

export const LikeButton = ({props, handleLikeButtonClick}) => { 
    return(
        <button className="likebutton" onClick={() => handleLikeButtonClick(props._id)}>❤️</button>
    )
}