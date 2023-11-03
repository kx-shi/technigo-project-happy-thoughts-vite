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
        <div className="loading-screen">
          <p>Loading...</p>
        </div>
    )
  }

  /* Function for handling clicks on like button
   * @param thoughtID: _id of liked thought
   * 
   * This functions creates a new thoughts list by iterating through
   * the old list and updating the 'hearts'-attribute of the thought
   * which got liked. Then update state thoughts through setThoughts.
   */
  const handleLikeButtonClick = (thoughtID) => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtID}/like`, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then((updatedThought) => {
        let updatedThoughtsList = thoughts.map((thought) => {
          // Iterate old thought-list and update the one which got liked
          if(thought._id === updatedThought._id) {
            return {
              ...thought,
              hearts: updatedThought.hearts
            }
          }
          return thought;
        });
        setThoughts(updatedThoughtsList);
      });
  };

  const handleFormSubmit = () => {
    // do something
    
  }

  return(
    <>
      <HeaderComponent />
      <TextForm handleFormSubmitFunc={handleFormSubmit} />
      {thoughts.map((thought) => {
        return(
          <div key={thought._id} className="thought-container">
            <MessageComponent props={thought} />
            <LikeButton key={thought._id} props={thought} handleLikeButtonClickFunc={handleLikeButtonClick} />
          </div>
        )})}
    </>
  )};
