import React, { useState, useEffect } from "react";
import { HeaderComponent } from "./components/HeaderComponent.jsx";
import { LikeButton } from "./components/LikeButton.jsx"
import { MessageComponent } from "./components/MessageComponent.jsx"
import { TextForm } from "./components/TextForm.jsx"

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch initial thoughts through API
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then(res => res.json())
      .then(json => {
        setThoughts(json)
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
        <div>Loading...</div>
    )
  }

  const handleLikeButtonClick = () => {
    // do something

  }

  const handleFormSubmit = () => {
    // do something
    
  }
  /*
  const handleLikeButtonClick = (thoughtID) => {
    // Send the POST request with the id given by likebutton
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtID}/like`, {
      method: 'POST',
      body: JSON.stringify({ message: 'Hello world' })
    })
      .then((res) => res.json())
      .then((updatedThought) => {
        console.log(updatedThought);
        //setThoughts((thoughts) => [updatedThought, ...thoughts])
      })
  }
  */

  console.log(thoughts)

  return(
    <>
      <HeaderComponent />
      <TextForm handleFormSubmitFunc={handleFormSubmit} />
      {thoughts.map((thought) => {
        return(
          <div key={thought.id} className="thought-container">
            <MessageComponent props={thought} handleLikeButtonClickFunc={handleLikeButtonClick} />
          </div>
        )})}
    </>
  )};
