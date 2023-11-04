import React, { useState, useEffect } from "react";
import { HeaderComponent } from "./components/HeaderComponent.jsx";
import { MessageComponent } from "./components/MessageComponent.jsx";
import { TextForm } from "./components/TextForm.jsx";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newThought, setNewThought] = useState("");
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  // Fetch initial thoughts through API
  const fetchThoughts = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
    setLoading(false);
  };
  useEffect(() => {
    fetchThoughts();
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

  // Handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(apiUrl, options)
      .then((res) => res.json())
      .then((updatedThought) => {
        setThoughts((thought) => [updatedThought, ...thought]);
      });
    // After updating a new thought, clear the text-area of the TextForm
    setNewThought("");
  };

  return (
    <>
      <HeaderComponent />
      <TextForm
        handleFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />
      {thoughts.map((thought) => {
        return (
          <div key={thought._id} className="thought-container">
            <MessageComponent
              props={thought}
              handleLikeButtonClick={handleLikeButtonClick}
            />
          </div>
        );
      })}
    </>
  );
};
