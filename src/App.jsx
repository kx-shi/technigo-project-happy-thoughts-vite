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

  const handleLikeButtonClick = (thoughtID) => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtID}/like`, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then((updatedThought) => {
        let updatedThoughtsList = thoughts.map((thought) => {
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
