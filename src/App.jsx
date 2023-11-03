import React, { useState, useEffect } from "react";
import { HeaderComponent } from "./components/HeaderComponent.jsx";
import { LikeButton } from "./components/LikeButton.jsx";
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
    return <div>Loading...</div>;
  }

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
  console.log(thoughts);

  const handleLikeButtonClick = () => {
    // do something
  };

  /* const handleLikeButtonClick = () => {
    // do something
  };*/
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
              handleLikeButtonClickFunc={handleLikeButtonClick}
            />
          </div>
        );
      })}
    </>
  );
};
