// Component for rendering messages
import React, { useState, useEffect } from "react";
import { LikeButton } from "./LikeButton";

export const MessageComponent = ({props}) => {
    return(
        <>
            <p>{props.message}</p>
            <p>{props.createdAt}</p>
        </>
    );
};