// Component for rendering messages
import React, { useState, useEffect } from "react";
import { LikeButton } from "./LikeButton";

export const MessageComponent = ({props, handleLikeButtonClickFunc}) => {
    return(
        <>
            <p>{props.message}</p>
            <p>{props.createdAt}</p>
            <p>{props.hearts}</p>
            <LikeButton props={props} handleLikeButtonClickFunc={handleLikeButtonClickFunc}/>
        </>
    );
};